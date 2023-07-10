import "./App.scss";
import { React, useRef, useEffect } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experiences from "./Components/Experiences/Experiences";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Connect from "./Components/Connect/Connect";

const App = () => {
  const ContactRef = useRef(null);

  const handleClick = () => {
    ContactRef.current?.scrollIntoView({behavior: 'smooth'});
    console.log("BA");
  };

  return (
    <div className="App-container">
      <div className="App">
        <NavBar handleClick={handleClick}/>
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Contact ref={ContactRef}/>
        <Footer />
        {/* <Connect /> */}
      </div>
    </div>
  );
};

export default App;
