"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({
  src,
  alt,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (typeof document === "undefined") return null;
  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 lg:p-12"
      onClick={onClose}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-secondary hover:text-primary bg-surface border border-secondary/30 rounded-full p-2 transition-colors cursor-pointer shadow-lg"
        aria-label="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image Wrapper */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>,
    document.body,
  );
}
