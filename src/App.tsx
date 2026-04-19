import { TalentForm } from "./components/profile/TalentForm";
import { ProfileCard } from "./components/profile/ProfileCard"; 
import { UseTalentProfile } from "./hook/useTalentProfile";

function App() {
  const { profile, handleChange, handleSubmit, handleEdit, isSenior, isFormValid, view } = UseTalentProfile();

  return (
    <main className="min-h-screen bg-ground flex items-center justify-center p-6">
      {view === "FORM" ? (
        <TalentForm
          profile={profile}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isValid={isFormValid}
        />
      ) : (
        <ProfileCard 
            profile={profile} 
            isSenior={isSenior} 
            onEdit={handleEdit} 
        />
      )}
    </main>
  );
}

export default App;
