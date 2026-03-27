"use client"

import Image from "next/image";
import { useState } from "react";
import { sponsors, members } from "@/lib/data";

function SponsorCard({ sponsor }: { sponsor: typeof sponsors[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-surface backdrop-blur-md border border-l-12 border-primary shadow-sm transition hover:shadow-lg overflow-hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex flex-row items-center p-4 gap-4 text-left"
      >
        <h3 className="flex-1 font-sans font-bold text-2xl text-foreground/80">
          {sponsor.name}
        </h3>

        {!isOpen && (
          <div className="shrink-0">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={128}
              height={128}
              className="object-contain rounded-md"
            />
          </div>
        )}

        <svg
          className={`shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-4 pb-4">
          <p className="font-mono text-sm text-foreground/70 leading-relaxed mt-2">
            {sponsor.description}
          </p>
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-foreground/90 underline leading-relaxed hover:text-primary/70"
          >
            {sponsor.website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SponsorsSection() {
  return (
    <section className="relative mt-8 flex flex-col px-6 pb-32">
      <div className="mt-12 mb-8">
        <h2 className="font-sans font-bold text-4xl text-foreground/80 mb-4">
          Our Sponsors
        </h2>
        <div className="h-1 w-24 bg-primary" />
      </div>

      <div className="space-y-3">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>

      {/* Section Header */}
      <div className="mt-12 mb-8">
        <h2 className="font-sans font-bold text-4xl text-foreground/80 mb-4">
          Interest Board
        </h2>
        <div className="h-1 w-24 bg-primary" />
      </div>

      {/* Interest Board Card */}
      <div className="rounded-lg bg-surface backdrop-blur-md border border-primary p-4 shadow-sm transition hover:shadow-lg">
        <p className="font-sans font-bold text-2xl text-foreground/80 mb-2">
          ALL A-BOARD!
        </p>

        <p className="font-mono font-bold text-sm text-foreground/70 leading-relaxed mb-4">
          Like what you see at ScottyCon and interested in making it better?
        </p>

        <p className="font-mono text-sm text-foreground/70 leading-relaxed mb-4">
          Apply to be a ScottyCon Officer or general board member! Please fill
          out the Google form below. We will contact board members in April.
        </p>

        <div className="flex justify-center">
          <a
            href="https://forms.gle/i2wdPHw1DPqv3Y799"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary hover:bg-primary/90 text-white font-mono font-semibold text-lg px-6 py-3 rounded-md transition-all shadow-sm hover:shadow-md">
              SIGN UP
            </button>
          </a>
        </div>
      </div>

      {/* Club Members */}
      <div className="mt-12 mb-8">
        <h2 className="font-sans font-bold text-4xl text-foreground/80 mb-4">
          Club Members
        </h2>
        <div className="h-1 w-24 bg-primary" />
      </div>

      <div className="space-y-4">
        <div className="rounded-lg bg-surface backdrop-blur-md border border-primary p-8 shadow-sm transition hover:shadow-lg">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex justify-between items-center py-1"
            >
              <p className="font-sans text-lg text-foreground font-bold leading-relaxed w-1/2 text-right pr-4">
                {member.name}
              </p>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed w-1/2 text-left pl-4">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}