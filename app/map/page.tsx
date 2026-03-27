import Image from "next/image";

export default function SponsorsSection() {
  return (
    <section className="relative mt-[5vh] flex flex-col px-6 pb-32">
      <div className="flex items-center gap-3">
        <div className="bg-primary text-background font-mono font-semibold text-xs px-2 py-0.5 rounded-sm">
          2026
        </div>
        <div className="h-px w-24 bg-secondary/30" />
      </div>
      <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tighter text-foreground mt-2 mb-5">
        Convention Map
      </h1>
    </section>
  );
}
