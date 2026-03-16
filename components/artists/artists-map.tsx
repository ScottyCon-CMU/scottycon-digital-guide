import { tableRects } from "@/lib/data";

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
                    <rect className="cls-4" x="278.12" y="13.1" width="21.6" height="21.6" rx="2" ry="2" />
                    <rect className="cls-4" x="256.52" y="13.1" width="21.6" height="21.6" rx="2" ry="2" />
                    {/* Numbered table rects + upright labels */}
                    {tableRects.map((t) => {
                        const isSelected = selectedTable === t.tableNumber;
                        return (
                            <g key={t.tableNumber}>
                                <rect
                                    x={t.x}
                                    y={t.y - 5.4}
                                    width="21.6"
                                    height="21.6"
                                    rx={2}
                                    ry={2}
                                    transform={t.transform}
                                    fill={isSelected ? "#1657bb" : "#4e7fbf"}
                                    stroke="rgba(255, 255, 255, 0.35)"
                                    strokeMiterlimit={10}
                                    style={{ cursor: "pointer", transition: "fill 0.2s" }}
                                    onClick={() => onTableClick(t.tableNumber)}
                                />
                                <text
                                    x={t.cx}
                                    y={t.cy}
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fill="#fff"
                                    fontSize={8}
                                    fontFamily="MyriadPro-Regular, 'Myriad Pro'"
                                    pointerEvents="none"
                                >
                                    {t.tableNumber}
                                </text>
                            </g>
                        );
                    })}

                    {/* Special non-numbered rects */}
                    <rect className="cls-2" x="340.7" y="79.7" width="21.6" height="21.6" rx="2" ry="2" transform="translate(261 442) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="382.1" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-369 416.8) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="403.7" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-390.6 438.4) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="245.3" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-232.2 280) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="324.5" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-311.4 359.2) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="302.9" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-289.8 337.6) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="403.7" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-329.4 499.6) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="382.1" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-307.8 478) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="324.5" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-250.2 420.4) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="266.9" width="21.6" height="21.6" rx="2" ry="2" transform="translate(-192.6 362.8) rotate(-90)" />
                </g>

                {/* Section labels for special non-numbered rects, positioned at their visual centers */}
                <g id="Numbers">
                    <text x="85.1" y="277.7" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">1</text>
                    <text x="85.1" y="335.3" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">2</text>
                    <text x="85.1" y="392.9" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">3</text>
                    <text x="85.1" y="414.5" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">3</text>
                    <text x="23.9" y="256.1" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">4</text>
                    <text x="23.9" y="313.7" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">5</text>
                    <text x="23.9" y="335.3" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">5</text>
                    <text x="23.9" y="392.9" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">6</text>
                    <text x="23.9" y="414.5" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={8} fontFamily="MyriadPro-Regular, 'Myriad Pro'" pointerEvents="none">6</text>
                </g>
            </svg>
        </div>
    );
}
