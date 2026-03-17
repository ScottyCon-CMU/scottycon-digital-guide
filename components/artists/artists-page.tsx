"use client";

import { useState, useRef } from "react";
import { Map, List } from "lucide-react";
import ArtistsList from "./artists-list";
import ArtistsMap from "./artists-map";
import ArtistTableDetail from "./artists-table-detail";
import { alleyTables } from "@/lib/data";

type View = "map" | "list";

export default function ArtistsPage() {
    const [view, setView] = useState<View>("map");
    const [selectedTable, setSelectedTable] = useState<number | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const detailRef = useRef<HTMLDivElement>(null);

    function handleTableClick(tableNumber: number) {
        if (isDetailOpen && selectedTable === tableNumber) {
            handleClose();
            return;
        }
        setSelectedTable(tableNumber);
        setIsDetailOpen(true);
        // On mobile only — scroll down to the detail panel below the map
        requestAnimationFrame(() => {
            if (window.innerWidth < 1024) {
                detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    }

    function handleClose() {
        setIsDetailOpen(false);
        // Clear the table data only after the exit animation finishes
        setTimeout(() => setSelectedTable(null), 500);
    }

    const selectedTableData = selectedTable !== null
        ? alleyTables.find(t => t.tableNumber === selectedTable) ?? null
        : null;

    return (
        <section className="relative mt-[5vh] flex flex-col px-6 pb-32">
            {/* Title Block */}
            <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary text-white font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
                            2026
                        </div>
                        <div className="h-px w-24 bg-slate-300" />
                    </div>
                    <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter text-slate-900 mt-2">
                        Artists Alley
                    </h1>
                </div>

                {/* View Toggle */}
                <div className="flex shrink-0 bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden mb-1">
                    <button
                        onClick={() => setView("map")}
                        className={`flex items-center gap-1.5 px-3 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 ${view === "map"
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-600 hover:bg-primary/10"
                            }`}
                    >
                        <Map size={13} />Map
                    </button>
                    <button
                        onClick={() => setView("list")}
                        className={`flex items-center gap-1.5 px-3 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 ${view === "list"
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-600 hover:bg-primary/10"
                            }`}
                    >
                        <List size={13} />List
                    </button>
                </div>
            </div>
            <div>
                {view === "map" && (
                    // Clip overflow so the detail doesn't cause a scrollbar while sliding in
                    <div className="lg:overflow-x-hidden">
                        <div className="lg:flex lg:gap-6 lg:items-center">
                            {/* Map — slides left when detail is open, back to centre when closed */}
                            <div
                                className={`lg:w-1/2 lg:flex-shrink-0 transition-transform duration-500 ease-in-out ${isDetailOpen ? "lg:translate-x-0" : "lg:translate-x-1/2"
                                    }`}
                            >
                                <ArtistsMap
                                    selectedTable={selectedTable}
                                    onTableClick={handleTableClick}
                                />
                            </div>

                            {/* Detail — isDetailOpen drives enter/exit classes */}
                            <div
                                ref={detailRef}
                                className={`lg:flex-1 lg:min-w-0 transition-all ease-in-out ${isDetailOpen
                                    ? "opacity-100 lg:translate-x-0 duration-500 lg:delay-150"
                                    : "opacity-0 lg:translate-x-full duration-500 pointer-events-none"
                                    }`}
                            >
                                {selectedTable !== null && (
                                    selectedTableData
                                        ? <ArtistTableDetail
                                            table={selectedTableData}
                                            onClose={handleClose}
                                        />
                                        : <div className="mt-6 bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg p-4 text-center text-sm text-slate-500 font-mono">
                                            Table {selectedTable} — no data yet
                                        </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {view === "list" && (
                    <div><ArtistsList /></div>
                )}
            </div>
        </section>
    );
}