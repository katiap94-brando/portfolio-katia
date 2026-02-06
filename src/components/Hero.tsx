import { motion } from 'framer-motion';
import { ArrowDown, Palette } from 'lucide-react';

import profileImage from '../assets/profile.jpg';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-24 pb-20 bg-white">
      <div className="max-w-screen-2xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12">
              Ciao! Sono Katia,{' '}
              <span className="inline-block">
                una UX UI designer
                <motion.span
                  className="inline-block ml-4 align-middle"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Palette className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
                </motion.span>
              </span>
            </h1>

            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-3 text-2xl md:text-3xl hover:gap-5 transition-all duration-300"
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
            </button>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="Katia Pasini"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}