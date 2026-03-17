"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { tableName } from "@/lib/data";
import type { AlleyTable } from "@/lib/data";
import { TableTypeChip, VendorBadge } from "./table-badges";

interface ArtistTableDetailProps {
    table: AlleyTable;
    onClose: () => void;
}

export default function ArtistTableDetail({ table, onClose }: ArtistTableDetailProps) {
    return (
        <div className="mt-6 bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-sm p-4 relative">
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
                {table.tableNumber > 0 && (
                    <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
                        Table {table.tableNumber}
                    </div>
                )}
                {table.type === "vendor" && <VendorBadge tableNumber={table.tableNumber} />}
                <TableTypeChip type={table.type} />
            </div>

            {/* Name */}
            <h3 className="font-sans font-bold text-2xl text-slate-900 mb-2">
                {tableName(table) || (
                    <span className="text-slate-500 italic">Artist TBA</span>
                )}
            </h3>

            {/* Hours (info tables only) */}
            {table.type === "info" && table.hours && (
                <p className="text-xs font-mono text-primary mb-2">🕐 {table.hours}</p>
            )}

            {/* Description */}
            {table.description
                ? <p className="text-sm text-slate-700 leading-relaxed mb-4 break-words">{table.description}</p>
                : <p className="text-sm text-slate-500 italic mb-4">No details yet — check back soon!</p>
            }

            {/* Optional image */}
            {table.image && (
                <div className="relative w-full h-48 mt-2 rounded-md overflow-hidden border border-primary/20">
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
