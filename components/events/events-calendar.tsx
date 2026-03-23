"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { events, rooms, genreColors } from "@/lib/data";
import type { Event } from "@/lib/data";
import { formatTime24To12, formatDescription } from "@/lib/utils";
import { BsX } from "react-icons/bs";

interface Props {
  floor?: number;
}

const START_HOUR = 11;
const END_HOUR = 21;
const PIXELS_PER_MINUTE = 2;
const SLOTS = Array.from(
  { length: END_HOUR - START_HOUR + 1 },
  (_, i) => `${(i + START_HOUR).toString().padStart(2, "0")}:00`,
);

type EventWithLane = Event & { lane: number };

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export default function EventsCalendar({ floor }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedEvent) return;
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        setSelectedEvent(null);
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

  const { filteredRooms, eventsByRoom, maxLanesByRoom } = useMemo(() => {
    const r = floor ? rooms.filter((room) => room.floor === floor) : rooms;
    const eByRoom: Record<string, EventWithLane[]> = {};
    const maxLanes: Record<string, number> = {};

    r.forEach((room) => {
      const roomEvents = events
        .filter((e) => e.room.floor === floor && e.room.name === room.name)
        .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

      const lanes: number[] = [];
      const eventsWithLanes: EventWithLane[] = [];

      roomEvents.forEach((event) => {
        const startMins = timeToMinutes(event.startTime);
        const endMins = timeToMinutes(event.endTime);

        // Find the first lane that finishes before this event starts
        let assignedLane = -1;
        for (let i = 0; i < lanes.length; i++) {
          if (lanes[i] <= startMins) {
            assignedLane = i;
            lanes[i] = endMins;
            break;
          }
        }

        // If all lanes are busy, create a new lane below
        if (assignedLane === -1) {
          assignedLane = lanes.length;
          lanes.push(endMins);
        }

        eventsWithLanes.push({ ...event, lane: assignedLane });
      });

      eByRoom[room.name] = eventsWithLanes;
      maxLanes[room.name] = Math.max(1, lanes.length); // Ensure at least 1 lane for row height
    });

    return { filteredRooms: r, eventsByRoom: eByRoom, maxLanesByRoom: maxLanes };
  }, [floor]);

  const getEventStyle = (event: EventWithLane) => {
    const startMinutes = timeToMinutes(event.startTime) - timeToMinutes(`${START_HOUR}:00`);
    const duration = timeToMinutes(event.endTime) - timeToMinutes(event.startTime);

    return {
      left: `${startMinutes * PIXELS_PER_MINUTE}px`,
      width: `${duration * PIXELS_PER_MINUTE}px`,
      // Calculate vertical position based on assigned lane
      top: `${event.lane * 70 + 10}px`, 
      height: "60px",
    };
  };

  return (
    <div className="w-full">
      {/* Legend & Floor Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
        <h2 className="font-sans font-bold text-3xl tracking-tighter text-foreground">
          Floor {floor}
        </h2>

        {floor === 1 && (
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {Object.entries(genreColors).map(([genre, colors]) => (
              <div key={genre} className="flex items-center gap-1.5">
                <div
                  className={`w-3 h-3 ${colors.bg} rounded-sm shadow-sm`}
                />
                <span className="font-mono text-foreground/90">{genre}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-surface backdrop-blur-md border border-secondary/30 rounded-xl overflow-hidden shadow-sm shadow-secondary/5">
        <div className="overflow-x-auto overflow-y-auto max-h-150 no-scrollbar">
          <div className="relative" style={{ minWidth: "1440px" }}>
            {/* Sticky Time Header */}
            <div className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b-2 border-secondary/30 flex">
              <div className="w-24 shrink-0 border-r-2 border-secondary/30 p-3 sticky left-0 z-30 bg-background">
                <span className="font-sans font-bold text-sm text-foreground uppercase tracking-wide">
                  Room
                </span>
              </div>
              <div className="flex-1 flex">
                {SLOTS.map((time) => (
                  <div
                    key={time}
                    className="shrink-0 border-r border-secondary/20 p-3 text-center"
                    style={{ width: "120px" }}
                  >
                    <span className="font-mono font-bold text-xs text-secondary">
                      {formatTime24To12(time)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Rows */}
            <div>
              {filteredRooms.map((room, i) => {
                const rowHeight = Math.max(90, (maxLanesByRoom[room.name] || 1) * 70 + 20);
                
                return (
                  <div
                    key={room.name}
                    className={`flex border-b border-secondary/20 ${i % 2 === 0 ? "bg-secondary/5" : ""}`}
                  >
                    <div className="w-24 shrink-0 border-r-2 border-secondary/30 p-3 sticky left-0 z-10 bg-background/80 backdrop-blur-md flex items-center">
                      <span className="font-sans font-semibold text-xs text-foreground leading-tight">
                        {room.name}
                      </span>
                    </div>

                    <div className="flex-1 relative transition-all" style={{ height: `${rowHeight}px` }}>
                      <div className="absolute inset-0 flex pointer-events-none">
                        {SLOTS.map((time) => (
                          <div
                            key={time}
                            className="shrink-0 border-r border-secondary/10"
                            style={{ width: "120px" }}
                          />
                        ))}
                      </div>

                      {eventsByRoom[room.name]?.map((event) => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className={`absolute ${genreColors[event.genre]?.bg ?? "bg-primary/90"} ${genreColors[event.genre]?.hover ?? "hover:bg-primary"} text-white rounded-md p-2 overflow-hidden cursor-pointer transition-all duration-200 hover:z-30 hover:shadow-lg border border-background/20`}
                          style={getEventStyle(event)}
                        >
                          <div className="font-sans font-bold text-xs leading-tight mb-0.5 truncate drop-shadow-sm">
                            {event.title}
                          </div>
                          <div className="font-mono text-[9px] opacity-90 truncate">
                            {formatTime24To12(event.startTime)} -{" "}
                            {formatTime24To12(event.endTime)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm px-4">
          <div
            ref={modalRef}
            className="bg-background border border-secondary/30 rounded-2xl shadow-2xl shadow-accent/10 max-w-md w-full p-6 relative flex flex-col max-h-[80vh] animate-fade-slide-in"
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-2xl" />

            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-secondary hover:text-accent transition-colors"
            >
              <BsX className="text-3xl" />
            </button>

            <div className="flex items-center gap-3 mb-4 shrink-0 mt-2">
              <div className="bg-primary text-background font-mono font-semibold text-xs px-3 py-1 rounded-md shadow-sm">
                {formatTime24To12(selectedEvent.startTime)} -{" "}
                {formatTime24To12(selectedEvent.endTime)}
              </div>
              <div className="bg-secondary/10 text-secondary font-mono text-xs px-2 py-1 rounded-md border border-secondary/20">
                {selectedEvent.room.name}
              </div>
            </div>

            <h3 className="font-sans font-bold text-2xl text-foreground mb-1 shrink-0 pr-6 leading-tight">
              {selectedEvent.title}
            </h3>

            <div className="font-sans text-sm text-foreground opacity-80 mb-3">
              By: <span className="font-semibold text-foreground">{selectedEvent.host}</span>
            </div>

            <div className={`font-mono font-bold text-xs ${genreColors[selectedEvent.genre]?.text ?? "text-secondary"} mb-4 uppercase tracking-wider shrink-0`}>
              {selectedEvent.genre}
            </div>

            {selectedEvent.description && (
              <div className="text-sm text-foreground opacity-90 leading-relaxed overflow-y-auto pr-2 bg-surface p-4 rounded-xl border border-secondary/20 no-scrollbar whitespace-pre-wrap">
                {formatDescription(selectedEvent.description)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
