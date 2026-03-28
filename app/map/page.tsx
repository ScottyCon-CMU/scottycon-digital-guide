"use client";

import { useState } from "react";
import Image from "next/image";

export default function MapPage() {
  const [isFloor1, setIsFloor1] = useState(true);

  const tabClass = (isActive: boolean) =>
    `flex-1 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
      isActive
        ? "bg-primary text-background shadow-sm shadow-primary/20"
        : "text-secondary opacity-70 hover:opacity-100 hover:bg-secondary/10"
    }`;

  return (
    <main className="text-foreground min-h-screen">
      <section className="relative mt-[5vh] flex flex-col px-6 pb-32">
        {/* Title Block */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-background font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
              2026
            </div>
            <div className="h-px w-24 bg-secondary/30" />
          </div>
          <div className="flex items-baseline gap-4 mt-2">
            <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter text-foreground">
              Convention Map
            </h1>
          </div>

          {/* Toggle Bar */}
          <div className="flex mt-6 h-12 w-full bg-surface backdrop-blur-md border border-secondary/30 rounded-lg overflow-hidden cursor-pointer shadow-sm shadow-secondary/5">
            <button
              className={tabClass(isFloor1)}
              onClick={() => setIsFloor1(true)}
            >
              Floor 1
            </button>
            <button
              className={tabClass(!isFloor1)}
              onClick={() => setIsFloor1(false)}
            >
              Floor 2
            </button>
          </div>
        </div>

        {/* Map Image */}
        <div className="mt-6 bg-surface backdrop-blur-md border border-secondary/30 rounded-lg overflow-hidden shadow-sm shadow-secondary/5" style={{ touchAction: "pan-x pan-y pinch-zoom" }}>
          <Image
            key={isFloor1 ? "floor1" : "floor2"}
            src={isFloor1 ? "/images/map/floor1.png" : "/images/map/floor2.png"}
            alt={isFloor1 ? "Convention Floor 1 Map" : "Convention Floor 2 Map"}
            width={1200}
            height={900}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>
      </section>
    </main>
  );
}
