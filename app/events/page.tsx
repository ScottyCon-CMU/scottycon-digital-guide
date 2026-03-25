"use client";

import { useState } from "react";
import EventsCalendar from "@/components/events/events-calendar";
import EventsList from "@/components/events/events-list";

export default function EventsPage() {
  const [isCalendarView, setIsCalendarView] = useState(true);

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
              Events
            </h1>
          </div>

          {/* Toggle Bar */}
          <div className="flex mt-6 h-12 w-full bg-surface backdrop-blur-md border border-secondary/30 rounded-lg overflow-hidden cursor-pointer shadow-sm shadow-secondary/5">
            <button
              className={tabClass(isCalendarView)}
              onClick={() => setIsCalendarView(true)}
            >
              Calendar View
            </button>
            <button
              className={tabClass(!isCalendarView)}
              onClick={() => setIsCalendarView(false)}
            >
              List View
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-6">
          {isCalendarView ? (
            <div className="flex flex-col gap-8">
              <EventsCalendar floor={1} />
              <EventsCalendar floor={2} />
            </div>
          ) : (
            <EventsList />
          )}
        </div>
      </section>
    </main>
  );
}
