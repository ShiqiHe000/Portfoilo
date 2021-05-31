import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';
import Preload from './components/Preload';
import "./scss/main.scss";

function App() {
  return (
    <div className="container-fluid">
      {/* <Preload />  */}
      <ScrollButton /> 
      <Navbar /> 
      <LandingPage /> 
      <AboutMe /> 
      <Projects /> 
      <Contact /> 
    </div>
  );
}

export default App;
