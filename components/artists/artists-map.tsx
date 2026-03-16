import { tableRects } from "@/lib/data";

interface ArtistsMapProps {
    selectedTable: number | null;
    onTableClick: (tableNumber: number) => void;
}

export default function ArtistsMap({ selectedTable, onTableClick }: ArtistsMapProps) {
    return (
        <div className="w-full mt-6 rounded-lg overflow-hidden border border-primary/20 shadow-sm bg-white/50 backdrop-blur-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 375.4 469"
                width="100%"
                height="auto"
            >
                <defs>
                    <style>{`
                        .cls-1 { fill: none; }
                        .cls-1, .cls-2, .cls-3, .cls-4, .cls-5 { stroke: #231f20; stroke-miterlimit: 10; }
                        .cls-2 { fill: #00aeef; }
                        .cls-3 { fill: #fbb040; }
                        .cls-6 { fill: #231f20; font-family: MyriadPro-Regular, 'Myriad Pro'; font-size: 12px; }
                        .cls-7 { fill: #fff; font-family: MyriadPro-Regular, 'Myriad Pro'; font-size: 12px; }
                        .cls-4 { fill: #00a651; }
                        .cls-5 { fill: #2e3192; }
                    `}</style>
                </defs>

                {/* Floor Plan */}
                <g id="Floor_Plan">
                    <rect className="cls-1" x="-46.3" y="47.3" width="468" height="374.4" transform="translate(-46.8 422.2) rotate(-90)" />
                </g>

                {/* Tables */}
                <g id="Tables">
                    <rect className="cls-4" x="278.12" y="18.5" width="21.6" height="10.8" />
                    <rect className="cls-4" x="256.52" y="18.5" width="21.6" height="10.8" />
                    {/* Numbered table rects */}
                    {tableRects.map((t) => {
                        const isSelected = selectedTable === t.tableNumber;
                        return (
                            <rect
                                key={t.tableNumber}
                                x={t.x}
                                y={t.y}
                                width="21.6"
                                height="10.8"
                                transform={t.transform}
                                fill={isSelected ? "#1657bb" : "#2e3192"}
                                stroke="#231f20"
                                strokeMiterlimit={10}
                                opacity={isSelected ? 1 : 0.85}
                                style={{ cursor: "pointer", transition: "fill 0.2s, opacity 0.2s" }}
                                onClick={() => onTableClick(t.tableNumber)}
                            />
                        );
                    })}

                    {/* Special non-numbered rects (orange cls-3 and cyan cls-2) */}
                    <rect className="cls-2" x="340.7" y="85.1" width="21.6" height="10.8" transform="translate(261 442) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="387.5" width="21.6" height="10.8" transform="translate(-369 416.8) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="409.1" width="21.6" height="10.8" transform="translate(-390.6 438.4) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="250.7" width="21.6" height="10.8" transform="translate(-232.2 280) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="329.9" width="21.6" height="10.8" transform="translate(-311.4 359.2) rotate(-90)" />
                    <rect className="cls-3" x="13.1" y="308.3" width="21.6" height="10.8" transform="translate(-289.8 337.6) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="409.1" width="21.6" height="10.8" transform="translate(-329.4 499.6) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="387.5" width="21.6" height="10.8" transform="translate(-307.8 478) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="329.9" width="21.6" height="10.8" transform="translate(-250.2 420.4) rotate(-90)" />
                    <rect className="cls-3" x="74.3" y="272.3" width="21.6" height="10.8" transform="translate(-192.6 362.8) rotate(-90)" />
                </g>

                {/* Numbers */}
                <g id="Numbers">
                    <text className="cls-6" transform="translate(82.02 338.82)"><tspan x="0" y="0">2</tspan></text>
                    <text className="cls-6" transform="translate(82.02 396.42)"><tspan x="0" y="0">3</tspan></text>
                    <text className="cls-7" transform="translate(136.29 95.9) rotate(-90)"><tspan x="0" y="0">49</tspan></text>
                    <text className="cls-6" transform="translate(82.02 418.02)"><tspan x="0" y="0">3</tspan></text>
                    <text className="cls-6" transform="translate(20.82 338.82)"><tspan x="0" y="0">5</tspan></text>
                    <text className="cls-7" transform="translate(135.42 132.66) rotate(-90)"><tspan x="0" y="0">50</tspan></text>
                    <text className="cls-7" transform="translate(135.42 168.66) rotate(-90)"><tspan x="0" y="0">51</tspan></text>
                    <text className="cls-7" transform="translate(135.42 204.98) rotate(-90)"><tspan x="0" y="0">52</tspan></text>
                    <text className="cls-7" transform="translate(135.42 240.98) rotate(-90)"><tspan x="0" y="0">53</tspan></text>
                    <text className="cls-7" transform="translate(135.42 276.66) rotate(-90)"><tspan x="0" y="0">54</tspan></text>
                    <text className="cls-7" transform="translate(135.42 312.65) rotate(-90)"><tspan x="0" y="0">55</tspan></text>
                    <text className="cls-6" transform="translate(20.82 418.02)"><tspan x="0" y="0">6</tspan></text>
                    <text className="cls-6" transform="translate(20.82 259.62)"><tspan x="0" y="0">4</tspan></text>
                    <text className="cls-6" transform="translate(20.82 317.22)"><tspan x="0" y="0">5</tspan></text>
                    <text className="cls-7" transform="translate(308.35 92.99) rotate(-90)"><tspan x="0" y="0">9</tspan></text>
                    <text className="cls-7" transform="translate(268.62 97.18) rotate(-90)"><tspan x="0" y="0">19</tspan></text>
                    <text className="cls-7" transform="translate(222.69 95.9) rotate(-90)"><tspan x="0" y="0">29</tspan></text>
                    <text className="cls-7" transform="translate(182.22 96.61) rotate(-90)"><tspan x="0" y="0">39</tspan></text>
                    <text className="cls-7" transform="translate(355.02 129.58) rotate(-90)"><tspan x="0" y="0">1</tspan></text>
                    <text className="cls-7" transform="translate(355.02 273.58) rotate(-90)"><tspan x="0" y="0">4</tspan></text>
                    <text className="cls-6" transform="translate(20.82 396.42)"><tspan x="0" y="0">6</tspan></text>
                    <text className="cls-7" transform="translate(221.82 132.66) rotate(-90)"><tspan x="0" y="0">30</tspan></text>
                    <text className="cls-7" transform="translate(221.82 168.66) rotate(-90)"><tspan x="0" y="0">31</tspan></text>
                    <text className="cls-7" transform="translate(221.82 204.98) rotate(-90)"><tspan x="0" y="0">32</tspan></text>
                    <text className="cls-7" transform="translate(221.82 240.98) rotate(-90)"><tspan x="0" y="0">33</tspan></text>
                    <text className="cls-7" transform="translate(221.82 276.66) rotate(-90)"><tspan x="0" y="0">34</tspan></text>
                    <text className="cls-7" transform="translate(221.82 312.65) rotate(-90)"><tspan x="0" y="0">35</tspan></text>
                    <text className="cls-7" transform="translate(221.82 348.66) rotate(-90)"><tspan x="0" y="0">36</tspan></text>
                    <text className="cls-7" transform="translate(221.82 384.66) rotate(-90)"><tspan x="0" y="0">37</tspan></text>
                    <text className="cls-7" transform="translate(221.82 420.66) rotate(-90)"><tspan x="0" y="0">38</tspan></text>
                    <text className="cls-7" transform="translate(182.22 132.66) rotate(-90)"><tspan x="0" y="0">40</tspan></text>
                    <text className="cls-7" transform="translate(182.22 168.66) rotate(-90)"><tspan x="0" y="0">41</tspan></text>
                    <text className="cls-7" transform="translate(182.22 204.66) rotate(-90)"><tspan x="0" y="0">42</tspan></text>
                    <text className="cls-7" transform="translate(182.22 240.66) rotate(-90)"><tspan x="0" y="0">43</tspan></text>
                    <text className="cls-7" transform="translate(182.22 276.66) rotate(-90)"><tspan x="0" y="0">44</tspan></text>
                    <text className="cls-7" transform="translate(182.22 312.65) rotate(-90)"><tspan x="0" y="0">45</tspan></text>
                    <text className="cls-7" transform="translate(182.22 348.66) rotate(-90)"><tspan x="0" y="0">46</tspan></text>
                    <text className="cls-7" transform="translate(182.22 384.66) rotate(-90)"><tspan x="0" y="0">47</tspan></text>
                    <text className="cls-7" transform="translate(182.22 420.66) rotate(-90)"><tspan x="0" y="0">48</tspan></text>
                    <text className="cls-7" transform="translate(308.22 132.66) rotate(-90)"><tspan x="0" y="0">10</tspan></text>
                    <text className="cls-7" transform="translate(355.02 165.58) rotate(-90)"><tspan x="0" y="0">2</tspan></text>
                    <text className="cls-7" transform="translate(308.22 168.66) rotate(-90)"><tspan x="0" y="0">11</tspan></text>
                    <text className="cls-7" transform="translate(308.22 204.66) rotate(-90)"><tspan x="0" y="0">12</tspan></text>
                    <text className="cls-7" transform="translate(308.22 240.66) rotate(-90)"><tspan x="0" y="0">13</tspan></text>
                    <text className="cls-7" transform="translate(308.22 276.65) rotate(-90)"><tspan x="0" y="0">14</tspan></text>
                    <text className="cls-7" transform="translate(308.22 312.66) rotate(-90)"><tspan x="0" y="0">15</tspan></text>
                    <text className="cls-7" transform="translate(308.22 348.66) rotate(-90)"><tspan x="0" y="0">16</tspan></text>
                    <text className="cls-7" transform="translate(308.22 384.66) rotate(-90)"><tspan x="0" y="0">17</tspan></text>
                    <text className="cls-7" transform="translate(308.22 420.66) rotate(-90)"><tspan x="0" y="0">18</tspan></text>
                    <text className="cls-7" transform="translate(268.62 132.66) rotate(-90)"><tspan x="0" y="0">20</tspan></text>
                    <text className="cls-7" transform="translate(268.62 168.66) rotate(-90)"><tspan x="0" y="0">21</tspan></text>
                    <text className="cls-7" transform="translate(268.62 204.66) rotate(-90)"><tspan x="0" y="0">22</tspan></text>
                    <text className="cls-7" transform="translate(268.62 240.66) rotate(-90)"><tspan x="0" y="0">23</tspan></text>
                    <text className="cls-7" transform="translate(268.62 276.66) rotate(-90)"><tspan x="0" y="0">24</tspan></text>
                    <text className="cls-7" transform="translate(268.62 312.65) rotate(-90)"><tspan x="0" y="0">25</tspan></text>
                    <text className="cls-7" transform="translate(268.62 348.66) rotate(-90)"><tspan x="0" y="0">26</tspan></text>
                    <text className="cls-7" transform="translate(268.62 384.66) rotate(-90)"><tspan x="0" y="0">27</tspan></text>
                    <text className="cls-7" transform="translate(268.62 420.66) rotate(-90)"><tspan x="0" y="0">28</tspan></text>
                    <text className="cls-7" transform="translate(355.02 381.58) rotate(-90)"><tspan x="0" y="0">7</tspan></text>
                    <text className="cls-7" transform="translate(355.02 417.58) rotate(-90)"><tspan x="0" y="0">8</tspan></text>
                    <text className="cls-7" transform="translate(355.02 345.58) rotate(-90)"><tspan x="0" y="0">6</tspan></text>
                    <text className="cls-7" transform="translate(355.02 309.58) rotate(-90)"><tspan x="0" y="0">5</tspan></text>
                    <text className="cls-7" transform="translate(355.02 201.58) rotate(-90)"><tspan x="0" y="0">3</tspan></text>
                    <text className="cls-7" transform="translate(135.42 348.66) rotate(-90)"><tspan x="0" y="0">56</tspan></text>
                    <text className="cls-7" transform="translate(135.42 384.66) rotate(-90)"><tspan x="0" y="0">57</tspan></text>
                    <text className="cls-7" transform="translate(135.42 420.66) rotate(-90)"><tspan x="0" y="0">58</tspan></text>
                    <text className="cls-6" transform="translate(82.02 281.22)"><tspan x="0" y="0">1</tspan></text>
                </g>
            </svg>
        </div>
    );
}
