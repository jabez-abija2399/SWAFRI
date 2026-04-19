import type { ButtonHTMLAttributes } from "react";

export interface TalentProfile {
    fullName: string;
    email: string;
    primarySkill: string;
    yearsOfExp: number;
    description: string;
    
}

export type AppView = "FORM" | "PROFILE";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>   {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
}