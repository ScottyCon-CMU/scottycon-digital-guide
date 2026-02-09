import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="">
      <SignedOut>
        <section className="flex flex-col items-center justify-center gap-6 text-center min-h-screen px-6">
          <div className="md:col-span-7 bg-white/50 backdrop-blur-md border border-primary/30 p-4 rounded-lg relative overflow-hidden shadow-sm w-full">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />

            <div className="flex items-center justify-between mb-4 border-b border-primary/20 pb-2">
              <h3 className="font-mono text-sm uppercase tracking-widest text-slate-700">
                {"// Raffle"}
              </h3>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-secondary-dark" />
              </div>
            </div>

            <div className="h-fit overflow-y-auto pr-2 space-y-4">
              <div className="flex flex-col items-start">
                <p className="font-bold text-sm text-slate-700 group-hover:text-primary transition-colors">
                  Signing In
                </p>
                <p className="font-mono text-xs text-slate-600 leading-relaxed text-left">
                  Our raffle system uses digital tickets linked to your account!
                  Please sign in to view your tickets and enter raffles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SignedOut>
      <SignedIn>
        <section className="flex flex-col items-center justify-center gap-6 text-center min-h-screen px-6">
            <div className="md:col-span-7 bg-white/50 backdrop-blur-md border border-primary/30 p-4 rounded-lg relative overflow-hidden shadow-sm w-full">
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="flex items-center justify-between mb-4 border-b border-primary/20 pb-2">
                <h3 className="font-mono text-sm uppercase tracking-widest text-slate-700">
                  {"// Raffle"}
                </h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-secondary-dark" />
                </div>
              </div>
              <div className="h-fit overflow-y-auto pr-2 space-y-4">
                <div className="flex flex-col items-start">
                  <p className="font-bold text-sm text-slate-700 group-hover:text-primary transition-colors">
                    Work In Progress
                  </p>
                  <p className="font-mono text-xs text-slate-600 leading-relaxed text-left">
                    {"/// CURRENTLY_DEVELOPING ///"}
                  </p>
                </div>
              </div>
            </div>
        </section>
      </SignedIn>
    </main>
  );
}
