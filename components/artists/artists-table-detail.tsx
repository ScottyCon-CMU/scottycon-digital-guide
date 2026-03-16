"use client";

import Image from "next/image";
import { X, Users, Store } from "lucide-react";
import type { AlleyTable } from "@/lib/data";

interface ArtistTableDetailProps {
    table: AlleyTable;
    onClose: () => void;
}

export default function ArtistTableDetail({ table, onClose }: ArtistTableDetailProps) {
    const name = table.type === "artist" ? table.artists.join(" & ") : table.vendorName;

    return (
        <div className="mt-4 bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-sm p-4 relative animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

            {/* Close button */}
            <button
                onClick={onClose}
                aria-label="Close detail panel"
                className="absolute top-3 right-6 text-slate-400 hover:text-primary transition-colors"
            >
                <X size={16} />
            </button>

            {/* Table number + type badges */}
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
                    Table {table.tableNumber}
                </div>
                <div className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1 bg-primary/10 text-primary">
                    {table.type === "artist" ? (
                        <><Users size={10} />Artists</>
                    ) : (
                        <><Store size={10} />Vendor</>
                    )}
                </div>
            </div>

            {/* Name */}
            <h3 className="font-sans font-bold text-2xl text-slate-900 mb-2">
                {name}
            </h3>

            {/* Description */}
            {table.description && (
                <p className="text-sm text-slate-700 leading-relaxed mb-4 break-words">
                    {table.description}
                </p>
            )}

            {/* Optional image */}
            {table.image && (
                <div className="relative w-full h-48 mt-2 rounded-md overflow-hidden border border-primary/20">
                    <Image
                        src={table.image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
}
