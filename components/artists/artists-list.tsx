"use client";

import Image from "next/image";
import { alleyTables } from "@/lib/data";
import type { AlleyTable } from "@/lib/data";
import { Users, Store } from "lucide-react";

function ArtistTableCard({ table }: { table: AlleyTable }) {
    return (
        <div className="bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex gap-4 p-4">
                {/* Left: info */}
                <div className="flex-1 min-w-0">
                    {/* Table number badge + type icon */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
                            Table {table.tableNumber}
                        </div>
                        <div className="bg-secondary-dark/10 text-secondary-dark font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1">
                            {table.type === "artist" ? (
                                <><Users size={10} />Artists</>
                            ) : (
                                <><Store size={10} />Vendor</>
                            )}
                        </div>
                    </div>

                    {/* Name(s) */}
                    {table.type === "artist" ? (
                        <p className="font-sans font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2 truncate">
                            {table.artists.join(" & ")}
                        </p>
                    ) : (
                        <p className="font-sans font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2 truncate">
                            {table.vendorName}
                        </p>
                    )}

                    {/* Description */}
                    {table.description && (
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                            {table.description}
                        </p>
                    )}
                </div>

                {/* Optional image */}
                {table.image && (
                    <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden border border-primary/20">
                        <Image
                            src={table.image}
                            alt={table.type === "artist" ? table.artists.join(" & ") : table.vendorName}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ArtistsList() {
    if (alleyTables.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
                <Users size={40} className="mb-4 opacity-30" />
                <p className="font-mono text-sm uppercase tracking-wider">No tables listed yet</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 mt-6">
            {alleyTables.map((table) => (
                <ArtistTableCard key={table.tableNumber} table={table} />
            ))}
        </div>
    );
}
