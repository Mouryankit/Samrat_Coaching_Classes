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