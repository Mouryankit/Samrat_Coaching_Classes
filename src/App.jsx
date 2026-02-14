import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Course from "./components/Course/Course";
import Features from "./components/Features/Features";
import Results from "./components/Results/Results";
import Faculty from "./components/Faculty/Faculty";
import Testimomials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <hr></hr>
      <main className="main-content" style={{paddingTop: "70px"}}>
        <Hero />
        <hr></hr>
        <Course />
        <hr></hr>
        <Features />
        <Results />
        <Faculty />
        <Testimomials />
        <About />
        <Contact />
        <Footer />
      </main>
      <hr></hr>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}


// FIXED COLOR & CONSISTENCY RULE (Coaching Website)
// 🔢 The 60–30–10 Rule (Golden Rule)

// 60% → Background / base colors
// 30% → Primary color (blue)
// 10% → Accent color (CTA, highlights)
// Never break this 😄
// 🧱 1️⃣ Background Colors (Base – 60%)

// Used for: sections, page background, spacing

// Main Background:     #ffffff
// Secondary Background:#f8fafc
// Alternate Section:   #f1f5f9


// ✔ Clean
// ✔ Easy on eyes
// ✔ Content-focused
// 📌 Rule:

// Never use pure gray or dark background for all sections
// Alternate white & light-gray sections

// 🧭 2️⃣ Navbar Color (Primary Blue – 30%)
// Option A (Most Recommended)
// Navbar Background:  #1e3a8a (Dark Blue)
// Navbar Text:        #ffffff
// Navbar Hover:       #38bdf8
// Active Link:        #f59e0b


// ✔ Trustworthy
// ✔ Professional
// ✔ High contrast

// 📌 Rule:
// Navbar must be darker than page background

// 🎯 3️⃣ Accent Color (10% ONLY)

// Used for:
// CTA buttons
// Active navbar item
// Icons
// Stats numbers
// Highlights
// Primary Accent: #f59e0b (Orange)
// Hover Accent:   #d97706


// 🚨 Never use accent color as background of large sections
// 🟦 4️⃣ Secondary Color (Support Color)
// Used for:
// Success text
// Icons
// Stats
// Badges
// Secondary Green: #22c55e


// 📌 Rule:
// Green = success / growth only

// ✍️ 5️⃣ Text Color Rules (VERY IMPORTANT)
// Main Heading:   #0f172a
// Body Text:      #334155
// Muted Text:     #64748b
// White Text:     #ffffff


// 🚫 Never use pure black (#000000)
// 🚫 Never use light text on light background

// 🔘 6️⃣ Button Rules
// Primary Button (Most Important)
// Background: #f59e0b
// Text:       #ffffff
// Hover:      #d97706

// Secondary Button
// Background: transparent
// Border:     #2563eb
// Text:       #2563eb
// Hover BG:   #2563eb
// Hover Text: #ffffff


// 📌 Only ONE primary button style across site.

// 🧩 7️⃣ Card & Section Styling
// Card Background: #ffffff
// Border:          #e2e8f0
// Shadow:          soft (not heavy)
// Border Radius:   8–12px


// 📌 All cards must look same (courses, reviews, stats)

// ⭐ 8️⃣ Icon Color Rules
// Default Icons:   #2563eb
// Highlight Icons: #f59e0b
// Success Icons:   #22c55e


// 🚫 No random colors for icons

// 🧠 9️⃣ Typography Consistency
// Font Family: Roboto / Open Sans
// Headings:    font-weight 600–700
// Body Text:   font-weight 400


// 📌 Max 2 fonts only

// 📐 1️⃣0️⃣ Spacing & Layout Rule

// Same padding for all sections

// Same margin between headings & content

// Use grid / flex consistently

// 🎯 FINAL LOCKED COLOR PALETTE (COPY THIS)
// --blue-dark: #1e3a8a;
// --blue-main: #2563eb;
// --blue-light:#38bdf8;

// --accent:    #f59e0b;
// --accent-h:  #d97706;

// --green:     #22c55e;

// --bg-main:   #ffffff;
// --bg-light:  #f8fafc;
// --bg-alt:    #f1f5f9;

// --text-main: #0f172a;
// --text-body: #334155;
// --text-muted:#64748b;

// 🏆 If you follow this system:

// ✔ Your website will look professional
// ✔ Easy to maintain
// ✔ Easy to scale
// ✔ Impress clients/interviewers
// Next step options 👇
// 👉 Want me to apply this to a real navbar + hero section (HTML/React)?
// 👉 Or create a full coaching website layout structure?

// Just say the word 😄
// now i use react + npm technology to implement this project can you tell me what are the fields required for this project means i must include this in my website
// Perfect 👍 React + npm is a solid choice.
// Now let’s lock what you MUST include so your coaching website looks complete, professional, and conversion-focused, not like a half portfolio.

// Think of this as your frontend checklist ✅
// 🧩 MUST-HAVE FIELDS / SECTIONS (React Coaching Website)
// I’ll divide this into core (mandatory) and good-to-have (optional but powerful).
// 🔴 CORE SECTIONS (You should NOT skip these)
// 1️⃣ Navbar (Always Visible)

// Purpose: Navigation + branding

// Fields:
// Logo / Coaching Name
// Nav links:
// Home
// About
// Courses
// Results / Success
// Reviews
// Contact

// CTA Button → Enroll Now / Contact Us

// 📌 React Tip:
// Use NavLink (active state)
// Sticky navbar
// 2️⃣ Hero Section (Most Important Section)
// Purpose: First impression + conversio
// Fields:

// Main headline
// 👉 “Your Success Starts Here”
// Sub-headline
// 👉 “Expert coaching for school & competitive exams”
// Primary CTA button
// Secondary CTA (optional)
// Hero image / illustration
// 📌 Must answer in 5 seconds:
// What is this coaching & why should I care?

// 3️⃣ About Coaching

// Purpose: Build trust
// Fields:
// Short intro about coaching
// Mission / vision
// Years of experience
// Faculty expertise

// 📌 Keep it short (no essays)

// 4️⃣ Courses / Programs
// Purpose: What you are selling
// Fields per course (Card format):
// Course Name
// Class / Exam Type
// Duration
// Key subjects
// Enroll button

// 📌 Use map() in React (VERY IMPORTANT)

// 5️⃣ Why Choose Us (Core Benefits)
// Purpose: Differentiation
// Fields:
// Experienced faculty
// Small batch size
// Personal mentoring
// Doubt sessions
// Study material
// 📌 Use icons + short text

// 6️⃣ Success Stats / Achievements
// Purpose: Social proof
// Fields:
// Years of experience
// Students taught
// Selection percentage

// Top ranks
// 📌 Use number counters (optional animation)
// 7️⃣ Student Reviews / Testimonials
// Purpose: Trust & credibility
// Fields per review:
// Student name
// Course
// Feedback
// Rating (⭐)
// 📌 Cards + slider (optional)
// 8️⃣ Contact Section

// Purpose: Lead generation

// Fields:
// Phone number
// Email
// Address
// Contact form:
// Name
// Email
// Message
// CTA Button
// 📌 Frontend only → no backend needed

// 9️⃣ Footer

// Purpose: Completion & branding

// Fields:

// Coaching name + tagline
// Quick links
// Social media icons
// Copyright
// 🟡 GOOD-TO-HAVE SECTIONS (Add if time allows)
// 🔹 Faculty Section
// Teacher photo
// Name
// Subject
// Experience
// 🔹 FAQ Section
// Common student questions
// Accordion style
// 🔹 Gallery
// Classroom photos
// Events
// Results board
// 🔹 Call-To-Action Banner
// “Limited seats available”
// Button → Contact
// 🧠 React Component Structure (Clean & Professional)

// src/
//  ├── components/
//  │    ├── Navbar.jsx
//  │    ├── Hero.jsx
//  │    ├── About.jsx
//  │    ├── Courses.jsx
//  │    ├── Benefits.jsx
//  │    ├── Stats.jsx
//  │    ├── Testimonials.jsx
//  │    ├── Contact.jsx
//  │    └── Footer.jsx
//  ├── data/
//  │    ├── courses.js
//  │    ├── testimonials.js
//  │    └── stats.js
//  ├── App.jsx
//  └── index.css

// 📌 This structure = interview-ready 🔥
// 🎯 MINIMUM FEATURE CHECKLIST (Before Final Submission)
// ✅ Responsive design
// ✅ Consistent colors (your design system)
// ✅ Reusable components
// ✅ Map-based rendering
// ✅ Clean UI
// ✅ Smooth scroll
// ✅ Proper CTA placement