import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface BaseProps {
    label: string,
    error?: string,
    containerClassName?: string,
    multiline?: boolean,
}

type TextFieldProps = BaseProps & 
InputHTMLAttributes<HTMLInputElement> &
TextareaHTMLAttributes<HTMLTextAreaElement>

export const Input = ({
    label,
    error,
    className,
    containerClassName,
    id,
    multiline = false,
    ...props
}: TextFieldProps) => {

    const sharedClasses = cn(
    "px-4 py-2 bg-white border border-secondary-border rounded-lg outline-none w-full",
    "transition-all duration-200 placeholder:text-text-muted text-text-main",
    "focus:border-primary focus:ring-2 focus:ring-primary/10",
    error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
    className
  );

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

            {multiline ? (
                <textarea
                id={id}
                 aria-invalid={!!error}
                className={cn(
                    "min-h-[100px] resize-y", sharedClasses)}
                    {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ):(
            <input
                id={id}
                aria-invalid={!!error}
                className={sharedClasses}
                {...(props as InputHTMLAttributes<HTMLInputElement>)}
            />
            )}   

            {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
            )}

        </div>
    );
};