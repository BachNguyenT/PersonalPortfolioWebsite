import "./App.scss";
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
    <div className="App-container">
      <div className="App">
        <NavBar />
        <Element name="Home" className="App__Element">
          <Home />
        </Element>
        <Element name="About" className="App__Element">
          <About />
        </Element>
        <Element name="Skills" className="App__Element">
          <Skills />
        </Element>
        <Element name="Experiences" className="App__Element">
          <Experiences />
        </Element>
        <Element name="Contact" className="App__Element">
          <Contact />
        </Element>
        <Element name="Footer" className="App__Element">
          <Footer />
        </Element>
        {/* <Connect /> */}
      </div>
    </div>
  );
};

export default App;
