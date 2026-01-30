import { notices } from "@/lib/data";
import { GiTwirlyFlower } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section className="mt-[50vh] flex flex-col px-4">
      {/* Title */}
      <div className="flex items-center gap-2 text-3xl pl-1">
        <GiTwirlyFlower className="align-bottom" />
        <h1 className="font-sans font-medium">SCOTTYCON</h1>
      </div>
      <h2 className="font-sans font-light text-9xl leading-24">2026</h2>

      {/* Notices & Info */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-2 pl-2 h-48 overflow-y-scroll">
          <div>
            <h3 className="font-mono font-medium italic">Notices</h3>
            <div className="w-full h-[1.5px] bg-white" />
          </div>
          {notices.map((notice, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="font-mono font-thin text-xs">
                <span className="font-medium">{notice.title}: </span>
                {notice.message}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col pt-4">
          <h3 className="font-mono font-light text-xs text-white/50 text-right">
            a student-run anime & games convention
          </h3>
          <h3 className="font-mono font-light text-xs text-white/50 text-right pt-8">
            March 28, 2026 @ CMU Cohon University Center
          </h3>
        </div>
      </div>
    </section>
  );
}
