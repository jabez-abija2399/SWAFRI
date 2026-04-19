import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>   {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
}

export const Button = ({
    className,
    variant = "primary",
    isLoading,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
        className={cn(
            "px-4 py-2.5 rounded-lg font-medium transition-all duration-200", 
            "active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
            "shadow-sm hover:shadow-md cursor-pointer",
            variant === "primary" && "bg-primary text-primary-text hover:bg-primary-hover",
            variant === "secondary" && "bg-secondary text-secondary-text border border-secondary-border hover:bg-secondary-hover",
            className
        )}
        {...props}
            >
            {isLoading ? "Loading..." : children}
        </button>
    )
}