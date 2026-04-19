import type { TalentProfile } from "../../types";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";


interface TalentFormProps {
    profile: TalentProfile;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    isValid: boolean;
}

export const TalentForm = ({
    profile,
    onChange,
    onSubmit,
    isValid
}: TalentFormProps) => {
    return (
        <div>

            {/* header Section */}
            <div>
                <h2>Create Talent Profile</h2>
                <p>Showcase your skills to the world</p>
            </div>

            {/* Teh form Grid */}
            <div>
                <Input
                    label="Full Name"
                    name="fullName"
                    id="fullName"
                    placeholder="e.g. Yabets kifle"
                    value={profile.fullName}
                    onChange={onChange}
                    required
                />

                <Input
                    label="Email Address"
                    name="email:"
                    id="email"
                    type="email"
                    placeholder="yabets@gmail.com"
                    value={profile.email}
                    onChange={onChange}
                    required
                />

                <Input
                    label="Primary Skill"
                    name="primarySkill"
                    id="primarySkill"
                    placeholder="e.g. Frontend Developer"
                    value={profile.primarySkill}
                    onChange={onChange}
                    required
                />

                <Input
                    label="Years of Experience"
                    name="yearsOfExp"
                    id="yearsOfExp"
                    type="number"
                    placeholder="0"
                    value={profile.yearsOfExp}
                    onChange={onChange}
                    required
                />

                <Input
                    label="Short Description"
                    name="description"
                    id="description"
                    multiline
                    placeholder="Tell us a bit about yourself...."
                    containerClassName="md:col-span-2"
                    value={profile.description}
                    onChange={onChange}
                />
            </div>

            {/* Action Section */}
            <div>
                <Button
                    onClick={onSubmit}
                    disabled={!isValid}
                    className="w-full md:w-auto"
                >
                    Create Profile
                </Button>
            </div>

        </div>
    )
}