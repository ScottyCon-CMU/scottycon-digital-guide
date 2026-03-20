"use client";

import { useState, useRef, useEffect } from "react";
import { Map, List } from "lucide-react";
import ArtistsList from "./artists-list";
import ArtistsMap from "./artists-map";
import ArtistTableDetail from "./artists-table-detail";
import { alleyTables } from "@/lib/data";

type View = "map" | "list";

export default function ArtistsPage() {
    const [view, setView] = useState<View>("map");
    const [viewEntering, setViewEntering] = useState(false);
    const [selectedTable, setSelectedTable] = useState<number | null>(null);
    const [displayedTable, setDisplayedTable] = useState<number | null>(null);
    const [cardVisible, setCardVisible] = useState(true);
    const [panelHeight, setPanelHeight] = useState<number | undefined>(undefined);
    const detailRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const panelInnerRef = useRef<HTMLDivElement>(null);
    const listColRef = useRef<HTMLDivElement>(null);

    // Deselect when clicking outside the map+card container
    useEffect(() => {
        if (selectedTable === null) return;
        function handleOutsideClick(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setSelectedTable(null);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [selectedTable]);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: immediate fade-out before the 150ms content swap
        setCardVisible(false);
        const t = setTimeout(() => {
            setDisplayedTable(selectedTable);
            setCardVisible(true);
        }, 150);
        return () => clearTimeout(t);
    }, [selectedTable]);

    // Track inner panel height for smooth layout transition on mobile.
    // Depends on `view` so the observer is re-attached when switching back to map view
    // (the panelInnerRef div unmounts on list view and remounts on map view).
    useEffect(() => {
        const el = panelInnerRef.current;
        if (!el) return;
        setPanelHeight(el.offsetHeight);
        const observer = new ResizeObserver(() => {
            setPanelHeight(panelInnerRef.current?.offsetHeight);
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, [view]);

    function handleTableClick(tableNumber: number) {
        // Clicking the same table again deselects it
        if (selectedTable === tableNumber) {
            setSelectedTable(null);
            return;
        }
        setSelectedTable(tableNumber);
        // Scroll up to the panel (already visible above map on desktop)
        requestAnimationFrame(() => {
            detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }

    function switchView(newView: View) {
        if (newView === view) return;
        // Both state changes in the same render: new content mounts at translateY(10px) with no transition.
        // Double rAF then fires viewEntering=false, letting the browser transition to translateY(0).
        // We use transform (not opacity) so backdrop-filter on children is never broken.
        setView(newView);
        setViewEntering(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setViewEntering(false)));
    }

    const displayedTableData = displayedTable !== null
        ? alleyTables.find(t => t.tableNumber === displayedTable) ?? null
        : null;

    // Shared card content — rendered in two places (mobile above map, desktop sidebar)
    const hintCard = (
        <div className="bg-surface backdrop-blur-md border border-secondary rounded-lg p-6 relative">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
            <p className="font-mono text-xs text-secondary uppercase tracking-wider mb-3">How to use</p>
            <h3 className="font-sans font-bold text-xl text-foreground mb-2">Explore the map</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
                Tap any square on the map to see which artist or vendor is hosting that table, along with their description and artwork.
            </p>
            <div className="mt-4 pt-4 border-t border-secondary/20 flex flex-wrap gap-3 font-mono text-xs text-foreground/60">
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "var(--table-artist)" }} />Artist tables
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "var(--table-vendor)" }} />Vendor tables
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "var(--table-info)" }} />Info desks
                </span>
            </div>
        </div>
    );

    const cardContent = (
        <div>
            {displayedTable === null ? (
                hintCard
            ) : displayedTableData ? (
                <ArtistTableDetail table={displayedTableData} />
            ) : (
                <div className="bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg p-4 text-center text-sm text-slate-500 font-mono">
                    Table {displayedTable} — no data yet
                </div>
            )}
        </div>
    );

    return (
        <section className="relative mt-[5vh] lg:mt-0 lg:h-[100svh] lg:overflow-hidden pb-32 lg:pb-0">
            <div ref={containerRef} className="lg:flex lg:gap-8 lg:items-start">

                {/* LEFT COLUMN: title + card + list */}
                <div ref={listColRef} className="px-6 lg:pl-6 lg:pr-0 lg:pt-[5vh] lg:flex-1 lg:min-w-0 lg:overflow-y-auto lg:h-[100svh] lg:pb-24 no-scrollbar">

                    {/* Title + Toggle (toggle hidden on desktop — both views always visible) */}
                    <div className="flex items-end justify-between gap-4 mb-4">
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
                        {/* View Toggle — mobile only */}
                        <div className="lg:hidden flex shrink-0 bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden mb-1">
                            <button
                                onClick={() => switchView("map")}
                                className={`flex items-center gap-1.5 px-3 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 ${view === "map"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-slate-600 hover:bg-primary/10"
                                    }`}
                            >
                                <Map size={13} />Map
                            </button>
                            <button
                                onClick={() => switchView("list")}
                                className={`flex items-center gap-1.5 px-3 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 ${view === "list"
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-slate-600 hover:bg-primary/10"
                                    }`}
                            >
                                <List size={13} />List
                            </button>
                        </div>
                    </div>

                    {/* Card — mobile only, above map, with height animation */}
                    {view === "map" && (
                        <div
                            ref={detailRef}
                            className="block lg:hidden mb-4"
                            style={{
                                transform: viewEntering ? "translateY(10px)" : "translateY(0)",
                                transition: viewEntering ? "none" : "transform 0.25s ease-out",
                            }}
                        >
                            <div
                                className="overflow-hidden"
                                style={{ height: panelHeight, transition: "height 0.3s ease-in-out" }}
                            >
                                <div ref={panelInnerRef}>
                                    {cardContent}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Card — desktop only, always shows the hint */}
                    <div className="hidden lg:block mb-4">
                        {hintCard}
                    </div>

                    {/* List — always on desktop, only in list view on mobile */}
                    <div
                        className={view === "list" ? "block" : "hidden lg:block"}
                        style={view === "list" ? {
                            transform: viewEntering ? "translateY(10px)" : "translateY(0)",
                            transition: viewEntering ? "none" : "transform 0.25s ease-out",
                        } : {}}
                    >
                        <ArtistsList scrollToTable={selectedTable} onDeselect={() => setSelectedTable(null)} onSelectTable={setSelectedTable} scrollContainerRef={listColRef} />
                    </div>
                </div>

                {/* RIGHT COLUMN: map — always on desktop, only in map view on mobile */}
                <div
                    className={`px-6 lg:px-0 lg:pr-6 lg:mt-[5vh] lg:shrink-0 lg:h-[calc(100svh-10rem)] lg:min-h-[38.89vw] lg:min-w-[33.333vw] lg:max-w-[66.667vw] ${view === "map" ? "block" : "hidden lg:block"}`}
                    style={view === "map" ? {
                        transform: viewEntering ? "translateY(10px)" : "translateY(0)",
                        transition: viewEntering ? "none" : "transform 0.25s ease-out",
                    } : {}}
                >
                    <ArtistsMap
                        selectedTable={selectedTable}
                        onTableClick={handleTableClick}
                        onBackgroundClick={() => setSelectedTable(null)}
                    />
                </div>

            </div>
        </section>
    );
}