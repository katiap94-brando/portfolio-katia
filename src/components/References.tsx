import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

interface Reference {
  name: string;
  email: string;
  linkedin: string;
  relationship: string;
  description: string;
}

const references: Reference[] = [
  {
    name: 'Pablo Picatto',
    linkedin: 'https://www.linkedin.com/in/pablo-picatto/',
    relationship: 'CTO e manager del team in Aigot',
    description: 'Katia consistently demonstrated exceptional design skills and a deep understanding of UX principles. Her ability to translate complex requirements into intuitive designs is truly impressive. She is always proactive in seeking feedback and iterating to meet user needs.'
  },
  {
    name: 'Andrea Lo Parco',
    linkedin: 'https://www.linkedin.com/in/andrealoparco/',
    relationship: 'Sales Manager in Aigot',
    description: 'Katia è una seria professionista con talento unico e gusto raffinato. È puntuale, rigorosa e supera spesso le aspettative. La sua attenzione ai dettagli e dedizione nel garantire la massima qualità si riflettono in tutti i suoi lavori.'
  },
  {
    name: 'Azzurra del Sarto',
    linkedin: 'https://www.linkedin.com/in/azzurra-del-sarto-b148a615a/',
    relationship: 'Copywriter in Aigot',
    description: 'Katia è puntuale, precisa e con un occhio attento a ogni dettaglio. Non si basa mai solo sull\'intuizione, ma supporta le sue decisioni con dati concreti raccolti sul campo. La sua energia è inesauribile: testa le sue UX su centinaia di utenti garantendo che ogni dettaglio sia impeccabile.'
  },
  {
    name: 'Iacopo Buffoni',
    linkedin: 'https://www.linkedin.com/in/iacopo-buffoni/?locale=en',
    relationship: 'Frontend Developer in Aigot',
    description: 'Katia unisce estetica e funzionalità in modo impressionante. Le sue creazioni sono intuitive e perfettamente strutturate. Fornisce prototipi ben organizzati che facilitano il processo di sviluppo. La sua capacità di ascolto attivo e apertura al confronto rendono il lavoro di squadra stimolante.'
  }
];

interface ReferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

export function References({ isOpen, onClose }: ReferencesProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-50"
            onClick={onClose}
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[85%] lg:w-[75%] bg-gray-100 z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header with Back Button */}
              <div className="p-8">
                <button
                  onClick={onClose}
                  className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                  aria-label="Close references"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-8 pb-20">
                <div className="max-w-6xl mx-auto">
                  {/* References Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {references.map((reference, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="space-y-3"
                      >
                        {/* Name */}
                        <h3 className="text-3xl font-medium">{reference.name}</h3>

                        {/* Contact Links */}
                        <div className="flex items-center gap-3 flex-wrap">
                          <a
                            href={`mailto:${reference.email}`}
                            className="text-gray-700 underline hover:text-black transition-colors"
                          >
                            {reference.email}
                          </a>
                          <span className="text-gray-400">-</span>
                          <a
                            href={reference.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 underline hover:text-black transition-colors"
                          >
                            Linkedin
                          </a>
                        </div>

                        {/* Relationship */}
                        <p className="text-sm text-gray-500 uppercase tracking-wide mt-4">
                          {reference.relationship}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed">
                          {reference.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between pointer-events-none">
                {/* Large "References" text */}
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black/5 select-none">
                  Referenze
                </h2>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 pointer-events-auto"
                  aria-label="Close"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}