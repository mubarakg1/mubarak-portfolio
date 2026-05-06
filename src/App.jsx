import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Projects from "./sections/Projects";
import Contact from './sections/Contact';
import Footer from './sections/Footer';
// src\components\Cursor.jsx


function App() {
  return (
    <div className="relative min-h-screen bg-primary text-white ">

      <Cursor/>
      {/* <ParticleBackground/> */}
      <Navbar/>

  
      <Hero/>
      <Stats/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;