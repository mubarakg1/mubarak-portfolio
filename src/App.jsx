import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
// src\components\Cursor.jsx


function App() {
  return (
    <div className="relative min-h-screen bg-primary text-white ">

      <Cursor/>
      <ParticleBackground/>
      <Navbar/>

  
      <Hero/>

      
    </div>
  );
}

export default App;