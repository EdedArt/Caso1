import React from "react";

export type ButtonVariant =
  | "primary"
  | "pill-nav"
  | "circle"
  | "square-action"
  | "outline"
  | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  className = "",
  children,
  ariaLabel,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-bold tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] cursor-pointer select-none";

  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles =
        "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] text-xs sm:text-sm px-6 sm:px-7 py-2 sm:py-2.5 rounded-full min-h-[44px] shadow-sm";
      break;
    case "pill-nav":
      variantStyles =
        "bg-[var(--color-brand)] text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-md min-h-[32px] sm:min-h-[36px]";
      break;
    case "circle":
      variantStyles =
        "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] w-8 h-8 sm:w-9 sm:h-9 rounded-full p-0 shadow-sm";
      break;
    case "square-action":
      variantStyles =
        "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] text-[11px] sm:text-xs rounded-xl px-3 py-3 h-14 sm:h-16 flex-col leading-tight text-center shadow-sm w-full";
      break;
    case "outline":
      variantStyles =
        "border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white text-xs sm:text-sm px-5 py-2 rounded-full min-h-[44px]";
      break;
    case "ghost":
      variantStyles =
        "text-[var(--color-ink)] hover:text-[var(--color-brand)] text-xs sm:text-sm px-2 py-1 min-h-[44px]";
      break;
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};
