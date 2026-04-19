export interface TalentProfile {
    fullName: string;
    email: string;
    primarySkill: string;
    yearsOfExp: number;
    description: string;
    
}

export type AppView = "FORM" | "PROFILE";