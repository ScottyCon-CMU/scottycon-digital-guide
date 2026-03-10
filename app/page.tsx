import HeroSection from "@/components/home/hero-section";
import UpcomingEvents from "@/components/home/upcoming-events";

export default function Home() {
  return (
    <main className="pb-16">
      <HeroSection />
      <UpcomingEvents />
    </main>
  );
}
