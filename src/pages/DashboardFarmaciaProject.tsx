import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { PharmacyDashboard } from '../components/PharmacyDashboard';

export default function DashboardFarmaciaProject() {
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
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Project Details</p>
                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Anno</p>
                      <p className="text-base font-medium text-gray-900">2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Tipo</p>
                      <p className="text-base font-medium text-gray-900">Dashboard SaaS</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Piattaforma</p>
                      <p className="text-base font-medium text-gray-900">Web App</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Settore</p>
                      <p className="text-base font-medium text-gray-900">Healthcare / Farmaceutico</p>
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
                  Dashboard<br />per Farmacia
                </h1>
              </motion.div>

              {/* Short Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-12 text-right">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl ml-auto">
                  Una piattaforma completa per la gestione moderna di farmacie: vendite, inventario, clienti e marketing digitale in un'unica interfaccia.
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
                    Il settore farmaceutico necessita di strumenti digitali efficienti per gestire vendite, inventario di medicinali, 
                    relazioni con i clienti e campagne di marketing. Questa dashboard integra tutte queste funzionalità in un'interfaccia 
                    pulita e intuitiva, pensata per farmacisti e gestori.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Il design professionale in stile SaaS garantisce facilità d'uso, con analytics in tempo reale, 
                    gestione intelligente dell'inventario con alert di scadenza prodotti, e strumenti di marketing digitale 
                    per newsletter e campagne social.
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
                    <h3 className="font-semibold text-gray-900 mb-2">📊 Analytics & KPI</h3>
                    <p className="text-sm text-gray-600">Dashboard con metriche di vendita, grafici di andamento e performance analytics</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">💊 Gestione Prodotti</h3>
                    <p className="text-sm text-gray-600">Inventario medicinali con alert scadenze, stock management e ricerca avanzata</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">👥 Database Clienti</h3>
                    <p className="text-sm text-gray-600">Anagrafica completa, storico acquisti, prescrizioni e programmi fedeltà</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">📧 Marketing Digitale</h3>
                    <p className="text-sm text-gray-600">Newsletter, social media, campagne ADS e automazioni marketing</p>
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
                    Ho progettato l'intera UX/UI della dashboard, adattando pattern di design SaaS al contesto specifico 
                    del settore farmaceutico, con particolare attenzione alla compliance normativa e alla sicurezza dei dati sanitari.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Research e analisi dei bisogni specifici del settore farmaceutico</li>
                    <li>Information Architecture e struttura della navigazione</li>
                    <li>Design system coerente con focus su leggibilità e accessibilità</li>
                    <li>Prototipazione interattiva di tutte le sezioni</li>
                    <li>Design responsivo per desktop e tablet</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Dashboard Section */}
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
              Esplora le diverse sezioni della dashboard. Clicca sui tab per navigare tra le funzionalità.
            </p>
          </div>
          
          {/* Dashboard Component */}
          <PharmacyDashboard />
        </div>
      </motion.div>

      {/* Design Decisions Section */}
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

          {/* Typography & UI Components Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Design System</h3>
            <p className="text-gray-600 mb-8">
              Sistema di design con palette colori professionale, tipografia per massima leggibilità e componenti UI riutilizzabili.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Colors */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Palette Colori</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">#2563EB</p>
                      <p className="text-xs text-gray-500">Primary Blue</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">#9333EA</p>
                      <p className="text-xs text-gray-500">Accent Purple</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-lg"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">#16A34A</p>
                      <p className="text-xs text-gray-500">Success Green</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Tipografia</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">Aa</p>
                    <p className="text-sm text-gray-600">Inter Bold</p>
                    <p className="text-xs text-gray-500">Titoli e Headers</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-1">Aa</p>
                    <p className="text-sm text-gray-600">Inter Medium</p>
                    <p className="text-xs text-gray-500">Sottotitoli</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-900 mb-1">Aa</p>
                    <p className="text-sm text-gray-600">Inter Regular</p>
                    <p className="text-xs text-gray-500">Body Text</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Componenti UI</h4>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Primary Button
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Secondary Button
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Tertiary Button
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Palette Professionale</h3>
              <p className="text-gray-600">
                Colori ispirati al settore healthcare: blu per fiducia e professionalità, 
                verde per salute e benessere, con accenti per alert e notifiche.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Layout Responsive</h3>
              <p className="text-gray-600">
                Design ottimizzato per desktop e tablet, con sidebar collassabile e 
                componenti che si adattano a diverse dimensioni di schermo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Visualization</h3>
              <p className="text-gray-600">
                Grafici chiari e immediati per analytics, tabelle interattive per la gestione dati, 
                e KPI cards per il monitoraggio rapido delle performance.
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
            Progetto 2 di 3
          </div>
        </div>
      </div>
    </motion.div>
  );
}