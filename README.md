# 🌟 Talent Profile Application

A sleek, modern web application that allows users to create and preview their professional talent profiles in real-time.

## 🚀 Live Demo
**View the live site:** [https://talent-profile-two.vercel.app/](https://talent-profile-two.vercel.app/)

## 🛠 Tech Stack
- **React 19**: Utilizing modern functional components and hooks.
- **TypeScript**: Ensuring strict type safety and reducing runtime errors.
- **Tailwind CSS v4**: High-performance, utility-first styling.
- **Vite**: Ultra-fast build tool and development server.

## ✨ Key Features
- **Separation of Concerns**: Business logic is isolated in a custom hook.
- **Responsive Design**: Fully optimized for mobile and desktop screens.
- **Validation**: Automatic email validation and "Senior" experience badging.
- **Smooth UX**: Instant switching between Form and Profile views with zero reload.

## 📦 Getting Started

### 1. Clone & Setup
```bash
# Clone the repository to your local machine
git clone https://github.com/jabez-abija2399/talent-profile

# Navigate into the project folder
cd talent-profile 

# Install all dependencies (react, tailwind, etc.)
npm install 

# Starts the Vite dev server
npm run dev

## 📂 Project Structure
To keep the UI "pure" and the logic "reusable," I organized the project as follows:

- `src/hook/`: 🧠 Contains `useTalentProfile.ts` (all state & logic).
- `src/components/profile/`: 🎨 Contains the main page views (`TalentForm`, `ProfileCard`).
- `src/components/ui/`: 🧩 Contains reusable primitives (`Button`, `Input`).
- `src/types.ts`: 🏷 Provides type safety for the user data.

