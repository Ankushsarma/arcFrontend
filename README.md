# ArcVion — Frontend (ArcV2.0)

> Modular Robotics Infrastructure — Web Platform

ArcVion is a futuristic robotics infrastructure platform that showcases distinct robotic ecosystems (Zarvex, Prana, Morph). It features a cinematic UI with animated transitions, Firebase-based authentication, and a fully integrated contact system powered by EmailJS and a custom REST backend.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 6](https://vitejs.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Animations | [Framer Motion](https://www.framer-motion.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Auth | [Firebase](https://firebase.google.com/) (Google Sign-In) |
| Email | [EmailJS](https://www.emailjs.com/) (client-side email dispatch) |
| Backend API | Custom Express.js REST API (see `/backend`) |
| Dev Port | `3000` |

---

## 📁 Project Structure

```
ArcV2.0/
├── components/         # Reusable UI components (Navbar, Footer, Hero, etc.)
├── context/            # AuthContext — Firebase auth state
├── pages/              # Route-level pages
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── ContactPage.tsx
│   ├── ZarvexPage.tsx  # 🔒 Protected
│   ├── PranaPage.tsx   # 🔒 Protected
│   └── MorphPage.tsx   # 🔒 Protected
├── lib/                # Utility/helper modules
├── App.tsx             # Root app with routing + AnimatePresence
├── index.tsx           # Entry point
├── vite.config.ts      # Vite config (port 3000, path aliases)
└── .env                # Environment variables (see below)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the `ArcV2.0/` root:

```env
# Backend API base URL
VITE_API_URL=https://arc-mz3x.onrender.com

# EmailJS — for client-side email dispatch on the contact form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> All client-side env vars must be prefixed with `VITE_` to be exposed by Vite.

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Install dependencies

```bash
cd ArcV2.0
npm install
```

### Run in development mode

```bash
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🔐 Authentication

- Uses **Firebase Google Sign-In** via `AuthContext`.
- Protected routes (`/ecosystems/zarvex`, `/ecosystems/prana`, `/ecosystems/morph`) are wrapped in `<ProtectedRoute>` — unauthenticated users are redirected to `/login`.

---

## 📬 Contact Form

The contact page (`/contact`) uses a **dual-notification system**:

1. **EmailJS** — sends an email notification directly from the browser using the configured service/template.
2. **Backend REST API** (`POST /api/contact`) — persists the submission to MongoDB via the Express backend.

---

## 🗺️ Routes

| Path | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/login` | Login | Public |
| `/contact` | Contact | Public |
| `/ecosystems/zarvex` | Zarvex | 🔒 Protected |
| `/ecosystems/prana` | Prana | 🔒 Protected |
| `/ecosystems/morph` | Morph | 🔒 Protected |
