"use client";
import { useState, useRef, useEffect, useSyncExternalStore, useCallback } from "react";
import { events, genre as genres } from "@/lib/data";
import { formatDescription } from "@/lib/format";
import { FaRegStar, FaStar } from "react-icons/fa";
import type { Event } from "@/lib/data";

const FAVORITES_KEY = "favorites";
const defaultFavorites = Array(events.length).fill(false) as boolean[];

let listeners: Array<() => void> = [];
let cachedRaw: string | null = null;
let cachedParsed: boolean[] = defaultFavorites;

function emitChange() {
  cachedRaw = null;
  for (const listener of listeners) listener();
}
function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => { listeners = listeners.filter((l) => l !== listener); };
}
function getSnapshot(): boolean[] {
  const stored = localStorage.getItem(FAVORITES_KEY);
  if (stored === cachedRaw) return cachedParsed;
  cachedRaw = stored;
  cachedParsed = stored ? JSON.parse(stored) : defaultFavorites;
  return cachedParsed;
}
function getServerSnapshot(): boolean[] {
  return defaultFavorites;
}

function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggleFavorite = useCallback((id: number) => {
    const current = getSnapshot();
    const next = current.map((v, i) => (i === id ? !v : v));
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    emitChange();
  }, []);
  return { favorites, toggleFavorite };
}

// Convert 24-hour time to 12-hour AM/PM format
const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${minutes.toString().padStart(2, "0")}${period}`;
};

function EventCard({ event, isFavorite, onToggleFavorite }: { event: Event; isFavorite: boolean; onToggleFavorite: () => void }) {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <div
      onClick={() => setCardOpen(!cardOpen)}
      className="bg-white/50 backdrop-blur-md border border-primary/30 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

      {/* Time Badge */}
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary text-white font-mono font-semibold text-xs px-3 py-1 rounded-sm">
          {formatTime(event.startTime)} - {formatTime(event.endTime)}
        </div>
        <div className="bg-secondary/10 text-primary font-mono text-xs px-2 py-1 rounded-sm">
          {event.room[0]}
        </div>
      </div>

      {/* Event Title */}
      <div className="flex justify-between">
        <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-primary transition-colors mb-2">
          {event.title}
        </h3>
        <div className="mt-1.5" onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}>
          {isFavorite ? (
            <FaStar className="text-yellow-400" />
          ) : (
            <FaRegStar className="text-black" />
          )}
        </div>
      </div>

      {/* Genre */}
      <div className="relative mb-3">
        <div className="font-mono text-xs text-slate-600 uppercase tracking-wider">
          {event.genre}
        </div>
        {event.description !== "" && (
          <svg
            className={`w-3.5 h-3.5 text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${cardOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        )}
      </div>

      {/* Description */}
      {cardOpen && (event.description !== "") ? (
        <div className="text-sm text-slate-700 leading-relaxed mb-4 break-words max-w-none max-h-48 overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
          {formatDescription(event.description)}
        </div>
      ) : null}

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
  const { favorites, toggleFavorite } = useFavorites();

  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filterOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [filterOpen]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  // Sort events by start time
  const sortedEvents = [...events].sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });

  // Filter events by search query and genre
  const filteredEvents = sortedEvents.filter((event) => {
    const query = search.toLowerCase();
    const isFavorited = favorites[event.id];
    const matchesSearch =
      !query ||
      event.title.toLowerCase().includes(query) ||
      event.tags.some((tag) => tag.toLowerCase().includes(query));
    const matchesGenre =
      selectedGenres.length === 0 || selectedGenres.includes(event.genre);
    return isFavorited || (matchesSearch && matchesGenre);
  });

  return (
    <div className="mt-8">
      {/* Search Bar with Filter Icon */}
      <div className="relative mb-6">
        <div className="flex items-center gap-0">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or tag..."
              className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-md border border-primary/30 rounded-l-lg font-mono text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <div ref={filterRef} className="relative">
            <button
              onClick={() => setFilterOpen((prev) => !prev)}
              className={`relative px-3.5 py-2.5 border border-l-0 border-primary/30 rounded-r-lg transition-all cursor-pointer ${
                filterOpen || selectedGenres.length > 0
                  ? "bg-primary text-white"
                  : "bg-white/50 backdrop-blur-md text-slate-500 hover:bg-primary/10"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
              {selectedGenres.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary border-2 border-white rounded-full text-white text-[10px] font-mono font-bold flex items-center justify-center">
                  {selectedGenres.length}
                </span>
              )}
            </button>

            {/* Genre Filter Dropdown */}
            {filterOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 bg-white/80 backdrop-blur-md border border-primary/30 rounded-lg shadow-lg p-2">
                <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-primary/10">
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                    Genres
                  </span>
                  {selectedGenres.length > 0 && (
                    <button
                      onClick={() => setSelectedGenres([])}
                      className="font-mono text-xs text-primary hover:underline cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => toggleGenre(g)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left font-mono text-sm transition-colors cursor-pointer ${
                      selectedGenres.includes(g)
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedGenres.includes(g)
                          ? "border-primary bg-primary"
                          : "border-slate-300"
                      }`}
                    >
                      {selectedGenres.includes(g) && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      )}
                    </span>
                    {g}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active Genre Chips */}
      {selectedGenres.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedGenres.map((g) => (
            <button
              key={g}
              onClick={() => toggleGenre(g)}
              className="flex items-center gap-1 font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
            >
              {g}
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {filteredEvents.length === 0 ? (
        <p className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-md border border-primary/30 rounded font-mono text-sm text-slate-900">
          No events matched your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} isFavorite={favorites[event.id]} onToggleFavorite={() => toggleFavorite(event.id)} />
          ))}
        </div>
      )}
    </div>
  );
}
