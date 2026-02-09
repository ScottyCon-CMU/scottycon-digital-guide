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
            EVENTS
          </h1>
        </div>
        <div className="flex items-baseline gap-4 mt-2">
          <button
            className="
              flex items-center justify-center gap-2
              w-40 h-12
              rounded-xl
              font-bold
              transition-all duration-300
              bg-primary text-white-400
              hover:bg-white hover:text-primary
            "
            onClick={() => changeCalView(!calView)}
          >
            {calView ? "LIST VIEW" : "CALENDAR VIEW"}
          </button>
        </div>
      </div>
      <div>
        {calView ? <EventsCalendar/> : <EventsList/>}
      </div>
    </section>
  );
}
