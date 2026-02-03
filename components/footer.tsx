"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BsHouseFill,
  BsMapFill,
  BsTicketPerforatedFill,
  BsCalendarEventFill,
} from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/", icon: <BsHouseFill /> },
    { name: "EVENTS", href: "/events", icon: <BsCalendarEventFill /> },
    {
      name: "ARTISTS",
      href: "/artists",
      icon: <AiFillShopping className="text-2xl" />,
    },
    { name: "MAP", href: "/map", icon: <BsMapFill /> },
    { name: "RAFFLE", href: "/raffle", icon: <BsTicketPerforatedFill /> },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 w-full flex justify-center z-50 px-2">
      <nav className="bg-white/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-1.5 flex gap-1 shadow-[0_4px_20px_rgba(243,154,202,0.2)] overflow-x-auto max-w-full">
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
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "text-slate-400 hover:text-primary hover:bg-primary-light/20"
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
