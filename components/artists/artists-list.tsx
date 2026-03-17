"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { alleyTables, tableName } from "@/lib/data";
import type { AlleyTable } from "@/lib/data";
import { Search, SlidersHorizontal, Check, X } from "lucide-react";
import { TableTypeChip, VendorBadge } from "./table-badges";

const tableTypes = ["Artists", "Vendors", "Info"];

function ArtistTableCard({ table }: { table: AlleyTable }) {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div
            onClick={() => setCardOpen(!cardOpen)}
            className="bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer p-4 relative"
        >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

            {/* Table number badge + type badge */}
            <div className="flex items-center gap-3 mb-3">
                {table.tableNumber > 0 && (
                    <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
                        Table {table.tableNumber}
                    </div>
                )}
                {table.type === "vendor" && <VendorBadge tableNumber={table.tableNumber} />}
                <TableTypeChip type={table.type} className="bg-secondary-dark/10 text-secondary-dark" />
            </div>

            {/* Name(s) */}
            <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-primary transition-colors mb-2">
                {tableName(table) || (
                    <span className="text-slate-400 italic">Artist TBA</span>
                )}
            </h3>

            {/* Hours (info tables only) */}
            {table.type === "info" && table.hours && !cardOpen && (
                <p className="text-xs font-mono text-primary mb-2">🕐 {table.hours}</p>
            )}

            {/* Description (foldable) */}
            {cardOpen && (
                table.description
                    ? <p className="text-sm text-slate-700 leading-relaxed mb-4 break-words">{table.description}</p>
                    : <p className="text-sm text-slate-500 italic mb-4">No details yet — check back soon!</p>
            )}

            {/* Optional image */}
            {table.image && (
                <div className="relative w-full h-40 mt-2 rounded-md overflow-hidden border border-primary/20">
                    <Image
                        src={table.image}
                        alt={tableName(table)}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
}

export default function ArtistsList() {
    const [search, setSearch] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filterOpen, setFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!filterOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                setFilterOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [filterOpen]);

    const toggleType = (type: string) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const filteredTables = alleyTables.filter((table) => {
        const query = search.toLowerCase();
        const matchesSearch = !query || tableName(table).toLowerCase().includes(query);
        const matchesType =
            selectedTypes.length === 0 ||
            (selectedTypes.includes("Artists") && table.type === "artist") ||
            (selectedTypes.includes("Vendors") && table.type === "vendor") ||
            (selectedTypes.includes("Info") && table.type === "info");
        return matchesSearch && matchesType;
    });

    return (
        <div className="mt-8">
            {/* Search Bar with Filter Icon */}
            <div className="relative mb-6">
                <div className="flex items-center gap-0">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name..."
                            className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-md border border-primary/30 rounded-l-lg font-mono text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                    </div>
                    <div ref={filterRef} className="relative">
                        <button
                            onClick={() => setFilterOpen((prev) => !prev)}
                            className={`relative px-3.5 py-2.5 border border-l-0 border-primary/30 rounded-r-lg transition-all cursor-pointer ${filterOpen || selectedTypes.length > 0
                                ? "bg-primary text-white"
                                : "bg-white/50 backdrop-blur-md text-slate-500 hover:bg-primary/10"
                                }`}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            {selectedTypes.length > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary border-2 border-white rounded-full text-white text-[10px] font-mono font-bold flex items-center justify-center">
                                    {selectedTypes.length}
                                </span>
                            )}
                        </button>

                        {/* Type Filter Dropdown */}
                        {filterOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-48 bg-white/80 backdrop-blur-md border border-primary/30 rounded-lg shadow-lg p-2">
                                <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-primary/10">
                                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                                        Type
                                    </span>
                                    {selectedTypes.length > 0 && (
                                        <button
                                            onClick={() => setSelectedTypes([])}
                                            className="font-mono text-xs text-primary hover:underline cursor-pointer"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                                {tableTypes.map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => toggleType(t)}
                                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left font-mono text-sm transition-colors cursor-pointer ${selectedTypes.includes(t)
                                            ? "bg-primary/10 text-primary"
                                            : "text-slate-700 hover:bg-slate-100"
                                            }`}
                                    >
                                        <span
                                            className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedTypes.includes(t)
                                                ? "border-primary bg-primary"
                                                : "border-slate-300"
                                                }`}
                                        >
                                            {selectedTypes.includes(t) && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                                        </span>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Active Type Chips — fixed height so content doesn't shift */}
            <div className="h-8 mb-2 flex items-center">
                <div className="flex flex-wrap gap-2">
                    {selectedTypes.map((t) => (
                        <button
                            key={t}
                            onClick={() => toggleType(t)}
                            className="flex items-center gap-1 font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                            {t}
                            <X className="w-3 h-3" strokeWidth={2.5} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Results */}
            {filteredTables.length === 0 ? (
                <p className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-md border border-primary/30 rounded font-mono text-sm text-slate-900">
                    No tables matched your search.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {filteredTables.map((table) => (
                        <ArtistTableCard key={table.tableNumber} table={table} />
                    ))}
                </div>
            )}
        </div>
    );
}
