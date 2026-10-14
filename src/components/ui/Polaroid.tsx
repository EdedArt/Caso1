import React from "react";
import Image from "next/image";
import { WashiTape } from "./WashiTape";

interface PolaroidProps {
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
  rotate?: string;
  className?: string;
  tapePosition?: "top-left" | "top-right" | "bottom-right" | "both";
  priority?: boolean;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  alt,
  width = 150,
  height = 160,
  rotate = "0deg",
  className = "",
  tapePosition,
  priority = false,
}) => {
  return (
    <div
      className={`relative inline-block bg-white p-2.5 pb-6 sm:p-3 sm:pb-8 rounded-[4px] shadow-[var(--shadow-polaroid)] select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      {/* Optional Washi Tape */}
      {tapePosition === "top-left" && (
        <WashiTape className="-top-3 -left-4" rotate="-15deg" width="60px" />
      )}
      {tapePosition === "top-right" && (
        <WashiTape className="-top-3 -right-4" rotate="18deg" width="60px" />
      )}
      {tapePosition === "bottom-right" && (
        <WashiTape className="-bottom-3 -right-4" rotate="-20deg" width="60px" />
      )}
      {tapePosition === "both" && (
        <>
          <WashiTape className="-top-3 -right-4" rotate="18deg" width="60px" />
          <WashiTape className="-bottom-3 -right-4" rotate="-15deg" width="60px" />
        </>
      )}

      {/* Photo Frame */}
      <div
        className="relative overflow-hidden bg-neutral-100"
        style={{ width, height }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 140px, 180px"
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
};
