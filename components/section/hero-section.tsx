import { notices } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative mt-[45vh] flex flex-col px-6 pb-32">
      {/* Title Block */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 text-black font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
            EST. 2019
          </div>
          <div className="h-px w-24 bg-white/50" />
        </div>

        <div className="flex items-baseline gap-4 mt-2">
          <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter">
            SCOTTY<span className="text-red-500">CON</span>
          </h1>
        </div>

        <h2 className="font-sans font-black text-8xl sm:text-[9rem] leading-none text-white opacity-75">
          2026
        </h2>
      </div>

      {/* Info Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Notices Panel */}
        <div className="md:col-span-7 bg-black/40 backdrop-blur-sm border border-white/20 p-4 rounded-lg relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 rounded-tr-lg" />

          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
            <h3 className="font-mono text-sm uppercase tracking-widest text-white/70">
              {"// Latest_Updates"}
            </h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="h-40 overflow-y-auto pr-2 space-y-4">
            {notices.map((notice, index) => (
              <div key={index} className="flex gap-3 items-start group">
                <span className="font-mono text-xs text-red-500 pt-1">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-bold text-sm text-white group-hover:text-red-400 transition-colors">
                    {notice.title}
                  </p>
                  <p className="font-mono text-xs text-white/60 leading-relaxed">
                    {notice.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location/Date Panel */}
        <div className="md:col-span-5 flex flex-col justify-start gap-4 text-right">
          <div className="border-r-2 border-red-500 pr-4 py-1">
            <p className="font-mono text-xs text-white/50 mb-1">LOCATION</p>
            <p className="font-mono font-semibold text-lg leading-tight">
              Cohon University Center
              <br />
              <span className="text-sm font-normal text-white/80">
                Carnegie Mellon University
              </span>
            </p>
          </div>

          <div className="border-r-2 border-white/50 pr-4 py-1">
            <p className="font-mono text-xs text-white/50 mb-1">DATE</p>
            <p className="font-mono font-semibold text-lg">March 28, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
