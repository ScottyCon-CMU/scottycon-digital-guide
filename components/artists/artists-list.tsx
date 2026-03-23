"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { alleyTables, tableName } from "@/lib/data";
import type { AlleyTable } from "@/lib/data";
import {
  Search,
  SlidersHorizontal,
  Check,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { TableTypeChip, VendorBadge } from "./table-badges";
import ImageLightbox from "./image-lightbox";

const tableTypes = ["Artists", "Vendors", "Info"];

function ArtistTableCard({
  table,
  isOpen,
  onToggle,
  onImageClick,
}: {
  table: AlleyTable;
  isOpen: boolean;
  onToggle: () => void;
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div
      data-table={table.tableNumber}
      onClick={onToggle}
      className={`bg-surface backdrop-blur-md border border-secondary/30 rounded-xl overflow-hidden shadow-sm transition-all duration-300 group relative p-4 ${table.description || table.images?.length ? "cursor-pointer hover:shadow-secondary/20 hover:border-secondary/50" : ""}`}
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-xl" />

      {/* Table number badge + type badge */}
      <div className="flex items-center gap-3 mb-3">
        {table.tableNumber > 0 && (
          <div
            className="text-white font-mono font-semibold text-xs px-3 py-1 rounded-md"
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

      {/* Name(s) + chevron */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-sans font-bold text-xl text-foreground group-hover:text-primary transition-colors">
          {tableName(table) || (
            <span className="text-foreground opacity-40 italic">
              {table.type === "vendor" ? "Vendor TBA" : "Artist TBA"}
            </span>
          )}
        </h3>
        {(table.description || (table.images && table.images.length > 0)) && (
          <ChevronDown
            className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        )}
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
          <div className="pt-2 mt-2 border-t border-secondary/20">
            {/* Description */}
            <div className="text-sm leading-relaxed mb-3 wrap-break-word text-foreground opacity-90">
              {table.description ? (
                <span>{table.description}</span>
              ) : (
                <span className="opacity-50 italic">
                  No details yet — check back soon!
                </span>
              )}
            </div>

            {/* Optional image */}
            {table.images && table.images.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {table.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative flex-1 min-w-[calc(25%-0.375rem)] aspect-square max-h-80 rounded-lg overflow-hidden border border-secondary/30 cursor-zoom-in hover:border-primary transition-colors bg-secondary/5"
                    onClick={(e) => {
                      e.stopPropagation();
                      onImageClick(src, `${tableName(table)} image ${i + 1}`);
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${tableName(table)} image ${i + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtistsList({
  scrollToTable,
  onDeselect,
  onSelectTable,
  scrollContainerRef,
}: {
  scrollToTable?: number | null;
  onDeselect?: () => void;
  onSelectTable?: (tableNumber: number | null) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const filterRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef?.current ?? null;

    const checkVisibility = () => {
      const sentinel = sentinelRef.current;
      if (!sentinel) return;
      const sentinelTop = sentinel.getBoundingClientRect().top;
      const containerIsScrolling = !!container && container.scrollTop > 0;
      const threshold = containerIsScrolling
        ? container.getBoundingClientRect().top
        : 0;
      setShowScrollTop(sentinelTop < threshold);
    };

    const rafId = requestAnimationFrame(checkVisibility);
    container?.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("scroll", checkVisibility, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      container?.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [scrollContainerRef]);

  const handleScrollToTop = () => {
    const container = scrollContainerRef?.current;
    if (container && container.scrollTop > 0) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredTables = alleyTables.filter((table) => {
    const query = search.toLowerCase();
    const matchesSearch =
      !query || tableName(table).toLowerCase().includes(query);
    const matchesType =
      selectedTypes.length === 0 ||
      (selectedTypes.includes("Artists") && table.type === "artist") ||
      (selectedTypes.includes("Vendors") && table.type === "vendor") ||
      (selectedTypes.includes("Info") && table.type === "info");
    return matchesSearch && matchesType;
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    if (scrollToTable == null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenCardId(null);
      return;
    }
    const isVisible = filteredTables.some(
      (t) => t.tableNumber === scrollToTable,
    );
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
  }, [filteredTables, scrollToTable]);

  useEffect(() => {
    if (pendingScrollRef.current == null) return;
    const tableNum = pendingScrollRef.current;
    pendingScrollRef.current = null;
    setOpenCardId(tableNum);
    setTimeout(() => {
      const el = document.querySelector(`[data-table="${tableNum}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 320);
  }, [search, selectedTypes]);

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
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  useEffect(() => {
    if (openCardId == null || pendingScrollRef.current != null) return;
    const stillVisible = filteredTables.some(
      (t) => t.tableNumber === openCardId,
    );
    if (!stillVisible) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenCardId(null);
      onDeselect?.();
    }
  }, [filteredTables, onDeselect, openCardId]);

  return (
    <>
      <div className="mt-4">
        {/* Search Bar with Filter Icon */}
        <div ref={sentinelRef} />
        <div className="relative mb-6">
          <div className="flex items-center gap-0 h-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary opacity-60" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface backdrop-blur-md border border-secondary/30 rounded-l-xl font-mono text-sm text-foreground themed-placeholder focus:outline-none focus:border-primary transition-all"
              />
            </div>
            <div ref={filterRef} className="relative overflow-visible h-full">
              <button
                onClick={() => setFilterOpen((prev) => !prev)}
                className={`relative px-4 py-2.5 border border-l-0 rounded-r-xl transition-all flex items-center gap-2 h-full ${
                  filterOpen || selectedTypes.length > 0
                    ? "bg-primary text-background border-primary"
                    : searchFocused
                      ? "bg-surface text-secondary border-primary"
                      : "bg-surface text-secondary hover:bg-secondary/10 border-secondary/30"
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                {selectedTypes.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent border-2 border-background rounded-full text-background text-[10px] font-bold flex items-center justify-center">
                    {selectedTypes.length}
                  </span>
                )}
              </button>

              {/* Type Filter Dropdown */}
              {filterOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-secondary/30 rounded-xl shadow-lg shadow-secondary/10 p-2">
                  <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-secondary/20">
                    <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                      Type
                    </span>
                    {selectedTypes.length > 0 && (
                      <button
                        onClick={() => setSelectedTypes([])}
                        className="font-mono text-xs text-primary hover:text-accent transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  {tableTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleType(t)}
                      className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left font-mono text-sm transition-colors cursor-pointer ${
                        selectedTypes.includes(t)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground opacity-80 hover:opacity-100 hover:bg-secondary/10"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                          selectedTypes.includes(t)
                            ? "border-primary bg-primary"
                            : "border-secondary/50"
                        }`}
                      >
                        {selectedTypes.includes(t) && (
                          <Check
                            className="w-3 h-3 text-background"
                            strokeWidth={3}
                          />
                        )}
                      </span>
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Active Type Chips */}
        {selectedTypes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedTypes.map((t) => (
              <button
                key={t}
                onClick={() => toggleType(t)}
                className="flex items-center gap-1 font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 hover:text-accent transition-colors cursor-pointer"
              >
                {t}
                <X className="w-3 h-3" strokeWidth={2.5} />
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {filteredTables.length === 0 ? (
          <p className="w-full p-4 bg-surface border border-secondary/30 rounded-xl font-mono text-sm text-secondary text-center">
            No tables matched your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-start">
            {filteredTables.map((table) => (
              <ArtistTableCard
                key={table.tableNumber}
                table={table}
                isOpen={openCardId === table.tableNumber}
                onImageClick={(src, alt) => setLightbox({ src, alt })}
                onToggle={() => {
                  const opening = openCardId !== table.tableNumber;
                  setOpenCardId(opening ? table.tableNumber : null);
                  if (opening) {
                    onSelectTable?.(table.tableNumber);
                    setTimeout(() => {
                      const el = document.querySelector(
                        `[data-table="${table.tableNumber}"]`,
                      );
                      el?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
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

      {portalTarget &&
        lightbox &&
        createPortal(
          <ImageLightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />,
          portalTarget,
        )}

      {/* Floating scroll-to-top button */}
      {portalTarget &&
        createPortal(
          <button
            onClick={handleScrollToTop}
            className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-primary text-background font-mono font-semibold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 cursor-pointer transition-all duration-300 ${
              showScrollTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" strokeWidth={2.5} />
            Back to top
          </button>,
          portalTarget,
        )}
    </>
  );
}
