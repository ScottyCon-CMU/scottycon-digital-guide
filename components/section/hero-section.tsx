import { notices } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative mt-[45vh] flex flex-col px-6 pb-32">
      {/* Title Block */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
            EST. 2019
          </div>
          <div className="h-px w-24 bg-slate-300" />
        </div>

        <div className="flex items-baseline gap-4 mt-2">
          <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter text-slate-900">
            SCOTTY<span className="text-primary">CON</span>
          </h1>
        </div>

        <h2 className="font-sans font-black text-8xl sm:text-[9rem] leading-none text-secondary-dark opacity-75 mix-blend-multiply">
          2026
        </h2>
      </div>

      {/* Info Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Notices Panel */}
        <div className="md:col-span-7 bg-white/50 backdrop-blur-md border border-primary/30 p-4 rounded-lg relative overflow-hidden shadow-sm">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

          <div className="flex items-center justify-between mb-4 border-b border-primary/20 pb-2">
            <h3 className="font-mono text-sm uppercase tracking-widest text-slate-700">
              {"// Latest_Updates"}
            </h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-secondary-dark" />
            </div>
          </div>

          <div className="h-40 overflow-y-auto pr-2 space-y-4">
            {notices.map((notice, index) => (
              <div key={index} className="flex gap-3 items-start group">
                <span className="font-mono text-xs text-primary pt-1">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-bold text-sm text-slate-700 group-hover:text-primary transition-colors">
                    {notice.title}
                  </p>
                  <p className="font-mono text-xs text-slate-600 leading-relaxed">
                    {notice.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location/Date Panel */}
        <div className="md:col-span-5 flex flex-col justify-start gap-4 text-right">
          <div className="border-r-2 border-secondary-dark pr-4 py-1">
            <p className="font-mono text-xs text-secondary-dark mb-1">
              LOCATION
            </p>
            <p className="font-mono font-semibold text-lg leading-tight text-slate-700">
              Jared L. Cohon University Center
              <br />
              <span className="text-sm font-normal text-slate-600">
                5032 Forbes Avenue
                <br />
                Pittsburgh, PA 15213
              </span>
            </p>
          </div>

          <div className="border-r-2 border-secondary-dark pr-4 py-1">
            <p className="font-mono text-xs text-secondary-dark mb-1">
              DATE/TIME
            </p>
            <p className="font-mono font-semibold text-lg text-slate-700">
              March 28, 2026
              <br />
              <span className="text-sm font-normal text-slate-600">
                11:00 AM - 09:00 PM
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
