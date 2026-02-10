import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { 
  LoginPrototype, 
  SearchPrototype, 
  PersonalizePrototype, 
  RegisterPrototype, 
  DashboardPrototype 
} from '../components/PrototypeScreens';

import coloriImage from '../assets/palette-colori.png';
import tipografiaImage from '../assets/tipografia.png';
import userPersonas from '../assets/user-personas.png';
import userFlowChart from '../assets/user-flow.png';

export default function MaestroMindProject() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="min-h-screen bg-[#faf8f6]"
    >
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={() => navigate('/')}
          className="w-14 h-14 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
          aria-label="Torna alla home"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="sticky top-32 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Dettagli progetto</p>
                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Anno</p>
                      <p className="text-base font-medium text-gray-900">2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Tipo</p>
                      <p className="text-base font-medium text-gray-900">Mobile App Design</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Piattaforma</p>
                      <p className="text-base font-medium text-gray-900">iOS</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-12"
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight text-right">
                  maestroMind,<br />l'app per imparare<br />musica classica
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-12 text-right"
              >
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl ml-auto">
                  Un'app che trasforma l'apprendimento della musica classica in un'esperienza coinvolgente attraverso la gamification.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Concept</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    MaestroMind nasce dall'idea di rendere accessibile l'apprendimento della musica classica a tutti, 
                    utilizzando meccaniche di gamification per mantenere alta la motivazione degli utenti.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    L'app permette di imparare diversi strumenti musicali attraverso lezioni progressive, 
                    quiz interattivi e sfide che trasformano lo studio in un'esperienza ludica e gratificante.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Il mio ruolo</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Come UX/UI Designer, ho curato l'intero processo di progettazione dall'ideazione al design finale, 
                    concentrandomi sulla creazione di un'esperienza utente fluida e intuitiva.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ricerca e analisi degli utenti target</li>
                    <li>Wireframing e prototipazione</li>
                    <li>Design system e studio dell'identità visiva</li>
                    <li>UI design di tutte le schermate dell'app</li>
                    <li>Test e iterazioni basate sui feedback</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* App Screens Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Schermate dell'app</h2>

          {/* Hint scroll — visibile solo su mobile */}
          <div className="flex items-center justify-center gap-2 mb-8 md:hidden text-gray-400 text-sm">
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ←
            </motion.span>
            <span>Scorri per vedere tutte le schermate</span>
            <motion.span
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>

          {/* Mobile: scroll orizzontale con swipe — Desktop: griglia */}
          <div className="flex overflow-x-auto gap-6 pb-4 px-8 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible">
            {[LoginPrototype, SearchPrototype, PersonalizePrototype, RegisterPrototype, DashboardPrototype].map((Component, i) => (
              <div key={i} className="snap-center shrink-0 w-[75vw] md:w-auto">
                <Component />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Brand Identity Section */}
      <div className="py-16 bg-[#faf8f6]">
        <div className="px-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900"
          >
            Brand Identity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto"
          >
            Un sistema di design completo che garantisce coerenza visiva e un'esperienza utente armoniosa in tutta l'applicazione.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-white py-8"
        >
          <div className="px-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Palette colori</h3>
          </div>
          <div className="overflow-x-auto px-8">
            <motion.img
              src={coloriImage}
              alt="Palette colori MaestroMind"
              className="w-full rounded-2xl shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12 py-8"
        >
          <div className="px-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Tipografia</h3>
          </div>
          <div className="overflow-x-auto px-8">
            <motion.img
              src={tipografiaImage}
              alt="Tipografia MaestroMind"
              className="w-full rounded-2xl shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* UX Research Section */}
      <div className="py-16 bg-white">
        <div className="px-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900"
          >
            Ricerca UX
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto"
          >
            Analisi approfondita degli utenti target e mappatura dei flussi di interazione per creare un'esperienza ottimale.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="px-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900">User Personas</h3>
          </div>
          <div className="overflow-x-auto px-8">
            <motion.img
              src={userPersonas}
              alt="User Personas"
              className="w-full rounded-2xl shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="px-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900">User Flow & Architettura dell'informazione</h3>
            <p className="text-base text-gray-600 mt-4">
              Flowchart completo che mappa il percorso dell'utente all'interno dell'applicazione.
            </p>
          </div>
          <div className="overflow-x-auto px-8">
            <motion.img
              src={userFlowChart}
              alt="User Flow Chart"
              className="w-full rounded-2xl shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-6 px-8">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-lg hover:gap-4 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna ai progetti
          </button>
          <div className="text-gray-500">
            Progetto 1 di 3
          </div>
        </div>
      </div>
    </motion.div>
  );
}
