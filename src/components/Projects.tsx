import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'App di Musica Classica',
    description: 'Applicazione mobile per la musica classica',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800',
    link: '/project/maestromind'
  },
  {
    id: '4',
    title: 'Dashboard farmacia',
    description: 'Dashboard per gestione farmacia',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    link: '/project/dashboard-farmacia'
  },
  {
    id: '5',
    title: 'Sito ristorante argentino',
    description: 'Sito web per ristorante argentino',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    link: '/project/ristorante-argentino'
  }
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-8 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Ecco una raccolta dei miei lavori! Sentitevi a casa.
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              className="block relative py-12 border-b border-dashed border-gray-400 group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between gap-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold group-hover:translate-x-4 transition-transform duration-500">
                  {project.title}
                </h3>

                <motion.div
                  className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
              </div>

              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute right-20 top-6 z-10 pointer-events-none hidden lg:block"
                  >
                    <div className="w-80 h-64 rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}