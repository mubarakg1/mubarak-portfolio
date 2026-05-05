import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Projects from "./sections/Projects";
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
      
    </div>
  );
}

export default App;