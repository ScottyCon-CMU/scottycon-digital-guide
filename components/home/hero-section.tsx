import { notices } from "@/lib/data";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Sponsor 2",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Sponsor 3",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sponsor 4",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sponsor 5",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Sponsor 6",
    logo: "/images/sponsorDefault.png",
    website: "https://www.google.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative mt-8 flex flex-col px-6 pb-32">
      {/* Title Block */}
      <div className="flex flex-col w-fit">
        <div className="flex items-center gap-3">
          <div className="bg-accent text-black text-xs px-2 py-0.5 rounded-sm w-32 text-center font-semibold">
            EST. 2019
          </div>
          <div className="h-px flex-1 bg-accent" />
        </div>

        <div className="flex items-baseline gap-4 mt-2">
          <h1 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-primary">
            SCOTTYCON
          </h1>
        </div>

        <h2 className="font-sans font-bold text-8xl md:text-9xl leading-none text-primary">
          2026
        </h2>
      </div>

      {/* Info Grid */}
      <div className="mt-[30vh] grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Notices Panel */}
        <div className="md:col-span-7 bg-surface backdrop-blur-md border border-secondary p-4 rounded-lg shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="uppercase tracking-widest text-secondary font-semibold">
              {"// Latest_Updates"}
            </h3>
          </div>

          <div className="pr-2 space-y-2">
            {notices.map((notice, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="text-xs font-extralight text-foreground">
                  <span className="text-sm font-semibold">{notice.title}</span>:{" "}
                  {notice.message}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location/Date Panel */}
        <div className="md:col-span-5 flex flex-col justify-start gap-4 text-right">
          <div className="border-r-2 border-secondary pr-4 py-1 transition-colors">
            <h3 className="text-md text-secondary mb-1">LOCATION</h3>
            <h4 className="font-semibold text-lg leading-tight text-foreground">
              Jared L. Cohon University Center
            </h4>
            <p className="font-extralight text-sm -mb-1 text-foreground">
              5032 Forbes Avenue
            </p>
            <p className="font-extralight text-sm text-foreground">
              Pittsburgh, PA 15213
            </p>
          </div>

          <div className="border-r-2 border-secondary pr-4 py-1 transition-colors">
            <h3 className="text-md text-secondary mb-1">DATE/TIME</h3>
            <h4 className="font-semibold text-lg leading-tight text-foreground">
              March 28, 2026
            </h4>
            <p className="font-extralight text-sm -mb-1 text-foreground">
              11:00 AM - 09:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mb-8">
        <h2 className="font-sans font-bold text-4xl text-slate-900 mb-2">
          Our Sponsors
        </h2>
        <div className="h-1 w-24 bg-secondary-dark" />
      </div>

      <div className="space-y-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={sponsor.name}
            className="flex flex-row items-center rounded-lg bg-surface backdrop-blur-md border border-l-12 border-secondary p-4 shadow-sm transition hover:shadow-lg"
          >
            {/* Left side - Text */}
            <div className="flex-1 pr-6">
              <h3 className="font-sans font-bold text-2xl text-slate-900 mb-2">
                {sponsor.name}
              </h3>
              <p className="font-mono text-sm text-slate-600 leading-relaxed">
                {sponsor.description}
              </p>
            </div>

            {/* Right side - Logo */}
            <div className="flex-shrink-0">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-42 h-42 object-contain rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Section Header */}
        <div className="mt-12 mb-8">
          <h2 className="font-sans font-bold text-4xl text-slate-900 mb-4">
            Interest Board
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>

        {/* Interest Board Card */}
        <div className="rounded-lg bg-surface backdrop-blur-md border border-secondary p-4 shadow-sm transition hover:shadow-lg">
          <p className="font-sans font-bold text-2xl text-slate-700 mb-2">
            ALL A-BOARD!
          </p>
          
          <p className="font-mono font-bold text-sm text-slate-600 leading-relaxed mb-4">
            Like what you see at ScottyCon and interested in making it better?
          </p>

          <p className="font-mono text-sm text-slate-600 leading-relaxed mb-4">
            Apply to be a ScottyCon Officer or general board member! Please fill
            out the Google form below. We will contact board members in April.
          </p>

          <div className="flex justify-center">
            <a href="https://www.cmu.edu/" target="_blank" rel="noopener noreferrer">
              <button className="bg-primary hover:bg-primary/90 text-white font-mono font-semibold text-lg px-6 py-3 rounded-md transition-all shadow-sm hover:shadow-md">
                SIGN UP
              </button>
            </a>
          </div>
        </div>
    </section>
  );
}
