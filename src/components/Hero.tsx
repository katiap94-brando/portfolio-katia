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

  const alternatingPhrases = ["UX UI Designer", "Creativa", "Curiosa"];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = alternatingPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % alternatingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / (rect.width / 2));
      mouseY.set((e.clientY - centerY) / (rect.height / 2));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="mt-[72px] flex items-center justify-center px-6 sm:px-8 py-12 sm:py-16 bg-white"
    >
      <div className="max-w-screen-2xl w-full">
        {/*
          Layout:
          - mobile: colonna singola, testo sopra e foto NASCOSTA (hidden)
          - lg desktop: due colonne — TESTO a sinistra, FOTO a destra
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-center">

          {/* ── TESTO — sempre a sinistra su desktop, unico elemento su mobile ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 lg:mb-12">
              <div className="mb-2">Ciao, sono Katia.</div>
              <div className="break-words">
                <span>Una </span>
                <span className="inline">
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 bg-black ml-1 align-middle"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </span>
              </div>
            </h1>

            <motion.button
              onClick={scrollToProjects}
              className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              Un pò di miei progetti
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* ── FOTO — nascosta su mobile, visibile su desktop a destra ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end"
            style={{ x: imageX, y: imageY, rotate: imageRotate }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={profileImage}
                alt="Katia Pasini"
                className="w-72 h-72 xl:w-96 xl:h-96 rounded-full object-cover shadow-2xl"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)" }}
              />
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