import type { Metadata } from "next";
import Image from "next/image";
import { IBM_Plex_Mono, Quicksand } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${IBMPlexMono.className} ${quicksand.variable} antialiased bg-background text-foreground transition-colors duration-300 selection:bg-primary selection:text-white`}
      >
        <ThemeProvider defaultTheme="system" enableSystem>
          {/* Background Image Layer */}
          <div className="fixed inset-0 -z-30">
            <Image
              src="/images/background.png"
              alt="Background"
              fill
              className="object-cover"
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
          <div className="fixed inset-0 pointer-events-none -z-20 bg-grid-pattern" />

          {/* Gradient Fade */}
          <div className="fixed inset-0 bg-linear-to-b from-white to-[#D0EDFB] opacity-30 dark:from-neutral-100 dark:to-black dark:opacity-50 -z-10 pointer-events-none transition-colors duration-300" />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
