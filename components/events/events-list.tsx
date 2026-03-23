"use client";
import {
  useState,
  useRef,
  useEffect,
  useSyncExternalStore,
  useCallback,
} from "react";
import { events, genres, genreColors } from "@/lib/data";
import { formatTime24To12, formatDescription } from "@/lib/utils"; // Adjusted import
import { FaRegStar, FaStar } from "react-icons/fa";
import {
  BsSearch,
  BsFilter,
  BsCheckLg,
  BsChevronDown,
  BsX,
} from "react-icons/bs";
import type { Event } from "@/lib/data";

// --- Favorites Store Logic ---
const FAVORITES_KEY = "favorites";
const defaultFavorites: Record<number, boolean> = {};
let listeners: Array<() => void> = [];
let cachedRaw: string | null = null;
let cachedParsed: Record<number, boolean> = defaultFavorites;

function emitChange() {
  cachedRaw = null;
  for (const listener of listeners) listener();
}
function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
function getSnapshot(): Record<number, boolean> {
  const stored = localStorage.getItem(FAVORITES_KEY);
  if (stored === cachedRaw) return cachedParsed;
  cachedRaw = stored;
  cachedParsed = stored ? JSON.parse(stored) : defaultFavorites;
  return cachedParsed;
}
function getServerSnapshot(): Record<number, boolean> {
  return defaultFavorites;
}

function useFavorites() {
  const favorites = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggleFavorite = useCallback((id: number) => {
    const current = getSnapshot();
    const next = { ...current, [id]: !current[id] };
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    emitChange();
  }, []);
  return { favorites, toggleFavorite };
}

function EventCard({
  event,
  isFavorite,
  onToggleFavorite,
}: {
  event: Event;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDescription = event.description !== "";

  return (
    <div
      onClick={() => hasDescription && setIsExpanded(!isExpanded)}
      className={`bg-surface backdrop-blur-md border border-secondary/30 p-4 rounded-xl relative overflow-hidden shadow-sm transition-all duration-300 group ${hasDescription ? "cursor-pointer hover:shadow-secondary/20" : ""}`}
    >
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-xl" />

      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary text-background font-mono font-semibold text-xs px-3 py-1 rounded-md">
          {formatTime24To12(event.startTime)} -{" "}
          {formatTime24To12(event.endTime)}
        </div>
        <div className="bg-secondary/10 text-secondary font-mono text-xs px-2 py-1 rounded-md">
          {event.room.name}
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col mb-2 pr-4">
          <h3 className="font-sans font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <span className="font-sans text-sm text-secondary mt-0.5">
            By: {event.host}
          </span>
        </div>
        <button
          className="mt-1"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        >
          {isFavorite ? (
            <FaStar className="text-accent text-lg drop-shadow-sm" />
          ) : (
            <FaRegStar className="text-secondary opacity-50 hover:opacity-100 hover:text-accent transition-all" />
          )}
        </button>
      </div>

      <div className="relative mb-2 flex justify-between items-center">
        <div className="flex items-center gap-1.5 font-mono text-xs text-secondary uppercase tracking-wider">
          <span
            className={`w-2.5 h-2.5 rounded-sm shrink-0 ${genreColors[event.genre]?.bg ?? "bg-primary"}`}
          />
          {event.genre}
        </div>
        {hasDescription && (
          <BsChevronDown
            className={`text-secondary transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {isExpanded && hasDescription && (
        <div className="text-sm text-foreground opacity-90 leading-relaxed mt-3 pt-3 border-t border-secondary/20 whitespace-pre-wrap">
          {formatDescription(event.description)}
        </div>
      )}
    </div>
  );
}

export default function EventsList() {
  const { favorites, toggleFavorite } = useFavorites();
  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFilterOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node))
        setIsFilterOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isFilterOpen]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const filteredEvents = events
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .filter((event) => {
      const query = search.toLowerCase();
      const isFavorited = favorites[event.id];
      const matchesSearch = !query || event.title.toLowerCase().includes(query)
        || event.genre.toLowerCase().includes(query);
      const matchesGenre =
        selectedGenres.length === 0 || selectedGenres.includes(event.genre);
      return isFavorited || (matchesSearch && matchesGenre);
    });

  return (
    <div className="mt-4">
      {/* Search & Filter Bar */}
      <div className="relative mb-6 flex items-center">
        <div className="relative flex-1">
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary opacity-60" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2.5 bg-surface backdrop-blur-md border border-secondary/30 rounded-l-xl font-mono text-sm text-foreground themed-placeholder focus:outline-none focus:border-primary transition-all"
          />
        </div>

        {/* Filter Dropdown */}
        <div ref={filterRef} className="relative h-full">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`relative px-4 py-2.5 border border-l-0 border-secondary/30 rounded-r-xl transition-all flex items-center gap-2 h-full ${
              isFilterOpen || selectedGenres.length > 0
                ? "bg-primary text-background"
                : "bg-surface text-secondary hover:bg-secondary/10"
            }`}
          >
            <BsFilter className="text-lg" />
            {selectedGenres.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent border-2 border-background rounded-full text-background text-[10px] font-bold flex items-center justify-center">
                {selectedGenres.length}
              </span>
            )}
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-secondary/30 rounded-xl shadow-lg shadow-secondary/10 p-2">
              <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-secondary/20">
                <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                  Genres
                </span>
                {selectedGenres.length > 0 && (
                  <button
                    onClick={() => setSelectedGenres([])}
                    className="font-mono text-xs text-primary hover:text-accent transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              {genres.map((g) => {
                const isSelected = selectedGenres.includes(g);
                return (
                  <button
                    key={g}
                    onClick={() => toggleGenre(g)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left font-mono text-sm transition-colors ${
                      isSelected
                        ? "bg-primary/10 text-primary"
                        : "text-foreground opacity-80 hover:opacity-100 hover:bg-secondary/10"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "border-primary bg-primary"
                          : "border-secondary/50"
                      }`}
                    >
                      {isSelected && (
                        <BsCheckLg className="text-background text-[10px]" />
                      )}
                    </div>
                    {g}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {selectedGenres.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedGenres.map((g) => (
            <button
              key={g}
              onClick={() => toggleGenre(g)}
              className="flex items-center gap-1 font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 hover:text-accent transition-colors"
            >
              {g} <BsX className="text-sm" />
            </button>
          ))}
        </div>
      )}

      {/* Results Grid */}
      {filteredEvents.length === 0 ? (
        <p className="w-full p-4 bg-surface border border-secondary/30 rounded-xl font-mono text-sm text-secondary text-center">
          No events matched your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isFavorite={!!favorites[event.id]}
              onToggleFavorite={() => toggleFavorite(event.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
