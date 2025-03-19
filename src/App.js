import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
