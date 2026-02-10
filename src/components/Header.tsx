import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router';
import { Linkedin, Mail, Phone } from 'lucide-react';
import logoKatia from '../assets/logo-katia.png';

interface HeaderProps {
  onReferencesClick: () => void;
  currentPage?: 'home' | 'about';
}

export function Header({ onReferencesClick, currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    const cvUrl = language === 'ita'
      ? '/cv-italiano.pdf'
      : '/cv-english.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `CV-Katia-Pasini-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 bg-white/95 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleHomeClick}
            className="hover:opacity-70 transition-opacity"
          >
            <img src={logoKatia} alt="Katia Pasini" className="h-10 w-auto" />
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

            {/* Icone social desktop */}
            <a
              href="https://www.linkedin.com/in/katia-pasini-3b51a2172/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:pasini.katia94@gmail.com"
              className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+393283024887"
              className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
            </a>
          </nav>

          {/* Burger — z-[200] così sta sempre sopra l'overlay */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[200]"
            aria-label="Menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-black block"
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-black block"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-black block"
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[150] md:hidden flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Pulsante X per chiudere */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-8 w-10 h-10 flex items-center justify-center text-3xl font-light"
              aria-label="Chiudi menu"
            >
              ✕
            </button>

            <nav className="flex flex-col items-center justify-center h-full gap-8 px-8">
              <motion.button
                onClick={handleAboutClick}
                className="text-4xl font-bold hover:scale-110 transition-transform"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Chi sono
              </motion.button>

              <motion.button
                onClick={handleReferencesClick}
                className="text-4xl font-bold hover:scale-110 transition-transform"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                Dicono di me
              </motion.button>

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

              {/* Icone social — LinkedIn e Mail */}
              <motion.div
                className="flex items-center gap-6 mt-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href="https://www.linkedin.com/in/katia-pasini-3b51a2172/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:pasini.katia94@gmail.com"
                  className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="tel:+393283024887"
                  className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-6 h-6" />
                </a>
              </motion.div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}