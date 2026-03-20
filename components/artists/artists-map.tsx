"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { tableRects } from "@/lib/data";

// Shared dimensions for all table squares
const R = { width: "21.6", height: "21.6", rx: 2, ry: 2 } as const;

// Shared label props for all inline text
const labelProps = {
    textAnchor: "middle" as const,
    dominantBaseline: "central" as const,
    fill: "#fff",
    fontSize: 8,
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    pointerEvents: "none" as const,
};

// Shared interaction styles per category
const artistStyle = { cursor: "pointer" as const, transition: "fill 0.2s, filter 0.15s" };
const clickStyle = { cursor: "pointer" as const, transition: "opacity 0.2s, filter 0.15s" };

// Brightness filter driven by React state (CSS filter in SVG <style> is unreliable in WebKit)
function getFilter(isDark: boolean, isSelected: boolean, isHovered: boolean): string | undefined {
    if (isDark) {
        if (isHovered && isSelected) return "brightness(1.50)";
        if (isSelected) return "brightness(1.20)";
        if (isHovered) return "brightness(1.35)";
    } else {
        if (isHovered && isSelected) return "brightness(0.60)";
        if (isSelected) return "brightness(0.70)";
        if (isHovered) return "brightness(0.82)";
    }
    return undefined;
}

function getScale(isSelected: boolean, isHovered: boolean): string {
    if (isSelected && isHovered) return "scale(1.18)";
    if (isSelected) return "scale(1.10)";
    if (isHovered) return "scale(1.12)";
    return "scale(1)";
}

// Vendor rects with visual-center coords for inline labels
const vendorRects = [
    { id: -1, x: 13.1, y: 382.1, cx: 23.9, cy: 392.9, transform: "translate(-369 416.8) rotate(-90)" },
    { id: -2, x: 13.1, y: 403.7, cx: 23.9, cy: 414.5, transform: "translate(-390.6 438.4) rotate(-90)" },
    { id: -3, x: 13.1, y: 245.3, cx: 23.9, cy: 256.1, transform: "translate(-232.2 280) rotate(-90)" },
    { id: -4, x: 13.1, y: 324.5, cx: 23.9, cy: 335.3, transform: "translate(-311.4 359.2) rotate(-90)" },
    { id: -5, x: 13.1, y: 302.9, cx: 23.9, cy: 313.7, transform: "translate(-289.8 337.6) rotate(-90)" },
    { id: -6, x: 74.3, y: 403.7, cx: 85.1, cy: 414.5, transform: "translate(-329.4 499.6) rotate(-90)" },
    { id: -7, x: 74.3, y: 382.1, cx: 85.1, cy: 392.9, transform: "translate(-307.8 478) rotate(-90)" },
    { id: -8, x: 74.3, y: 324.5, cx: 85.1, cy: 335.3, transform: "translate(-250.2 420.4) rotate(-90)" },
    { id: -9, x: 74.3, y: 266.9, cx: 85.1, cy: 277.7, transform: "translate(-192.6 362.8) rotate(-90)" },
];

// Info rects (dark blue + green)
const infoRects = [
    { id: -100, x: 340.7, y: 79.7, className: "cls-4", transform: "translate(261 442) rotate(-90)" },
    { id: -101, x: 278.12, y: 30.7, className: "cls-4", transform: undefined },
    { id: -102, x: 256.52, y: 30.7, className: "cls-4", transform: undefined },
];

interface ArtistsMapProps {
    selectedTable: number | null;
    onTableClick: (tableNumber: number) => void;
    onBackgroundClick: () => void;
}

export default function ArtistsMap({ selectedTable, onTableClick, onBackgroundClick }: ArtistsMapProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const tableStroke = isDark ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.70)";
    const [hoveredTable, setHoveredTable] = useState<number | null>(null);

    return (
        <div
            onClick={onBackgroundClick}
            className="group mt-6 lg:mt-0 mx-auto lg:mx-0 rounded-lg overflow-hidden border border-secondary shadow-sm hover:shadow-md hover:scale-[1.01] bg-surface hover:bg-blue-400/5 dark:hover:bg-blue-600/10 backdrop-blur-md font-bold max-h-[calc(95svh-13.5rem)] w-[min(100%,calc((95svh-13.5rem)*375.4/438))] lg:w-auto lg:h-full lg:max-h-none transition-all duration-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 375.4 438"
                className="block w-full h-auto lg:w-auto lg:h-full"
            >
                <defs>
                    <style>{`
                        .cls-1 { fill: none; stroke: var(--primary); stroke-opacity: 0.2; stroke-miterlimit: 10; }
                        .cls-2, .cls-3, .cls-4, .cls-5 { stroke-miterlimit: 10; }
                        [data-theme="dark"] .cls-2,
                        [data-theme="dark"] .cls-3,
                        [data-theme="dark"] .cls-4,
                        [data-theme="dark"] .cls-5 { stroke: rgba(255, 255, 255, 0.90); }
                        .cls-2 { fill: var(--primary); }
                        .cls-3 { fill: #f560b5; }
                        .cls-4 { fill: #3db83c; }
                        .cls-5 { fill: #bfb04eff; }
                        .table-interactive {
                            transform-box: fill-box;
                            transform-origin: center;
                            transition: transform 0.15s, filter 0.15s;
                        }

                        /* Light mode: bright saturated colors */
                        .table-artist                                               { fill: #4a8fd4; }

                        /* Dark mode: restore original colors */
                        [data-theme="dark"] .table-artist                           { fill: #4e7fbf; }
                        [data-theme="dark"] .cls-3                                  { fill: #f39aca; }
                        [data-theme="dark"] .cls-4                                  { fill: #75cb74; }
                    `}</style>
                </defs>

                {/* Floor Plan */}
                <g id="Floor_Plan">
                    <rect className="cls-1" x="-46.3" y="47.3" width="468" height="374.4" transform="translate(-46.8 422.2) rotate(-90)" />
                </g>

                {/* Entrance & Exit — non-interactive indicators at the top of the hall. */}
                <g id="Entrances_Exits" pointerEvents="none">
                    {/* Exit — top-left */}
                    <rect x="13.1" y="9" width="55" height="13" rx="2"
                        style={{ fill: "var(--primary)" }} />
                    <rect x="13.1" y="9" width="55" height="13" rx="2"
                        fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} />
                    <text x="40.6" y="15.5" textAnchor="middle" dominantBaseline="central"
                        style={{ fill: "white" }} fontSize="5.5" fontFamily="var(--font-sans), system-ui, sans-serif" letterSpacing="0.5">
                        EXIT
                    </text>
                    <polygon points="36.6,26 40.6,31.5 44.6,26"
                        fill="var(--primary)" stroke={tableStroke} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

                    {/* Entrance — top-right (right edge kept at 362.3) */}
                    <rect x="307.3" y="9" width="55" height="13" rx="2"
                        style={{ fill: "var(--primary)" }} />
                    <rect x="307.3" y="9" width="55" height="13" rx="2"
                        fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} />
                    <text x="334.8" y="15.5" textAnchor="middle" dominantBaseline="central"
                        style={{ fill: "white" }} fontSize="5.5" fontFamily="var(--font-sans), system-ui, sans-serif" letterSpacing="0.5">
                        ENTRANCE
                    </text>
                    <polygon points="330.8,26 334.8,31.5 338.8,26"
                        fill="var(--primary)" stroke={tableStroke} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </g>

                {/* Tables */}
                <g id="Tables">
                    {/* Artist tables */}
                    {tableRects.map((t) => (
                        <g key={t.tableNumber} className="table-interactive"
                            style={{ transform: getScale(selectedTable === t.tableNumber, hoveredTable === t.tableNumber) }}
                            onMouseEnter={() => setHoveredTable(t.tableNumber)}
                            onMouseLeave={() => setHoveredTable(null)}
                        >
                            <rect
                                x={t.x} y={t.y - 5.4} {...R}
                                transform={t.transform}
                                className="table-artist"
                                style={{ ...artistStyle, filter: getFilter(isDark, selectedTable === t.tableNumber, hoveredTable === t.tableNumber) }}
                                onClick={(e) => { e.stopPropagation(); onTableClick(t.tableNumber); }}
                            />
                            <rect x={t.x} y={t.y - 5.4} {...R} transform={t.transform}
                                fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} pointerEvents="none" />
                            <text x={t.cx} y={t.cy} {...labelProps}>{t.tableNumber}</text>
                        </g>
                    ))}

                    {/* Vendor tables */}
                    {vendorRects.map((v) => (
                        <g key={v.id} className="table-interactive"
                            style={{ transform: getScale(selectedTable === v.id, hoveredTable === v.id) }}
                            onMouseEnter={() => setHoveredTable(v.id)}
                            onMouseLeave={() => setHoveredTable(null)}
                        >
                            <rect
                                className="cls-3 table-vendor"
                                x={v.x} y={v.y} {...R}
                                transform={v.transform}
                                style={{ ...clickStyle, filter: getFilter(isDark, selectedTable === v.id, hoveredTable === v.id) }}
                                onClick={(e) => { e.stopPropagation(); onTableClick(v.id); }}
                            />
                            <rect x={v.x} y={v.y} {...R} transform={v.transform}
                                fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} pointerEvents="none" />
                            <text x={v.cx} y={v.cy} {...labelProps}>{Math.abs(v.id)}</text>
                        </g>
                    ))}

                    {/* Info tables */}
                    {infoRects.map((r) => (
                        <g key={r.id} className="table-interactive"
                            style={{ transform: getScale(selectedTable === r.id, hoveredTable === r.id) }}
                            onMouseEnter={() => setHoveredTable(r.id)}
                            onMouseLeave={() => setHoveredTable(null)}
                        >
                            <rect
                                className={`${r.className} table-info`}
                                x={r.x} y={r.y} {...R}
                                transform={r.transform}
                                style={{ ...clickStyle, filter: getFilter(isDark, selectedTable === r.id, hoveredTable === r.id) }}
                                onClick={(e) => { e.stopPropagation(); onTableClick(r.id); }}
                            />
                            <rect x={r.x} y={r.y} {...R} transform={r.transform}
                                fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} pointerEvents="none" />
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}
