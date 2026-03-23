"use client";

import { useState } from "react";
import Image from "next/image";
import { tableName } from "@/lib/data";
import type { AlleyTable } from "@/lib/data";
import { TableTypeChip, VendorBadge } from "./table-badges";
import ImageLightbox from "./image-lightbox";

interface ArtistTableDetailProps {
  table: AlleyTable;
}

export default function ArtistTableDetail({ table }: ArtistTableDetailProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <>
      <div className="bg-surface backdrop-blur-md border border-secondary rounded-lg overflow-hidden shadow-sm p-4 relative">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary dark:border-foreground rounded-tr-lg" />

        {/* Table number + type badges */}
        <div className="flex items-center gap-3 mb-3">
          {table.tableNumber > 0 && (
            <div
              className="text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm"
              style={{ background: `var(--table-${table.type})` }}
            >
              Table {table.tableNumber}
            </div>
          )}
          {table.type === "vendor" && (
            <VendorBadge tableNumber={table.tableNumber} />
          )}
          <TableTypeChip type={table.type} />
        </div>

        {/* Name */}
        <h3 className="font-sans font-bold text-2xl text-foreground mb-2">
          {tableName(table) || (
            <span className="text-foreground/40 italic">
              {table.type === "vendor" ? "Vendor TBA" : "Artist TBA"}
            </span>
          )}
        </h3>

        {/* Description */}
        {table.description ? (
          <p className="text-sm text-foreground/80 leading-relaxed mb-4 wrap-break-word">
            {table.description}
          </p>
        ) : (
          <p className="text-sm text-foreground/40 italic mb-4">
            No details yet — check back soon!
          </p>
        )}

        {/* Optional image */}
        {table.images && table.images.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {table.images.map((src, i) => (
              <div
                key={i}
                className="relative flex-1 min-w-[calc(25%-0.375rem)] aspect-square max-h-64 rounded-lg overflow-hidden border border-secondary/30 cursor-zoom-in hover:border-primary transition-colors bg-secondary/5"
                onClick={() =>
                  setLightbox({
                    src,
                    alt: `${tableName(table)} image ${i + 1}`,
                  })
                }
              >
                <Image
                  src={src}
                  alt={`${tableName(table)} image ${i + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
