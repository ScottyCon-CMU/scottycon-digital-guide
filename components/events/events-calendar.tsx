"use client";
import { useState, useRef, useEffect } from "react";
import { events, rooms1, rooms2 } from "@/lib/data";
import type { Event } from "@/lib/data";

interface Props {
  floor?: number;
}

export default function EventsCalendar({ floor }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedEvent) return;
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedEvent(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [selectedEvent]);
  // Calculate time range (11:00 to 21:00)
  const rooms = floor == 1 ? rooms1 : rooms2;
  const startHour = 11;
  const endHour = 21;
  const slots: string[] = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  // Convert 24-hour time to 12-hour AM/PM format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, "0")}${period}`;
  };

  // Convert time string to minutes from start
  const timeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours - startHour) * 60 + minutes;
  };

  // Calculate event position and width
  const getEventStyle = (event: Event) => {
    const startMinutes = timeToMinutes(event.startTime);
    const endMinutes = timeToMinutes(event.endTime);
    const duration = endMinutes - startMinutes;

    // Each hour is 120px wide
    const pixelsPerMinute = 120 / 60;
    const left = startMinutes * pixelsPerMinute;
    const width = duration * pixelsPerMinute;

    return {
      left: `${left}px`,
      width: `${width}px`,
    };
  };

  // Group events by room
  const eventsByRoom: Record<string, Event[]> = {};
  rooms.forEach((psroom) => {
    const room = psroom[0];
    eventsByRoom[room] = events.filter(
      (event) => event.room[1] === floor && event.room[0] === room,
    );
  });

  return (
    <div className="mt-8">
      <h1 className="font-sans font-bold sm:text-4xl tracking-tighter text-slate-900">
        Floor {String(floor)}
      </h1>

      <div className="bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-sm">
        {/* Scrollable container */}
        <div className="overflow-x-auto overflow-y-auto max-h-[1000px]">
          <div className="relative" style={{ minWidth: "1440px" }}>
            {/* Time header - sticky */}
            <div className="sticky top-0 z-20 bg-white border-b-2 border-primary/30">
              <div className="flex">
                {/* Empty corner for room labels */}
                <div className="w-25 flex-shrink-0 border-r-2 border-primary/30 p-3 sticky left-0 z-30 bg-white">
                  <span className="font-sans font-bold text-sm text-slate-700 uppercase">
                    Room & Time
                  </span>
                </div>
                {/* Time slots */}
                <div className="flex-1 flex">
                  {slots.map((time) => (
                    <div
                      key={time}
                      className="flex-shrink-0 border-r border-slate-200 p-3 text-center bg-white"
                      style={{ width: "120px" }}
                    >
                      <span className="font-sans font-bold text-sm text-slate-700">
                        {formatTime(time)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Room rows */}
            <div>
              {rooms.map((room, roomIndex) => (
                <div
                  key={room[0]}
                  className={`flex border-b border-slate-200 ${
                    roomIndex % 2 === 0 ? "bg-slate-50/30" : ""
                  }`}
                >
                  {/* Room label - sticky */}
                  <div className="w-25 flex-shrink-0 border-r-2 border-primary/30 p-3 bg-white sticky left-0 z-10">
                    <span className="font-sans font-semibold text-xs text-slate-900">
                      {room[0]}
                    </span>
                  </div>

                  {/* Event grid */}
                  <div className="flex-1 relative" style={{ height: "80px" }}>
                    {/* Time grid lines */}
                    <div className="absolute inset-0 flex">
                      {slots.map((time) => (
                        <div
                          key={time}
                          className="flex-shrink-0 border-r border-slate-200"
                          style={{ width: "120px" }}
                        />
                      ))}
                    </div>

                    {/* Events for this room */}
                    {eventsByRoom[room[0]]?.map((event) => {
                      const style = getEventStyle(event);
                      return (
                        <div
                          key={event.id}
                          className="absolute top-2 bottom-2 bg-primary/90 hover:bg-primary text-white rounded-md p-2 overflow-hidden cursor-pointer transition-all duration-200 hover:z-30 hover:shadow-lg"
                          style={style}
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="font-sans font-bold text-xs leading-tight mb-1 truncate">
                            {event.title}
                          </div>
                          <div className="font-mono text-[10px] opacity-90 truncate">
                            {formatTime(event.startTime)} -{" "}
                            {formatTime(event.endTime)}
                          </div>
                          <div className="font-mono text-[9px] opacity-75 truncate mt-1">
                            {event.genre}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      {floor == 2 ? (
        <div className="mt-4 flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-sm" />
            <span className="font-mono text-slate-600">Event</span>
          </div>
          <div className="font-mono text-slate-500">
            Click on events for details
          </div>
        </div>
      ) : null}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-white/90 backdrop-blur-md border border-primary/30 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative overflow-hidden"
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

            {/* Close button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Time Badge */}
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
                {formatTime(selectedEvent.startTime)} - {formatTime(selectedEvent.endTime)}
              </div>
              <div className="bg-secondary/10 text-primary font-mono text-xs px-2 py-1 rounded-sm">
                {selectedEvent.room[0]}
              </div>
            </div>

            {/* Event Title */}
            <h3 className="font-sans font-bold text-xl text-slate-900 mb-2">
              {selectedEvent.title}
            </h3>

            {/* Genre */}
            <div className="font-mono text-xs text-slate-600 mb-3 uppercase tracking-wider">
              {selectedEvent.genre}
            </div>

            {/* Description */}
            {selectedEvent.description !== "" && (
              <p className="text-sm text-slate-700 leading-relaxed mb-4 break-words">
                {selectedEvent.description}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedEvent.tags.map((tag, index) => (
                <span
                  key={index}
                  className="font-mono text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded border border-primary/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
