import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { ScrollingFooter } from '../components/ScrollingFooter';
import { References } from '../components/References';
import { useState } from 'react';
import brandoImage from '../assets/brando.png';

export default function AboutPage() {
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);

  return (
    <>
      <Header 
        onReferencesClick={() => setIsReferencesOpen(true)}
        currentPage="about"
      />
      
      <main className="min-h-screen bg-[#faf8f6] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Text Content - Left */}
            <motion.div
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
                <p>
                  Progetto esperienze digitali partendo dalle persone, cercando sempre semplicità, chiarezza e coerenza.
                </p>

                <p>
                  Nel mio lavoro analizzo problemi, disegno flussi e curo i dettagli che rendono un prodotto facile da usare e piacevole da vivere. Mi piace capire perché qualcosa non funziona e trovare soluzioni che abbiano senso, prima ancora che essere belle.
                </p>

                <p>
                  Fuori dal lavoro condivido la quotidianità con un piccolo Jack Russell, il mio assistente personale e tester di usabilità non ufficiale: molto critico, soprattutto quando qualcosa non è intuitivo.
                  Amo viaggiare, scoprire nuovi luoghi e culture, e credo che osservare come le persone vivono e interagiscono con il mondo sia una delle migliori fonti di ispirazione per progettare meglio.
                </p>

                <p>
                  Sono appassionata di buon cibo e culture gastronomiche. In un'altra vita mi sarei vista come critica gastronomica; oggi mi accontento (felicemente) di assaggiare, osservare e imparare.
                </p>
              </div>
            </motion.div>

            {/* Image - Right */}
            <motion.div
              className="flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-full min-h-[400px]">
                <motion.img
                  src={brandoImage}
                  alt="Katia con il suo Jack Russell Brando"
                  className="w-full h-full rounded-2xl shadow-lg object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative element */}
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFE17B] rounded-full -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFB5E8] rounded-full -z-10"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <ScrollingFooter />
      
      {/* References Panel */}
      <References isOpen={isReferencesOpen} onClose={() => setIsReferencesOpen(false)} />
    </>
  );
}