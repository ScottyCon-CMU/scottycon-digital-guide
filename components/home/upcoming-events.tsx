"use client";

import { useState } from "react";
import { events } from "@/lib/data";

export default function UpcomingEvents() {
  // Track which event ID is currently expanded
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const now = new Date();
  const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

  const upcomingEvents = events
    .map((event) => ({
      ...event,
      startTime: new Date(`2026-03-10T${event.startTime}:00`),
      endTime: new Date(`2026-03-10T${event.endTime}:00`),
    }))
    .filter((event) => {
      // Show events that haven't ended yet AND start before 1 hour from now
      return event.endTime > now && event.startTime <= oneHourFromNow;
    })
    .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-8 flex flex-col px-6 min-h-64 gap-4 mt-4">
      <div className="flex items-center gap-4 text-secondary">
        <h2 className="font-mono font-semibold tracking-widest text-sm uppercase">
          {"// Upcoming_Events"}
        </h2>
        <div className="h-[1.5px] flex-1 bg-secondary" />
      </div>

      <div className="flex flex-col gap-3 border-l-2 border-secondary pl-4">
        {upcomingEvents.length === 0 ? (
          <p className="text-foreground/70 italic text-sm font-mono border-l-2 border-secondary/30 pl-4 py-2">
            No events starting within the next hour.
          </p>
        ) : (
          upcomingEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => toggleExpand(event.id)}
              className="group flex flex-col gap-1 border-l-4 border-secondary pl-4 pr-4 py-3 bg-surface backdrop-blur-md rounded-r-lg text-foreground shadow-sm hover:bg-surface/80 text-left w-full cursor-pointer"
            >
              <h3 className="font-bold text-lg group-hover:text-primary">
                {event.title}
              </h3>
              <div className="flex items-center gap-2 font-mono text-xs opacity-80 mt-1">
                <span className="text-secondary font-semibold">
                  {event.startTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  {" - "}
                  {event.endTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-foreground/50">|</span>
                {/* Formatted to show the Floor properly */}
                <span>
                  {event.room[0]}, Floor {event.room[1]}
                </span>
              </div>

              {/* Expandable Description Section */}
              {expandedId === event.id && (
                <div className="mt-3 pt-3 border-t border-secondary/20">
                  <p className="text-sm text-foreground/90 font-sans leading-relaxed">
                    {event.description}
                  </p>

                  {/* Optional: Show tags if the event has them */}
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono bg-secondary/20 text-secondary px-2 py-0.5 rounded-sm uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </button>
          ))
        )}
      </div>
    </section>
  );
}
