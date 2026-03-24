import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-display font-bold rounded-xl transition-all duration-300 group";
    
    const variants = {
      primary: "text-background bg-neon-cyan hover:bg-white neon-glow",
      secondary: "text-white bg-neon-purple hover:bg-neon-purple/80 shadow-[0_0_20px_-5px_rgba(176,38,255,0.5)] hover:shadow-[0_0_30px_-2px_rgba(176,38,255,0.8)]",
      outline: "text-neon-cyan border-2 border-neon-cyan/50 hover:border-neon-cyan bg-transparent hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.3)]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20" />
        )}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
