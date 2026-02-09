"use client";
import { events, rooms } from "@/lib/events";
import type { Event } from "@/lib/events";
import { useMemo } from "react";

export default function EventsCalendar() {
  // Calculate time range (11:00 to 21:00)
  const startHour = 11;
  const endHour = 21;
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`);
    }
    return slots;
  }, []);

  // Convert 24-hour time to 12-hour AM/PM format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, "0")} ${period}`;
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
  const eventsByRoom = useMemo(() => {
    const grouped: Record<string, Event[]> = {};
    rooms.forEach((room) => {
      grouped[room] = events.filter((event) => event.room === room);
    });
    return grouped;
  }, []);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="font-mono text-sm uppercase tracking-widest text-slate-700">
          {"// Schedule_Grid"}
        </div>
        <div className="h-px flex-1 bg-slate-300" />
      </div>

      <div className="bg-white/50 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-sm">
        {/* Scrollable container */}
        <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
          <div className="relative" style={{ minWidth: "1200px" }}>
            {/* Time header - sticky */}
            <div className="sticky top-0 z-20 bg-white border-b-2 border-primary/30">
              <div className="flex">
                {/* Empty corner for room labels */}
                <div className="w-30 flex-shrink-0 border-r-2 border-primary/30 p-3 sticky left-0 z-30 bg-white">
                  <span className="font-sans font-bold text-sm text-slate-600 uppercase">
                    Room / Time
                  </span>
                </div>
                {/* Time slots */}
                <div className="flex-1 flex">
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="flex-shrink-0 border-r border-slate-200 p-2 text-center bg-white"
                      style={{ width: "120px" }}
                    >
                      <span className="font-mono font-semibold text-sm text-slate-700">
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
                  key={room}
                  className={`flex border-b border-slate-200 ${
                    roomIndex % 2 === 0 ? "bg-slate-50/30" : ""
                  }`}
                >
                  {/* Room label - sticky */}
                  <div className="w-30 flex-shrink-0 border-r-2 border-primary/30 p-3 bg-white sticky left-0 z-10">
                    <span className="font-sans font-semibold text-sm text-slate-900">
                      {room}
                    </span>
                  </div>

                  {/* Event grid */}
                  <div className="flex-1 relative" style={{ height: "100px" }}>
                    {/* Time grid lines */}
                    <div className="absolute inset-0 flex border-slate-200">
                      {timeSlots.map((time) => (
                        <div
                          key={time}
                          className="flex-shrink-0 border-r border-slate-200"
                          style={{ width: "120px" }}
                        />
                      ))}
                    </div>

                    {/* Events for this room */}
                    {eventsByRoom[room]?.map((event) => {
                      const style = getEventStyle(event);
                      return (
                        <div
                          key={event.id}
                          className="absolute top-2 bottom-2 bg-primary/90 hover:bg-primary text-white rounded-md p-2 overflow-hidden cursor-pointer transition-all duration-200 hover:z-30 hover:shadow-lg group"
                          style={style}
                        >
                          <div className="font-sans font-bold text-xs leading-tight mb-1 truncate">
                            {event.title}
                          </div>
                          <div className="font-mono text-[10px] opacity-90 truncate">
                            {formatTime(event.startTime)} - {formatTime(event.endTime)}
                          </div>
                          <div className="font-mono text-[9px] opacity-75 truncate mt-1">
                            {event.genre}
                          </div>

                          {/* Tooltip on hover */}
                          <div className="absolute left-0 top-full mt-1 bg-slate-900 text-white p-3 rounded-md shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 w-64 text-xs">
                            <div className="font-bold mb-1">{event.title}</div>
                            <div className="font-mono text-[10px] text-slate-300 mb-2">
                              {formatTime(event.startTime)} - {formatTime(event.endTime)} | {event.room}
                            </div>
                            <div className="text-xs leading-relaxed mb-2">
                              {event.description}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {event.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-[9px] bg-primary/30 px-1 py-0.5 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
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
      <div className="mt-4 flex items-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded-sm" />
          <span className="font-mono text-slate-600">Event</span>
        </div>
        <div className="font-mono text-slate-500">
          Hover over events for details
        </div>
      </div>
    </div>
  );
}
