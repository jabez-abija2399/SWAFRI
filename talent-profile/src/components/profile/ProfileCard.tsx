import type { TalentProfile } from "../../types";

interface ProfileCardProps {
    profile: TalentProfile;
    isSenior: boolean;
    onEdit: () => void;
}

export const ProfileCard = ({ profile, isSenior, onEdit }: ProfileCardProps) => {
    return (
        <div className="bg-surface rounded-3xl shadow-2xl border border-secondary-border max-w-md w-full overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">


            <div className="h-32 bg-linear-to-r from-primary to-accent" />

            <div className="px-8 pb-8">

                <div className="relative -mt-12 mb-6">
                    <div className="w-24 h-24 bg-surface rounded-2xl border-4 border-surface shadow-xl flex items-center justify-center text-3xl font-bold text-primary">
                        {profile.fullName.charAt(0)}
                    </div>
                </div>

                {/* 3. User Info Section */}
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold text-text-main">{profile.fullName}</h2>

                        {isSenior && (
                            <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">
                                SENIOR
                            </span>
                        )}
                    </div>
                    <p className="text-primary font-medium">{profile.primarySkill}</p>
                    <p className="text-text-muted text-sm">{profile.email}</p>
                </div>

                {/* 4. Experience & Description */}
                <div className="mt-6 pt-6 border-t border-secondary-border">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-text-muted text-sm font-medium uppercase tracking-wider">Experience</span>
                        <span className="text-text-main font-bold">{profile.yearsOfExp} Years</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed italic">
                        "{profile.description}"
                    </p>
                </div>

                {/* 5. Action Button */}
                <button
                    onClick={onEdit}
                    className="mt-8 w-full py-3 rounded-xl border border-secondary-border text-secondary-text font-semibold hover:bg-secondary-hover transition-colors"
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
};
