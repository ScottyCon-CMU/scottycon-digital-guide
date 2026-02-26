"use client";

import { usePathname } from "next/navigation";
import { Calendar, House, Map, Palette, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Footer() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "HOME", href: "/", icon: <House size={20} /> },
    { name: "EVENTS", href: "/events", icon: <Calendar size={20} /> },
    { name: "ARTISTS", href: "/artists", icon: <Palette size={20} /> },
    { name: "MAP", href: "/map", icon: <Map size={20} /> },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 w-full flex justify-center z-50 px-2 pointer-events-none">
      <nav className="pointer-events-auto bg-surface backdrop-blur-xl border border-secondary/30 rounded-2xl p-1.5 flex items-stretch gap-1 shadow-lg shadow-accent/20 max-w-full transition-colors duration-300">
        {/* Nav Items */}
        <div className="flex overflow-x-auto gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-background"
                      : "text-secondary opacity-70 hover:opacity-100 hover:bg-secondary/10"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span
                  className={`font-mono text-xs font-bold tracking-wider hidden md:block ${
                    isActive ? "block" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px bg-secondary/30 my-2 mx-1 transition-colors duration-300" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative flex items-center justify-center px-4 py-3 rounded-xl opacity-70 hover:opacity-100 hover:bg-secondary/10 overflow-hidden transition-colors"
          aria-label="Toggle theme"
          suppressHydrationWarning
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform ease-in-out duration-300 dark:-rotate-90 dark:scale-0 text-secondary" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform ease-in-out duration-300 dark:rotate-0 dark:scale-100 text-secondary" />
        </button>
      </nav>
    </div>
  );
}
