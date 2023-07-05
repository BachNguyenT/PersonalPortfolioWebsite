import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experiences from "./Components/Experiences/Experiences";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Connect from "./Components/Connect/Connect";

const App = () => {
  return (
    <div className="App-container">
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Contact />
        <Footer />
        <Connect />
      </div>
    </div>
  );
};

export default App;
