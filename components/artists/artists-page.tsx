"use client";

import { useState } from "react";
import { Map, List } from "lucide-react";
import ArtistsList from "./artists-list";
import ArtistsMap from "./artists-map";

type View = "map" | "list";

export default function ArtistsPage() {
    const [view, setView] = useState<View>("map");

    return (
        <section className="relative mt-[5vh] flex flex-col px-6 pb-32">
            {/* Title Block */}
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="bg-primary text-white font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
                        2026
                    </div>
                    <div className="h-px w-24 bg-slate-300" />
                </div>
                <div className="flex items-baseline gap-4 mt-2">
                    <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter text-slate-900">
                        Artists Alley
                    </h1>
                    <h1 />
                </div>
                {/* Toggle Bar */}
                <div className="flex mt-4 w-full bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden">
                    <button
                        className={`flex-1 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 ${view === "map"
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-600 hover:bg-primary/10"
                            }`}
                        onClick={() => setView("map")}
                    >
                        <span className="flex items-center justify-center gap-2"><Map size={14} />Map View</span>
                    </button>
                    <button
                        className={`flex-1 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 ${view === "list"
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-600 hover:bg-primary/10"
                            }`}
                        onClick={() => setView("list")}
                    >
                        <span className="flex items-center justify-center gap-2"><List size={14} />List View</span>
                    </button>
                </div>
            </div>
            <div>
                {view === "map" && (
                    <div><ArtistsMap /></div>
                )}
                {view === "list" && (
                    <div><ArtistsList /></div>
                )}
            </div>
        </section>
    );
}