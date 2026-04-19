import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    error?: string,
    containerClassName?: string,
}

export const Input = ({
    label,
    error,
    className,
    containerClassName,
    id,
    ...props
}: InputProps) => {
    return (
        <div className={cn("flex flex-col gap-1.5 w-full",
            containerClassName
        )}>

            <label
                htmlFor={id}
                className="text-sm font-medium text-text-main"
            >
                {label}
            </label>

            <input
                id={id}
                className={cn(
                    "px-4 py-2 bg-white border border-secondary-border rounded-lg outline-none",
                    "transition-all duration-200 placeholder:text-test-muted text-text-main",
                    "focus:border-primary focus:ring-2 focus:ring-primary/10",

                    error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
                    className
                )}
                {...props}
            />

            {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
            )}

        </div>
    );
};