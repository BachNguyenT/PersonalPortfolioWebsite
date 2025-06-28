import "./index.css";
import { React } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experiences from "./Components/Experiences/Experiences";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Connect from "./Components/Connect/Connect";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="App">
        <NavBar />
        <Element name="Home" className="min-h-screen">
          <Home />
        </Element>
        <Element name="About" className="min-h-screen">
          <About />
        </Element>
        <Element name="Skills" className="min-h-screen">
          <Skills />
        </Element>
        <Element name="Experiences" className="min-h-screen">
          <Experiences />
        </Element>
        <Element name="Contact" className="min-h-screen">
          <Contact />
        </Element>
        <Element name="Footer">
          <Footer />
        </Element>
        {/* <Connect /> */}
      </div>
    </div>
  );
};

export default App;
