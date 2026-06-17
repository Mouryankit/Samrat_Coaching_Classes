# Samrat Coaching Classes

A modern, highly responsive web application built for **Samrat Coaching Classes** (MG Road, Mumbai). It highlights tuition programs from Class 1st to 12th, featuring academic performance highlights, board toppers lists, interactive course carousels, and bento-grid strengths.

---

## 🚀 Key Features

* **Glassmorphic Hero Section**: Includes dynamic statistics counters, an interactive typewriter text display, and infinite student marquee sliders.
* **Component-Based Architecture**: Fully refactored and modular component design (Navbar, Hero, About, Course, Features, Results, Contact, Footer).
* **Centralized Data Layer**: All text content, lists, topper records, and grid highlights are centralized inside the `src/data/` folder, separating structure from styling.
* **Responsive Layouts**: Designed to be responsive, scaling beautifully from mobile layouts to 4K displays.
* **Smooth Animations**: Tailored micro-interactions and scroll-triggered fade-ins.

---

## 🛠️ Technology Stack

* **Core**: React 19 + Vite
* **Styling**: Modern CSS (Variables, Grid, Flexbox, Animations)
* **Icons**: `react-icons` (FontAwesome / Feather)

---

## 📦 Project Directory Structure

```text
samrat-coaching-classes/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, logos, and preview thumbnails
│   ├── components/         # Modular React components
│   │   ├── About/          # About storytelling & video block
│   │   ├── Contact/        # Contact form, details, and map mockup
│   │   ├── Course/         # Programs carousels & course cards
│   │   ├── Features/       # Strength bento grid
│   │   ├── Footer/         # Footer with newsletter and quick links
│   │   ├── Hero/           # Dynamic hero section & counters
│   │   ├── Navbar/         # Collapsible, sticky navigation header
│   │   └── Results/        # Wall of Fame toppers & results modals
│   ├── data/               # Centralized data files
│   │   ├── aboutData.js    # Legacy highlights data
│   │   ├── contactData.js  # Phone/Email/Address contact details
│   │   ├── courseData.js   # Class 1-12 tuition programs info
│   │   ├── featuresData.js # Strengths grid icons & texts
│   │   ├── heroData.js     # Hero statistics and highlight banners
│   │   ├── navigationData.js # Shared navbar & footer links
│   │   └── resultsData.js  # Board stats & toppers list
│   ├── styles/             # Global variables & base layout rules
│   ├── App.css             # Main styling rules
│   ├── App.jsx             # Main section routing wrapper
│   ├── index.css           # Global typography and base CSS
│   └── main.jsx            # React client entrypoint
├── .env                    # Local environment variables configuration
├── .env.example            # Environment variables template
├── index.html              # HTML shell template
└── vite.config.js          # Vite configuration
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 2. Clone and Install Dependencies
```bash
# Navigate to the project directory
cd "samrat coaching classes"

# Install all package dependencies
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to create a `.env` file and customize the variables if needed:
```bash
cp .env.example .env
```

The available options are:
* `VITE_APP_TITLE`: Custom HTML title for the app.
* `VITE_APP_DESCRIPTION`: Description used for SEO metas.
* `VITE_PORT`: Custom port to run the development server.
* `VITE_API_URL`: Target backend endpoint.

### 4. Run Development Server
```bash
npm run dev
```
By default, the server will launch and be accessible at `http://localhost:5173/` (or the configured `VITE_PORT`).

### 5. Build for Production
To generate a production-ready bundle (assets minimized and hashes applied):
```bash
npm run build
```
The output will be generated inside the `dist/` directory.
