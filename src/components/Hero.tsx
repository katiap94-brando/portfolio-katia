import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import profileImage from '../assets/profile.jpg';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const imageX = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const imageY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  const imageRotate = useTransform(smoothMouseX, [-1, 1], [-5, 5]);

  // Typewriter effect - frasi che si alternano dopo "Una"
  const alternatingPhrases = [
    "UX UI Designer",
    "Creativa",
    "Curiosa"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = alternatingPhrases[currentPhraseIndex];
    
    // Velocità di scrittura (ms per carattere)
    const typingSpeed = isDeleting ? 50 : 100;
    // Pausa alla fine della frase prima di cancellare
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Fase di scrittura
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Frase completata, pausa prima di cancellare
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Fase di cancellazione
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Cancellazione completata, passa alla frase successiva
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % alternatingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentPhraseIndex, alternatingPhrases]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-8 pt-24 pb-20 bg-white"
    >
      <div className="max-w-screen-2xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Text Content - Colonna più larga */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-12">
              {/* Prima riga - FISSA */}
              <div className="mb-2">
                Ciao, sono Katia.
              </div>
              
              {/* Seconda riga - "Una" fisso + testo animato - tutto sulla stessa linea */}
              <div className="whitespace-nowrap">
                <span>Una </span>
                <span className="inline-block">
                  {displayedText}
                  {/* Cursore lampeggiante */}
                  <motion.span
                    className="inline-block w-1 h-12 md:h-16 lg:h-20 xl:h-24 bg-black ml-2 align-middle"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </span>
              </div>
            </h1>

            {/* Bottone progetti */}
            <motion.button
              onClick={scrollToProjects}
              className="group flex items-center gap-3 text-2xl md:text-3xl transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              Un pò di miei progetti
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown className="w-8 h-8" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Profile Image con effetto magnetic - Colonna più stretta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center lg:justify-end"
            style={{
              x: imageX,
              y: imageY,
              rotate: imageRotate,
            }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={profileImage}
                alt="Katia Pasini"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)"
                }}
              />
              
              {/* Cerchio decorativo di sfondo */}
              <motion.div
                className="absolute -z-10 w-full h-full rounded-full bg-gray-200 -top-4 -right-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}