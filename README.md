# ArcVion — Frontend (ArcV2.0)

> Modular Robotics Infrastructure — Web Platform

ArcVion is a robotics infrastructure website that showcases modular hardware systems, applied AI projects, and commercial inquiry workflows. It features a cinematic UI with animated transitions and a contact system powered by EmailJS and a custom REST backend.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 6](https://vitejs.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Animations | [Framer Motion](https://www.framer-motion.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Email | [EmailJS](https://www.emailjs.com/) (client-side email dispatch) |
| Backend API | Custom Express.js REST API (see `/backend`) |
| Dev Port | `3000` |

---

## 📁 Project Structure

```
ArcV2.0/
├── components/         # Reusable UI components (Navbar, Footer, Hero, etc.)
├── pages/              # Route-level pages
│   ├── HomePage.tsx
│   ├── ContactPage.tsx
│   ├── EngineeringPage.tsx
│   ├── ZarvexPage.tsx
│   ├── PranaPage.tsx
│   └── MorphPage.tsx
├── lib/                # Utility/helper modules
├── App.tsx             # Root app with routing + AnimatePresence
├── index.tsx           # Entry point
├── vite.config.ts      # Vite config (port 3000, path aliases)
└── .env                # Environment variables (see below)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root. Use `.env.example` as the template:

```env
# Backend API base URL
VITE_API_URL=https://your-backend-render-url.onrender.com

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

## 📬 Contact Form

The contact page (`/contact`) uses a **dual-notification system**:

1. **EmailJS** — sends an email notification directly from the browser using the configured service/template.
2. **Backend REST API** (`POST /api/contact`) — persists the submission to MongoDB via the Express backend.

For Render deployment, set `VITE_API_URL` on the frontend service to the deployed backend URL, for example:

```env
VITE_API_URL=https://arc-mz3x.onrender.com
```

Do not include `/api/contact` in `VITE_API_URL`; the frontend adds that path automatically.

---

## 🗺️ Routes

| Path | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/contact` | Contact | Public |
| `/about` | About | Public |
| `/engineering` | Engineering | Public |
| `/ecosystems/zarvex` | Zarvex | Public |
| `/ecosystems/prana` | Prana | Public |
| `/ecosystems/morph` | Morph | Public |
