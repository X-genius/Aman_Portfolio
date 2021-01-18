import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/Contact Us/contactUs";
import AboutUs from "./components/About Us/aboutUs";
import Skills from "./components/Skills/skill";
import Projects from "./components/Projects/Project";
function App() {
  return (
    <div className = "wrapper">
    <Navbar />
    <AboutUs/>
    <Skills/>
    <Projects/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default App;
