import { useState, type ChangeEvent } from "react";
import type { AppView, TalentProfile } from "../types";


export const UseTalentProfile = () => {
    const [profile, setProfile] = useState<TalentProfile>({
        fullName: "",
        email: "",
        primarySkill: "",
        yearsOfExp: 0,
        description: "",
    });

    const [view, setView] = useState<AppView>("FORM")

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: name == 'yearsOfExp' ? Number(value) : value,
        }))
    };

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email);

    const isSenior = profile.yearsOfExp >= 5;
    const isFormValid = !!(profile.fullName && isEmailValid && profile.primarySkill);

    const handleSubmit = () => {
        if (isFormValid) setView("PROFILE")
    }

    const handleEdit = () => setView("FORM")


    return {
        profile,
        view,
        handleChange,
        handleSubmit,
        handleEdit,
        isSenior,
        isFormValid,
    }
}