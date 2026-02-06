import { motion, AnimatePresence } from 'framer-motion';

export function ScrollingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Create multiple repetitions of the text for seamless loop
  const text = 'clicca per tornare su';
  const repetitions = Array(20).fill(text);

  return (
    <footer className="relative overflow-hidden bg-black text-white py-8 cursor-pointer" onClick={scrollToTop}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {repetitions.map((text, index) => (
          <span
            key={index}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mx-8"
          >
            {text} •
          </span>
        ))}
      </motion.div>
    </footer>
  );
}
