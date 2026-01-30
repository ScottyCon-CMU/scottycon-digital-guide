import type { Metadata } from "next";
import { IBM_Plex_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
    <html lang="en">
      <body
        className={`${IBMPlexMono.variable} ${quicksand.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
          <Image
            src="/images/background.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <Image
            src="/images/background-overlay.png"
            alt="Background Overlay"
            fill
            className="object-cover"
          />
        </div>
        <div className="fixed top-0 left-0 w-screen h-screen bg-linear-to-b from-white via-black via-75% to-black opacity-50 -z-5" />
        {children}
      </body>
    </html>
  );
}
