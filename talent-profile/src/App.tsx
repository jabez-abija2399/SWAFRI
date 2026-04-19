import { TalentForm } from "./components/profile/TalentForm";
import { UseTalentProfile } from "./hook/useTalentProfile";


function App() {

  const {profile, handleChange, handleSubmit, isFormValid, view} = UseTalentProfile();

  return (
    <main>

      {/* conditional rendering */}
      {view === "FORM" ? (
        <TalentForm
        profile={profile}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isValid={isFormValid}
        />
      ):(
        <div>
          <h1>Success!</h1>
          <p>Form logic is working/ Now we just need the profile car</p>

          <button
          onClick={() => window.location.reload()}
          className="mt-6 text-primary font-medium hover:underline"
          >
            Reset Form
          </button>
        </div>
      )}
    </main>

  )
}

export default App
