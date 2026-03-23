import Image from "next/image";
import { sponsors, members } from "@/lib/data";

export default function SponsorsSection() {
  return (
    <section className="relative mt-8 flex flex-col px-6 pb-32">
      {/* Sponsors Section */}
      <div className="mt-12 mb-8">
        <h2 className="font-sans font-bold text-4xl text-foreground/80 mb-4">
          Our Sponsors
        </h2>
        <div className="h-1 w-24 bg-primary" />
      </div>

      <div className="space-y-4">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex flex-row items-center rounded-lg bg-surface backdrop-blur-md border border-l-12 border-primary p-4 shadow-sm transition hover:shadow-lg"
          >
            {/* Left side - Text */}
            <div className="flex-1 pr-6">
              <h3 className="font-sans font-bold text-2xl text-foreground/80 mb-2">
                {sponsor.name}
              </h3>
              <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                {sponsor.description}
              </p>
            </div>

            {/* Right side - Logo */}
            <div className="shrink-0">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={168}
                height={168}
                className="object-contain rounded-md"
              />
            </div>
          </div>
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
            href="https://www.cmu.edu/"
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
              className="flex justify-between items-center"
            >
              <p className="font-sans text-lg text-foreground/80 leading-relaxed w-1/2 text-right pr-4">
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
