import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experiences from './Components/Experiences/Experiences';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
