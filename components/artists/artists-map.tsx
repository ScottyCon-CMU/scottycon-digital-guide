import { tableRects } from "@/lib/data";

// Shared dimensions for all table squares
const R = { width: "21.6", height: "21.6", rx: 2, ry: 2 } as const;

// Shared label props for all inline text
const labelProps = {
    textAnchor: "middle" as const,
    dominantBaseline: "central" as const,
    fill: "#fff",
    fontSize: 8,
    fontFamily: "MyriadPro-Regular, 'Myriad Pro'",
    pointerEvents: "none" as const,
};

// Shared interaction styles per category
const artistStyle = { cursor: "pointer" as const, transition: "fill 0.2s" };
const vendorStyle = { cursor: "pointer" as const, transition: "opacity 0.2s" };
const infoStyle   = { cursor: "pointer" as const, transition: "opacity 0.2s" };

// Vendor rects with visual-center coords for inline labels
const vendorRects = [
    { id: -1, x: 13.1,  y: 382.1, cx: 23.9, cy: 392.9, transform: "translate(-369 416.8) rotate(-90)" },
    { id: -2, x: 13.1,  y: 403.7, cx: 23.9, cy: 414.5, transform: "translate(-390.6 438.4) rotate(-90)" },
    { id: -3, x: 13.1,  y: 245.3, cx: 23.9, cy: 256.1, transform: "translate(-232.2 280) rotate(-90)" },
    { id: -4, x: 13.1,  y: 324.5, cx: 23.9, cy: 335.3, transform: "translate(-311.4 359.2) rotate(-90)" },
    { id: -5, x: 13.1,  y: 302.9, cx: 23.9, cy: 313.7, transform: "translate(-289.8 337.6) rotate(-90)" },
    { id: -6, x: 74.3,  y: 403.7, cx: 85.1, cy: 414.5, transform: "translate(-329.4 499.6) rotate(-90)" },
    { id: -7, x: 74.3,  y: 382.1, cx: 85.1, cy: 392.9, transform: "translate(-307.8 478) rotate(-90)" },
    { id: -8, x: 74.3,  y: 324.5, cx: 85.1, cy: 335.3, transform: "translate(-250.2 420.4) rotate(-90)" },
    { id: -9, x: 74.3,  y: 266.9, cx: 85.1, cy: 277.7, transform: "translate(-192.6 362.8) rotate(-90)" },
];

// Info rects (dark blue + green)
const infoRects = [
    { id: -100, x: 340.7,  y: 79.7,  className: "cls-2", transform: "translate(261 442) rotate(-90)" },
    { id: -101, x: 278.12, y: 13.1,  className: "cls-4", transform: undefined },
    { id: -102, x: 256.52, y: 13.1,  className: "cls-4", transform: undefined },
];

interface ArtistsMapProps {
    selectedTable: number | null;
    onTableClick: (tableNumber: number) => void;
}

export default function ArtistsMap({ selectedTable, onTableClick }: ArtistsMapProps) {
    return (
        <div
            className="mt-6 mx-auto rounded-lg overflow-hidden border border-primary/30 shadow-sm bg-white/50 backdrop-blur-md font-bold"
            style={{
                maxHeight: "calc(95svh - 17.5rem)",
                width: "min(100%, calc((95svh - 17.5rem) * 375.4 / 469))",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 375.4 469"
                width="100%"
                height="auto"
            >
                <defs>
                    <style>{`
                        .cls-1 { fill: none; stroke: rgba(22, 88, 187, 0.2); stroke-miterlimit: 10; }
                        .cls-2, .cls-3, .cls-4, .cls-5 { stroke: rgba(255, 255, 255, 0.35); stroke-miterlimit: 10; }
                        .cls-2 { fill: #1657bb; }
                        .cls-3 { fill: #f39aca; }
                        .cls-4 { fill: #75cb74ff; }
                        .cls-5 { fill: #bfb04eff; }
                    `}</style>
                </defs>

                {/* Floor Plan */}
                <g id="Floor_Plan">
                    <rect className="cls-1" x="-46.3" y="47.3" width="468" height="374.4" transform="translate(-46.8 422.2) rotate(-90)" />
                </g>

                {/* Tables */}
                <g id="Tables">
                    {/* Artist tables */}
                    {tableRects.map((t) => (
                        <g key={t.tableNumber}>
                            <rect
                                x={t.x} y={t.y - 5.4} {...R}
                                transform={t.transform}
                                fill={selectedTable === t.tableNumber ? "#1657bb" : "#4e7fbf"}
                                stroke="rgba(255, 255, 255, 0.35)"
                                strokeMiterlimit={10}
                                style={artistStyle}
                                onClick={() => onTableClick(t.tableNumber)}
                            />
                            <text x={t.cx} y={t.cy} {...labelProps}>{t.tableNumber}</text>
                        </g>
                    ))}

                    {/* Vendor tables */}
                    {vendorRects.map((v) => (
                        <g key={v.id}>
                            <rect
                                className="cls-3"
                                x={v.x} y={v.y} {...R}
                                transform={v.transform}
                                style={vendorStyle}
                                opacity={selectedTable === v.id ? 0.6 : 1}
                                onClick={() => onTableClick(v.id)}
                            />
                            <text x={v.cx} y={v.cy} {...labelProps}>{Math.abs(v.id)}</text>
                        </g>
                    ))}

                    {/* Info tables */}
                    {infoRects.map((r) => (
                        <rect
                            key={r.id}
                            className={r.className}
                            x={r.x} y={r.y} {...R}
                            transform={r.transform}
                            style={infoStyle}
                            opacity={selectedTable === r.id ? 0.6 : 1}
                            onClick={() => onTableClick(r.id)}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}
