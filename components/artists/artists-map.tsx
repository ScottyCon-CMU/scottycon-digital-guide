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
    if (isSelected) return "scale(1.10)";
    if (isHovered) return "scale(1.12)";
    return "scale(1)";
}

// Vendor rects — all in screen space (no SVG transforms), so animations always scale from the right center.
// Right col (x≈74): 1–3 top→bottom · Left col (x≈13): 4–6 top→bottom
const vendorRects = [
    { id: -1, vx: 74.3, vy: 266.9, vw: 21.6, vh: 21.6, cx: 85.1,  cy: 277.7 }, // right 1
    { id: -2, vx: 74.3, vy: 324.5, vw: 21.6, vh: 21.6, cx: 85.1,  cy: 335.3 }, // right 2
    { id: -3, vx: 74.3, vy: 382.1, vw: 21.6, vh: 43.2, cx: 85.1,  cy: 403.7 }, // right 3+4 merged
    { id: -4, vx: 13.1, vy: 266.9, vw: 21.6, vh: 21.6, cx: 23.9,  cy: 277.7 }, // left 4
    { id: -5, vx: 13.1, vy: 324.5, vw: 21.6, vh: 43.2, cx: 23.9,  cy: 346.1 }, // left 5+6 merged
    { id: -6, vx: 13.1, vy: 403.7, vw: 21.6, vh: 21.6, cx: 23.9,  cy: 414.5 }, // left 6
];

// Info rects — w/h/cx/cy explicit so merged rect dimensions work correctly
const infoRects = [
    { id: -100, x: 340.7,  y: 79.7, w: 21.6, h: 21.6, cx: 351.5,  cy:  90.5, className: "cls-4", transform: "translate(261 442) rotate(-90)" },
    { id: -101, x: 256.52, y: 30.7, w: 43.2, h: 21.6, cx: 278.12, cy:  41.5, className: "cls-4", transform: undefined }, // -101 + -102 merged
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
    const [clickedTable, setClickedTable] = useState<number | null>(null);
    const [rippleGen, setRippleGen] = useState<{ id: number; gen: number } | null>(null);

    function triggerPop(id: number) {
        setClickedTable(id);
        setTimeout(() => setClickedTable(null), 460);
        setRippleGen(prev => ({ id, gen: (prev?.gen ?? 0) + 1 }));
        setTimeout(() => setRippleGen(null), 650);
    }

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
                        .table-interactive.table-popping {
                            transition: none;
                            animation: table-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        @keyframes table-pop {
                            0%   { transform: scale(1); }
                            100% { transform: scale(1.10); }
                        }

                        .table-ripple-ring {
                            transform-box: fill-box;
                            transform-origin: center;
                            fill: none;
                            stroke-width: 4;
                            pointer-events: none;
                            opacity: 0;
                        }
                        .table-ripple-ring.table-rippling {
                            animation: table-ripple 0.6s ease-out forwards;
                        }
                        @keyframes table-ripple {
                            0%   { transform: scale(1);    stroke-width: 5;   opacity: 0.80; }
                            100% { transform: scale(1.65); stroke-width: 0.2; opacity: 0; }
                        }
                        .artist-ripple { stroke: #4a8fd4; }
                        .vendor-ripple { stroke: #f560b5; }
                        .info-ripple   { stroke: #3db83c; }
                        [data-theme="dark"] .artist-ripple { stroke: #4e7fbf; }
                        [data-theme="dark"] .vendor-ripple { stroke: #f39aca; }
                        [data-theme="dark"] .info-ripple   { stroke: #75cb74; }

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
                        <g key={t.tableNumber} transform={t.transform}>
                            <g
                                className={`table-interactive${clickedTable === t.tableNumber ? " table-popping" : ""}`}
                                style={{ transform: getScale(selectedTable === t.tableNumber, hoveredTable === t.tableNumber) }}
                                onMouseEnter={() => setHoveredTable(t.tableNumber)}
                                onMouseLeave={() => setHoveredTable(null)}
                            >
                                <rect
                                    x={t.x} y={t.y - 5.4} {...R}
                                    className="table-artist"
                                    style={{ ...artistStyle, filter: getFilter(isDark, selectedTable === t.tableNumber, hoveredTable === t.tableNumber) }}
                                    onClick={(e) => { e.stopPropagation(); triggerPop(t.tableNumber); onTableClick(t.tableNumber); }}
                                />
                                <rect x={t.x} y={t.y - 5.4} {...R}
                                    fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} pointerEvents="none" />
                                <text x={t.x + 10.8} y={t.y + 5.4} {...labelProps} transform={`rotate(90, ${t.x + 10.8}, ${t.y + 5.4})`}>{t.tableNumber}</text>
                            </g>
                        </g>
                    ))}

                    {/* Vendor tables */}
                    {vendorRects.map((v) => (
                        <g key={v.id}
                            className={`table-interactive${clickedTable === v.id ? " table-popping" : ""}`}
                            style={{ transform: getScale(selectedTable === v.id, hoveredTable === v.id) }}
                            onMouseEnter={() => setHoveredTable(v.id)}
                            onMouseLeave={() => setHoveredTable(null)}
                        >
                            <rect
                                className="cls-3 table-vendor"
                                x={v.vx} y={v.vy} width={v.vw} height={v.vh} rx={2} ry={2}
                                style={{ ...clickStyle, filter: getFilter(isDark, selectedTable === v.id, hoveredTable === v.id) }}
                                onClick={(e) => { e.stopPropagation(); triggerPop(v.id); onTableClick(v.id); }}
                            />
                            <rect x={v.vx} y={v.vy} width={v.vw} height={v.vh} rx={2} ry={2}
                                fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} pointerEvents="none" />
                            <text x={v.cx} y={v.cy} {...labelProps}>{Math.abs(v.id)}</text>
                        </g>
                    ))}

                    {/* Info tables */}
                    {infoRects.map((r) => (
                        <g key={r.id}
                            className={`table-interactive${clickedTable === r.id ? " table-popping" : ""}`}
                            style={{ transform: getScale(selectedTable === r.id, hoveredTable === r.id) }}
                            onMouseEnter={() => setHoveredTable(r.id)}
                            onMouseLeave={() => setHoveredTable(null)}
                        >
                            <rect
                                className={`${r.className} table-info`}
                                x={r.x} y={r.y} width={r.w} height={r.h} rx={2} ry={2}
                                transform={r.transform}
                                style={{ ...clickStyle, filter: getFilter(isDark, selectedTable === r.id, hoveredTable === r.id) }}
                                onClick={(e) => { e.stopPropagation(); triggerPop(r.id); onTableClick(r.id); }}
                            />
                            <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={2} ry={2} transform={r.transform}
                                fill="none" stroke={tableStroke} strokeWidth={1.5} strokeMiterlimit={10} pointerEvents="none" />
                        </g>
                    ))}
                </g>

                {/* Ripple rings — own layer so pop-transform on the table <g> doesn't interfere */}
                <g id="Ripples" pointerEvents="none">
                    {tableRects.map((t) => (
                        <rect
                            key={rippleGen?.id === t.tableNumber ? `ripple-${t.tableNumber}-${rippleGen.gen}` : `ripple-${t.tableNumber}-idle`}
                            x={t.cx - 10.8} y={t.cy - 10.8} {...R}
                            className={`table-ripple-ring artist-ripple${rippleGen?.id === t.tableNumber ? " table-rippling" : ""}`}
                        />
                    ))}
                    {vendorRects.map((v) => (
                        <rect
                            key={rippleGen?.id === v.id ? `ripple-${v.id}-${rippleGen.gen}` : `ripple-${v.id}-idle`}
                            x={v.vx} y={v.vy} width={v.vw} height={v.vh} rx={2} ry={2}
                            className={`table-ripple-ring vendor-ripple${rippleGen?.id === v.id ? " table-rippling" : ""}`}
                        />
                    ))}
                    {infoRects.map((r) => (
                        <rect
                            key={rippleGen?.id === r.id ? `ripple-${r.id}-${rippleGen.gen}` : `ripple-${r.id}-idle`}
                            x={r.cx - r.w / 2} y={r.cy - r.h / 2} width={r.w} height={r.h} rx={2} ry={2}
                            className={`table-ripple-ring info-ripple${rippleGen?.id === r.id ? " table-rippling" : ""}`}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}
