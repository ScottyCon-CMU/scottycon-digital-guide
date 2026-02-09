"use client";
import { events } from "@/lib/events";
import type { Event } from "@/lib/events";

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white/50 backdrop-blur-md border border-primary/30 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

      {/* Time Badge */}
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
          {event.startTime} - {event.endTime}
        </div>
        <div className="bg-secondary-dark/10 text-secondary-dark font-mono text-xs px-2 py-1 rounded-sm">
          {event.room}
        </div>
      </div>

      {/* Event Title */}
      <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-primary transition-colors mb-2">
        {event.title}
      </h3>

      {/* Genre */}
      <div className="font-mono text-xs text-slate-600 mb-3 uppercase tracking-wider">
        {event.genre}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700 leading-relaxed mb-4">
        {event.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {event.tags.map((tag, index) => (
          <span
            key={index}
            className="font-mono text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded border border-primary/20"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function EventsList() {
  // Sort events by start time
  const sortedEvents = [...events].sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <div className="mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="font-mono text-sm uppercase tracking-widest text-slate-700">
          {"// All_Events"}
        </div>
        <div className="h-px flex-1 bg-slate-300" />
        <div className="font-mono text-xs text-slate-600">
          {events.length} Events
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
