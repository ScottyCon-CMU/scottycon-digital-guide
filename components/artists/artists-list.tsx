"use client";

import { useState, useRef, useEffect } from "react";
import { alleyTables, tableName } from "@/lib/data";
import type { AlleyTable } from "@/lib/data";
import { Search, SlidersHorizontal, Check, X } from "lucide-react";
import { TableTypeChip, VendorBadge } from "./table-badges";

const tableTypes = ["Artists", "Vendors", "Info"];

function ArtistTableCard({ table, isOpen, onToggle }: { table: AlleyTable; isOpen: boolean; onToggle: () => void }) {
    return (
        <div
            data-table={table.tableNumber}
            onClick={onToggle}
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
                <TableTypeChip type={table.type} />
            </div>

            {/* Name(s) + chevron */}
            <div className="flex items-start justify-between mb-2">
                <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">
                    {tableName(table) || (
                        <span className="text-slate-400 italic">Artist TBA</span>
                    )}
                </h3>
                <svg
                    className={`w-4 h-4 text-primary mt-1.5 ml-2 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            {/* Animated expand area */}
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease",
                }}
            >
                <div className="overflow-hidden">
                    {/* Hours (info tables only) */}
                    {table.type === "info" && table.hours && (
                        <p className="text-xs font-mono text-primary mb-2 pt-0.5">🕐 {table.hours}</p>
                    )}

                    {/* Description */}
                    <div className="text-sm leading-relaxed mb-2 break-words pt-0.5">
                        {table.description
                            ? <span className="text-slate-700">{table.description}</span>
                            : <span className="text-slate-500 italic">No details yet — check back soon!</span>
                        }
                    </div>

                    {/* Optional image */}
                    {table.images && table.images.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {table.images.map((src, i) => (
                                <div key={i} className="flex-1 min-w-[calc(25%-0.375rem)] rounded-md overflow-hidden border border-primary/20">
                                    <img
                                        src={src}
                                        alt={`${tableName(table)} image ${i + 1}`}
                                        className="block w-full h-auto max-h-80 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ArtistsList({ scrollToTable, onDeselect, onSelectTable }: { scrollToTable?: number | null; onDeselect?: () => void; onSelectTable?: (tableNumber: number | null) => void }) {
    const [search, setSearch] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filterOpen, setFilterOpen] = useState(false);
    const [openCardId, setOpenCardId] = useState<number | null>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const pendingScrollRef = useRef<number | null>(null);

    useEffect(() => {
        if (scrollToTable == null) return;
        // If the table is filtered out, clear filters + search first,
        // then let the filteredTables useEffect below do the scroll after re-render
        const isVisible = filteredTables.some(t => t.tableNumber === scrollToTable);
        if (!isVisible) {
            pendingScrollRef.current = scrollToTable;
            setSelectedTypes([]);
            setSearch("");
        } else {
            setOpenCardId(scrollToTable);
            setTimeout(() => {
                const el = document.querySelector(`[data-table="${scrollToTable}"]`);
                el?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 320);
        }
    }, [scrollToTable]); // eslint-disable-line react-hooks/exhaustive-deps

    // After filters are cleared, execute the pending scroll once the card is in the DOM
    useEffect(() => {
        if (pendingScrollRef.current == null) return;
        const tableNum = pendingScrollRef.current;
        pendingScrollRef.current = null;
        setOpenCardId(tableNum);
        setTimeout(() => {
            const el = document.querySelector(`[data-table="${tableNum}"]`);
            el?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 320);
    }, [search, selectedTypes]); // runs after filters clear, card is now in DOM

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

    // Auto-deselect map selection when the selected table is filtered out
    useEffect(() => {
        if (openCardId == null || pendingScrollRef.current != null) return;
        const stillVisible = filteredTables.some(t => t.tableNumber === openCardId);
        if (!stillVisible) {
            setOpenCardId(null);
            onDeselect?.();
        }
    }, [filteredTables]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="mt-8">
            {/* Section Title */}
            <div className="mb-4">
                <h2 className="font-sans font-bold text-2xl tracking-tight text-slate-900">Browse Tables</h2>
            </div>

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
                    <div ref={filterRef} className="relative overflow-visible">
                        <button
                            onClick={() => setFilterOpen((prev) => !prev)}
                            className={`relative px-3.5 py-2.5 border border-l-0 border-primary/30 rounded-r-lg transition-all cursor-pointer ${filterOpen || selectedTypes.length > 0
                                ? "bg-primary text-white"
                                : "bg-white/50 backdrop-blur-md text-slate-500 hover:bg-primary/10"
                                }`}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            {selectedTypes.length > 0 && (
                                <span className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-primary border-2 border-white rounded-full text-white text-[10px] font-mono font-bold flex items-center justify-center">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-start">
                    {filteredTables.map((table) => (
                        <ArtistTableCard
                            key={table.tableNumber}
                            table={table}
                            isOpen={openCardId === table.tableNumber}
                            onToggle={() => {
                                const opening = openCardId !== table.tableNumber;
                                setOpenCardId(opening ? table.tableNumber : null);
                                if (opening) {
                                    onSelectTable?.(table.tableNumber);
                                    setTimeout(() => {
                                        const el = document.querySelector(`[data-table="${table.tableNumber}"]`);
                                        el?.scrollIntoView({ behavior: "smooth", block: "center" });
                                    }, 320);
                                } else {
                                    onSelectTable?.(null);
                                }
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
