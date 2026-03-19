"use client";
import EventsCalendar from "./events-calendar";
import EventsList from "./events-list";
import { useState } from "react";

export default function EventsPage() {
  const [calView, changeCalView] = useState(false);

  return (
    <section className="relative mt-[5vh] flex flex-col px-6 pb-32">
      {/* Title Block */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
            2026
          </div>
          <div className="h-px w-24 bg-slate-300" />
        </div>
        <div className="flex items-baseline gap-4 mt-2">
          <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter text-slate-900">
            Events
          </h1>
          <h1/>
        </div>
        {/* Toggle Bar */}
        <div className="flex mt-4 h-12 w-full bg-surface backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden">
          <button
            className={`flex-1 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
              !calView
                ? "bg-primary text-white shadow-sm"
                : "text-black hover:bg-primary/10"
            }`}
            onClick={() => changeCalView(false)}
          >
            List View
          </button>
          <button
            className={`flex-1 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
              calView
                ? "bg-primary text-white shadow-sm"
                : "text-black hover:bg-primary/10"
            }`}
            onClick={() => changeCalView(true)}
          >
            Calendar View
          </button>
        </div>
      </div>
      <div>
        {calView ? <div><EventsCalendar floor={1}/><EventsCalendar floor={2}/></div> : <EventsList/>}
      </div>
    </section>
  );
}
