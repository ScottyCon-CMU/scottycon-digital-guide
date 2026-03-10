import { notices } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative py-8 flex flex-col px-6">
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
      <div className="mt-[25vh] grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Notices Panel */}
        <div className="md:col-span-7 bg-surface backdrop-blur-md border border-secondary p-4 rounded-lg shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-4 border-b border-secondary/30 pb-2">
            <h3 className="font-mono text-sm uppercase tracking-widest text-secondary font-semibold">
              {"// Latest_Updates"}
            </h3>
          </div>

          <div className="h-40 overflow-y-auto pr-2 space-y-4">
            {notices.map((notice, index) => (
              <div key={index} className="flex gap-3 items-start group">
                <span className="font-mono text-xs text-accent pt-1 font-bold">
                  0{index + 1}
                </span>
                <div className="text-sm font-light text-foreground/90">
                  <span className="font-bold group-hover:text-primary">
                    {notice.title}:{" "}
                  </span>
                  <span>{notice.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location/Date Panel */}
        <div className="md:col-span-5 flex flex-col justify-end gap-6 text-right">
          <div className="border-r-2 border-secondary pr-4 py-1 transition-colors">
            <h3 className="font-mono text-xs text-secondary mb-1">LOCATION</h3>
            <h4 className="font-semibold text-lg leading-tight text-foreground">
              Jared L. Cohon University Center
            </h4>
            <p className="font-light text-sm text-foreground/80 mt-1">
              5032 Forbes Avenue
              <br />
              Pittsburgh, PA 15213
            </p>
          </div>

          <div className="border-r-2 border-secondary pr-4 py-1 transition-colors">
            <h3 className="font-mono text-xs text-secondary mb-1 uppercase tracking-wider">
              Date/Time
            </h3>
            <h4 className="font-semibold text-lg leading-tight text-foreground">
              March 28, 2026
            </h4>
            <p className="font-light text-sm text-foreground/80 mt-1">
              11:00 AM - 09:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
