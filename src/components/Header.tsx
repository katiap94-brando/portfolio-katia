import { Linkedin, Mail, ChevronDown, Download, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onReferencesClick: () => void;
}

export function Header({ onReferencesClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);

  const handleReferencesClick = () => {
    onReferencesClick();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] px-8 py-6 transition-colors ${isMenuOpen ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="text-3xl font-bold tracking-tight">KP</div>
          
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)} 
                className="flex items-center gap-2 px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                CV
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCvDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCvDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 0.2 }} 
                    className="absolute top-full mt-2 right-0 bg-white border border-black shadow-lg min-w-[160px]"
                  >
                    <a 
                      href="/cv-italiano.pdf" 
                      download 
                      className="block px-4 py-3 hover:bg-gray-100 transition-colors duration-200 text-sm font-medium" 
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      🇮🇹 Italiano
                    </a>
                    <a 
                      href="/cv-english.pdf" 
                      download 
                      className="block px-4 py-3 hover:bg-gray-100 transition-colors duration-200 text-sm font-medium border-t border-gray-200" 
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      🇬🇧 English
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={onReferencesClick} 
              className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              Dicono di me
            </button>
            
            <a 
              href="https://www.linkedin.com/in/katia-pasini-3b51a2172/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="mailto:tuaemail@gmail.com" 
              className="hover:scale-110 transition-transform duration-300" 
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center relative z-[110]" 
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-black block" />
                <span className="w-6 h-0.5 bg-black block" />
                <span className="w-6 h-0.5 bg-black block" />
              </div>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-[90] md:hidden flex items-center justify-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center justify-center gap-10 px-8 w-full max-w-md">
              <motion.button 
                onClick={handleReferencesClick} 
                className="text-4xl font-bold hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
              >
                Dicono di me
              </motion.button>

              <motion.div 
                className="flex flex-col gap-4 w-full" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
              >
                <a 
                  href="/cv-italiano.pdf" 
                  download 
                  onClick={() => setIsMenuOpen(false)} 
                  className="w-full px-8 py-5 text-lg font-bold border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-center rounded-lg"
                >
                  Scarica CV 🇮🇹
                </a>
                <a 
                  href="/cv-english.pdf" 
                  download 
                  onClick={() => setIsMenuOpen(false)} 
                  className="w-full px-8 py-5 text-lg font-bold border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-center rounded-lg"
                >
                  Download CV 🇬🇧
                </a>
              </motion.div>

              <motion.div 
                className="flex gap-8 mt-4" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://www.linkedin.com/in/katia-pasini-3b51a2172/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Linkedin className="w-8 h-8" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a 
                  href="mailto:tuaemail@gmail.com" 
                  className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-8 h-8" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}