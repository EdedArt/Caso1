import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 56,
  className = "",
  priority = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Crust Pizza Co. Logo"
      role="img"
    >
      <Image
        src="/images/crust-logo.png"
        alt="Crust Pizza Co. Circular Stamp Logo"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain select-none"
      />
    </div>
  );
};
