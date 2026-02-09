import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ScrollingFooter } from './components/ScrollingFooter';
import { References } from './components/References';
import MaestroMindProject from './pages/MaestroMindProject';
import DashboardFarmaciaProject from './pages/DashboardFarmaciaProject';
import RistoranteArgentinoProject from './pages/RistoranteArgentinoProject';
import AboutPage from './pages/AboutPage';
import { Footer } from './components/Footer';

function HomePage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);
  

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white custom-cursor flex flex-col">
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-6 h-6 border-2 border-black rounded-full transition-transform duration-150 ease-out" />
      </div>

      <Header onReferencesClick={() => setIsReferencesOpen(true)} />
      <main>
        <Hero />
        <Projects />
      </main>
      <ScrollingFooter />
      
      <References isOpen={isReferencesOpen} onClose={() => setIsReferencesOpen(false)} />

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-sono" element={<AboutPage />} />
        <Route path="/project/maestromind" element={<MaestroMindProject />} />
        <Route path="/project/dashboard-farmacia" element={<DashboardFarmaciaProject />} />
        <Route path="/project/ristorante-argentino" element={<RistoranteArgentinoProject />} />
      </Routes>
    </BrowserRouter>
  );
}