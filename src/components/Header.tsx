import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router';

interface HeaderProps {
  onReferencesClick: () => void;
  currentPage?: 'home' | 'about';
}

export function Header({ onReferencesClick, currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleReferencesClick = () => {
    onReferencesClick();
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/chi-sono');
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleDownloadCV = (language: 'ita' | 'eng') => {
    // TODO: Replace with actual CV file paths
    const cvUrl = language === 'ita' 
      ? '/cv-katia-pasini-ita.pdf' 
      : '/cv-katia-pasini-eng.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `CV-Katia-Pasini-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-white/95 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo/Monogram */}
        <button 
          onClick={handleHomeClick}
          className="text-3xl font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          KP
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={handleAboutClick}
            className={`px-4 py-2 hover:opacity-60 transition-opacity duration-300 ${
              currentPage === 'about' ? 'underline' : ''
            }`}
          >
            Chi sono
          </button>

          <button 
            onClick={onReferencesClick}
            className="px-4 py-2 hover:opacity-60 transition-opacity duration-300"
          >
            Dicono di me
          </button>

          <button
            onClick={() => handleDownloadCV('ita')}
            className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            CV ITA
          </button>

          <button
            onClick={() => handleDownloadCV('eng')}
            className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            CV ENG
          </button>
        </nav>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
          aria-label="Menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {/* Chi sono */}
              <motion.button
                onClick={handleAboutClick}
                className="text-4xl font-bold hover:scale-110 transition-transform"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Chi sono
              </motion.button>

              {/* Dicono di me */}
              <motion.button
                onClick={handleReferencesClick}
                className="text-4xl font-bold hover:scale-110 transition-transform"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                Dicono di me
              </motion.button>

              {/* CV Buttons */}
              <motion.div
                className="flex flex-col gap-4 w-full max-w-xs mt-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => handleDownloadCV('ita')}
                  className="w-full px-6 py-4 text-2xl font-semibold border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Scarica CV ITA 🇮🇹
                </button>

                <button
                  onClick={() => handleDownloadCV('eng')}
                  className="w-full px-6 py-4 text-2xl font-semibold border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Scarica CV ENG 🇬🇧
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}