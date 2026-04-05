import Navbar from './components/Navbar';
import Hero from './components/Hero'; // ✅ ADD THIS
import Skills from './components/Skills';
// import Tools from './components/Tools';
// import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary/30">
      <Navbar />
      <main className="space-y-12 pb-24">
        
        {/* ✅ HERO REPLACED HERE */}
        <Hero />

        {/* ❌ REMOVE THIS */}
        {/* <ProfileSpotlight /> */}

        <About />
        <Skills />
        {/* <Tools /> */}
        {/* <Projects /> */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}