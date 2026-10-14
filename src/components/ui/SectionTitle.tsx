import React from "react";

interface SectionTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "span";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  as: Component = "h2",
  size = "md",
  className = "",
  children,
  id,
}) => {
  const sizeClasses = {
    sm: "text-sm sm:text-base tracking-wider font-bold",
    md: "text-lg sm:text-xl md:text-2xl tracking-normal font-bold",
    lg: "text-2xl sm:text-3xl md:text-4xl tracking-tight font-bold leading-[1.08]",
    xl: "text-3xl sm:text-4xl md:text-5xl tracking-tight font-bold leading-[1.04]",
  };

  return (
    <Component
      id={id}
      className={`font-heading uppercase text-[var(--color-ink)] ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
};
