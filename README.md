# Learning Path Recommendation System - Frontend

A premium, interactive frontend for the Learning Path Recommendation System. This application visualizes AI-generated learning curriculums as 3D Directed Acyclic Graphs (DAGs) and assesses user skills dynamically using Item Response Theory (IRT) mechanics. 

Built with a minimalist, Squarespace-inspired aesthetic to prioritize clarity, performance, and a "Rapid Time-to-Value" user experience.

---

## 🚀 Key Features

* **3D Interactive DAGs:** Learning paths are rendered in an interactive 3D space using React Three Fiber. Nodes feature dynamic activity heatmaps and adapt to the user's progress.
* **Explainable AI Tutor:** Clicking any node opens a detail drawer revealing exactly *why* it was recommended, complete with confidence scores, retrieved context citations, and code snippet previews.
* **Adaptive Profiling:** Replaces static forms with keyboard-navigable IRT (Item Response Theory) checkpoint quizzes to accurately baseline a user's skill vector.
* **Aura Gamification & Career Mapping:** Users earn mathematically weighted "Aura" points. Upon path completion, a celebratory modal maps their mastered skills directly against real-world enterprise hiring requirements (e.g., JPMorgan Chase 2028).
* **Demo Safety Nets (Armor):** Built-in developer shortcuts to prevent live-demo crashes, including an X-Ray debug panel and instant dummy-data injection.

---

## 🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (v4)
* **3D Rendering:** Three.js / React Three Fiber / Drei
* **State Management:** Zustand
* **Authentication:** Clerk

---

## 💻 Local Setup Instructions

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine. You will also need a free account at [Clerk](https://clerk.com/) for authentication API keys.

### 2. Installation
Clone the repository and navigate into the frontend directory:
```bash
git clone <your-repo-url>
cd frontend
Install the dependencies:

Bash
npm install
3. Environment Variables
Create a .env.local file in the root of the frontend directory (next to package.json) and add your Clerk API keys:

Code snippet
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
4. Run the Development Server
Start the Next.js server:

Bash
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.

📁 Project Structure
/src/app - Next.js routing, layouts, and Server Components (Dashboard, Intake, Authentication).

/src/components/graph - 3D visualizers (AmbientGraph3D.tsx, InteractiveDAG.tsx) and the RAG Explainability UI (NodeDrawer.tsx).

/src/components/landing - Unauthenticated Squarespace-style hero section and tabbed feature showcases.

/src/components/ui - Modals, dev tools, and standard UI elements.

/src/lib/store.ts - Zustand global state managing the user's skill vector, node states, and Aura ledger.

🛡 Developer Tools (Live Demo Shortcuts)
To assist with hackathon presentations, this frontend includes hidden keyboard shortcuts to manage state dynamically on stage:

Ctrl + Shift + X (X-Ray Debug Panel): Toggles a hidden UI overlay showing the raw global theta estimates, skill vectors, and Aura event ledger updating in real-time.

Ctrl + Shift + D (Demo Safety Net): Instantly injects a perfect, pre-populated dummy user profile into the Zustand store. Use this if the backend API timeouts or network connectivity drops during a live demo.