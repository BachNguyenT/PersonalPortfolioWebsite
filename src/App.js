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
  const homeRef = useRef();

  // const getHome = () => {
  //   console.log(homeRef.current.offsetHeight)
  // }

  return (
    <div className="App-container">
      <div className="App">
        <NavBar />
        <Home ref={homeRef}/>
        <About />
        <Skills />
        <Experiences />
        <Contact />
        <Footer />
        {/* <Connect /> */}
      </div>
    </div>
  );
};

export default App;
