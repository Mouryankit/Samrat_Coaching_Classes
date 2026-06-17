import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Course from "./components/Course/Course";
import Features from "./components/Features/Features";
import Results from "./components/Results/Results";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content" style={{}}>
        <Hero />
        <About />
        <Course />
        <Features />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}