import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Menu as MenuIcon, User, Calendar, Phone, Info } from 'lucide-react';
import { MacBookMockup } from '../components/MacBookMockup';

import homeImg from '../assets/home.png';
import menuImg from '../assets/menu.png';
import profiloImg from '../assets/profilo.png';
import contattoImg from '../assets/contatto.png';
import iscrivitiImg from '../assets/iscriviti.png';
import prenotazioniImg from '../assets/prenotazioni.png';
import chiSiamoImg from '../assets/chi-siamo.png';

type Screen = 'home' | 'menu' | 'profilo' | 'contatto' | 'iscriviti' | 'prenotazioni' | 'chi-siamo';

const screens = {
  home: { title: 'Home', img: homeImg, icon: Home },
  'chi-siamo': { title: 'Chi Siamo', img: chiSiamoImg, icon: Info },
  menu: { title: 'Menù', img: menuImg, icon: MenuIcon },
  prenotazioni: { title: 'Prenotazioni', img: prenotazioniImg, icon: Calendar },
  contatto: { title: 'Contatto', img: contattoImg, icon: Phone },
  profilo: { title: 'Profilo', img: profiloImg, icon: User },
  iscriviti: { title: 'Iscriviti', img: iscrivitiImg, icon: User },
};

const screenOrder: Screen[] = ['home', 'chi-siamo', 'menu', 'prenotazioni', 'contatto', 'profilo', 'iscriviti'];

export default function RistoranteArgentinoProject() {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

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

      {/* Hero Section - Editorial Layout */}
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
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Project Details</p>
                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Anno</p>
                      <p className="text-base font-medium text-gray-900">2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Tipo</p>
                      <p className="text-base font-medium text-gray-900">Website Design</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Piattaforma</p>
                      <p className="text-base font-medium text-gray-900">Web Responsive</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Settore</p>
                      <p className="text-base font-medium text-gray-900">Food & Beverage / Ristorazione</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-9">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-12"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-right">
                  Don Julio,<br />Ristorante<br />Argentino
                </h1>
              </motion.div>

              {/* Short Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-12 text-right">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl ml-auto">
                  Un sito web completo che celebra l'autenticità della cucina argentina attraverso un'esperienza digitale immersiva.
                </p>
              </motion.div>

              {/* Concept Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-12">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Concept</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Don Julio è un ristorante argentino di alta cucina che necessitava di una presenza digitale all'altezza 
                    della sua tradizione culinaria. Il progetto si è concentrato sulla creazione di un'esperienza web che 
                    trasmettesse l'essenza della cultura gastronomica argentina, dalla pampa al piatto.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Il sito include funzionalità avanzate come sistema di prenotazioni online, menù digitale interattivo, 
                    area utente personalizzata e storytelling del brand per creare un legame emotivo con i visitatori.
                  </p>
                </div>
              </motion.div>

              {/* Features Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-12">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Funzionalità Principali</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">🍽️ Menù Digitale</h3>
                    <p className="text-sm text-gray-600">Menù completo con fotografie professionali, descrizioni dettagliate e filtri per categoria</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">📅 Sistema Prenotazioni</h3>
                    <p className="text-sm text-gray-600">Booking online in tempo reale con selezione di data, ora e numero di persone</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">👤 Area Utente</h3>
                    <p className="text-sm text-gray-600">Profilo personalizzato per gestire prenotazioni, preferenze e storico ordini</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">📖 Brand Storytelling</h3>
                    <p className="text-sm text-gray-600">Sezione dedicata alla storia del ristorante, tradizione argentina e valori del brand</p>
                  </div>
                </div>
              </motion.div>

              {/* Il mio ruolo Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-12">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Il mio ruolo</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ho progettato l'intera esperienza UX/UI del sito web, dalla strategia alla realizzazione delle interfacce, 
                    con particolare attenzione all'identità visiva che richiama la cultura argentina.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Research e analisi del target (clientela premium, amanti della cucina gourmet)</li>
                    <li>Information Architecture e struttura della navigazione</li>
                    <li>Design system con palette colori ispirata alla tradizione argentina</li>
                    <li>UI design di tutte le pagine del sito (7 sezioni complete)</li>
                    <li>Prototipazione interattiva e responsive design</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Prototype Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-8 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prototipo Interattivo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Naviga tra le diverse sezioni del sito. Clicca sui pulsanti per cambiare pagina e scrolla verticalmente all'interno del MacBook per esplorare ogni sezione completa.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {screenOrder.map((screen) => {
              const { title, icon: Icon } = screens[screen];
              return (
                <motion.button
                  key={screen}
                  onClick={() => setCurrentScreen(screen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    currentScreen === screen
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {title}
                </motion.button>
              );
            })}
          </div>
          
          {/* MacBook Mockup */}
          <div className="max-w-5xl mx-auto">
            <MacBookMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full overflow-y-auto overflow-x-hidden"
                >
                  <img
                    src={screens[currentScreen].img}
                    alt={`${screens[currentScreen].title} - Don Julio`}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </MacBookMockup>
          </div>
        </div>
      </motion.div>

      {/* Design Process Section */}
      <div className="py-16 bg-[#faf8f6]">
        <div className="px-8 max-w-screen-xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Processo di Design
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Discovery</h3>
              <p className="text-gray-600">
                Analisi approfondita della cultura gastronomica argentina, studio della concorrenza e ricerca 
                sui comportamenti degli utenti nel settore ristorazione premium.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Identity</h3>
              <p className="text-gray-600">
                Palette colori ispirata ai toni caldi della pampa argentina (ambra, marrone, beige), 
                tipografia elegante e componenti UI che richiamano l'artigianalità.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Features</h3>
              <p className="text-gray-600">
                Implementazione di animazioni fluide, sistema di prenotazione real-time, 
                form di contatto e integrazione con sistemi di gestione ristorante.
              </p>
            </motion.div>
          </div>
        </div>
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
            Progetto 5 di 5
          </div>
        </div>
      </div>
    </motion.div>
  );
}
