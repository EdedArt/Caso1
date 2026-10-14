import React from "react";
import { Clock, Flame, UtensilsCrossed, Timer, Truck, Heart } from "lucide-react";

export type FeatureIconType = "clock" | "flame" | "chef" | "timer" | "truck" | "heart";

interface FeatureIconProps {
  label: string;
  iconName: FeatureIconType;
  className?: string;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({
  label,
  iconName,
  className = "",
}) => {
  const renderIcon = () => {
    const iconProps = {
      className: "w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]",
      "aria-hidden": true,
    };

    switch (iconName) {
      case "clock":
        return <Clock {...iconProps} />;
      case "flame":
        return <Flame {...iconProps} />;
      case "chef":
        return <UtensilsCrossed {...iconProps} />;
      case "timer":
        return <Timer {...iconProps} />;
      case "truck":
        return <Truck {...iconProps} />;
      case "heart":
        return <Heart {...iconProps} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-1.5 text-center ${className}`}>
      <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[var(--color-brand)] flex items-center justify-center shadow-sm transition-transform duration-150 hover:scale-105">
        {renderIcon()}
      </div>
      <span className="font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-normal text-[var(--color-ink)] leading-tight max-w-[80px]">
        {label}
      </span>
    </div>
  );
};
