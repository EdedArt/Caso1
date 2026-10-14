import React from "react";

interface WashiTapeProps {
  className?: string;
  rotate?: string; // e.g. "-12deg"
  width?: string; // e.g. "70px"
  height?: string; // e.g. "20px"
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  className = "",
  rotate = "-10deg",
  width = "75px",
  height = "22px",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 washi-tape ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotate})`,
        opacity: 0.82,
        clipPath:
          "polygon(0% 15%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 5% 98%, 0% 85%)",
      }}
    />
  );
};
