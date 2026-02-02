"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BsHouseFill,
  BsMapFill,
  BsTicketPerforatedFill,
  BsBrush,
  BsCalendarEventFill,
} from "react-icons/bs";

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/", icon: <BsHouseFill /> },
    { name: "EVENTS", href: "/events", icon: <BsCalendarEventFill /> },
    { name: "ARTISTS", href: "/artists", icon: <BsBrush /> },
    { name: "MAP", href: "/map", icon: <BsMapFill /> },
    { name: "RAFFLE", href: "/raffle", icon: <BsTicketPerforatedFill /> },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 w-full flex justify-center z-50 px-2">
      <nav className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 rounded-2xl p-1.5 flex gap-1 shadow-2xl overflow-x-auto max-w-full">
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
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "text-white/50 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span
                className={`font-mono text-xs font-bold tracking-wider hidden md:block ${isActive ? "block" : ""}`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
