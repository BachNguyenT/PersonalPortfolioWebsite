import "./index.css";
import { React } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Connect from "./Components/Connect/Connect";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="App relative z-10">
        <NavBar />
        <Element name="Home" className="min-h-screen">
          <Home />
        </Element>
        <Element name="About" className="min-h-screen bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm">
          <About />
        </Element>
        <Element name="Experiences" className="min-h-screen bg-gradient-to-br from-purple-50/50 to-blue-50/50 backdrop-blur-sm">
          <Experiences />
        </Element>
        <Element name="Skills" className="min-h-screen">
          <Skills />
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
