import type { Metadata } from "next";
import { IBM_Plex_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const IBMPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "ScottyCon Digital Guide",
  description:
    "A digital guidebook for ScottyCon, a student-run anime & games convention hosted at Carnegie Mellon University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${IBMPlexMono.variable} ${quicksand.variable} antialiased bg-white text-slate-800 selection:bg-primary selection:text-white`}
        >
          {/* Background Image Layer */}
          <div className="fixed top-0 left-0 w-full h-full -z-20">
            <Image
              src="/images/background.png"
              alt="Background"
              fill
              className="object-cover "
              priority
            />
            <Image
              src="/images/background-overlay.png"
              alt="Background Overlay"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Dot Grid Overlay */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-grid-pattern" />

          {/* Gradient Fade */}
          <div className="fixed top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-secondary-light -z-5 pointer-events-none" />

          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
