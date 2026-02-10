import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Image as ImageIcon, Wand2, FileText, ArrowLeft, Calendar, Target, Euro, Users } from 'lucide-react';

interface AIAdCreatorProps {
  onClose: () => void;
}

export function AIAdCreator({ onClose }: AIAdCreatorProps) {
  const [step, setStep] = useState<'platform' | 'creating' | 'form'>('platform');
  const [platform, setPlatform] = useState<'facebook' | 'google' | 'instagram' | null>(null);
  const [aiSuggestions, setAiSuggestions] = useState({
    objective: '',
    target: '',
    budget: '',
    duration: '',
    description: '',
  });
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);

  const generateAISuggestions = (selectedPlatform: 'facebook' | 'google' | 'instagram') => {
    setPlatform(selectedPlatform);
    setStep('creating');
    setTimeout(() => {
      setAiSuggestions({
        objective: 'Aumenta le visite in farmacia',
        target: 'Persone 45-70 anni nel raggio di 5km',
        budget: '15',
        duration: '7',
        description: '🏥 La tua salute al primo posto! Vieni a trovarci per una consulenza gratuita sui nostri integratori per il sistema immunitario.',
      });
      setStep('form');
    }, 2500);
  };

  const generateImage = () => {
    setIsGeneratingImage(true);
    setTimeout(() => {
      setGeneratedImage('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800');
      setIsGeneratingImage(false);
    }, 3000);
  };

  const generateCopy = () => {
    setIsGeneratingCopy(true);
    setTimeout(() => {
      const copies = [
        '💊 Promo Inverno: Scopri i nostri integratori per rafforzare il sistema immunitario.',
        '🌿 Benessere naturale! I migliori prodotti per la tua salute ti aspettano.',
        '⚕️ Consulenza gratuita con il nostro farmacista! Prenota ora.',
      ];
      setAiSuggestions(prev => ({
        ...prev,
        description: copies[Math.floor(Math.random() * copies.length)],
      }));
      setIsGeneratingCopy(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        /* FIX: larghezza piena su mobile, max-w su desktop. Niente altezza fissa */
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">Crea nuova pubblicità</h2>
              <p className="text-blue-100 text-xs sm:text-sm">L'AI ottimizza tutto per te ✨</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-semibold text-sm">AI Powered</span>
          </div>
        </div>

        {/* Body — FIX: flex-col su mobile, flex-row su lg */}
        <div className="flex flex-col lg:flex-row">
          {/* Form */}
          <div className="w-full lg:w-1/2 p-4 sm:p-8 overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 'platform' && (
                <PlatformSelection key="platform" onSelect={generateAISuggestions} />
              )}
              {step === 'creating' && (
                <AIThinking key="creating" />
              )}
              {step === 'form' && platform && (
                <AdForm
                  key="form"
                  platform={platform}
                  aiSuggestions={aiSuggestions}
                  setAiSuggestions={setAiSuggestions}
                  onGenerateImage={generateImage}
                  onGenerateCopy={generateCopy}
                  isGeneratingImage={isGeneratingImage}
                  isGeneratingCopy={isGeneratingCopy}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Preview — su mobile appare sotto il form */}
          {step === 'form' && platform && (
            <div className="w-full lg:w-1/2 bg-gray-50 p-4 sm:p-8 border-t lg:border-t-0 lg:border-l border-gray-200 overflow-y-auto rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl">
              <AdPreview
                platform={platform}
                description={aiSuggestions.description}
                generatedImage={generatedImage}
                isGeneratingImage={isGeneratingImage}
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PlatformSelection({ onSelect }: { onSelect: (platform: 'facebook' | 'google' | 'instagram') => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Scegli la piattaforma</h3>
        <p className="text-gray-600 text-sm">Seleziona dove vuoi pubblicare la tua inserzione</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { id: 'facebook' as const, name: 'Facebook Ads', icon: '📘', color: 'from-blue-500 to-blue-600', desc: 'Raggiungi clienti nella tua zona' },
          { id: 'instagram' as const, name: 'Instagram Ads', icon: '📷', color: 'from-pink-500 to-purple-600', desc: 'Visual storytelling per giovani' },
          { id: 'google' as const, name: 'Google Ads', icon: '🔍', color: 'from-red-500 to-yellow-500', desc: 'Appari nelle ricerche locali' },
        ].map((plat) => (
          <motion.button
            key={plat.id}
            onClick={() => onSelect(plat.id)}
            className="relative p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-left overflow-hidden group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${plat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            <div className="relative flex items-center gap-4">
              <div className="text-3xl">{plat.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-bold text-gray-900 mb-1">{plat.name}</h4>
                <p className="text-sm text-gray-600">{plat.desc}</p>
              </div>
              <Sparkles className="w-5 h-5 text-yellow-500 shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function AIThinking() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 mb-6"
      >
        <Sparkles className="w-full h-full text-blue-600" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">L'AI sta lavorando per te...</h3>
      <div className="space-y-2 w-full max-w-sm">
        {[
          'Analizzando il settore farmaceutico',
          'Identificando il target ottimale',
          'Calcolando il budget ideale',
          'Generando copy persuasivo',
        ].map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.5 }}
            className="flex items-center gap-3 text-gray-600 text-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.5 }}
              className="w-2 h-2 bg-blue-600 rounded-full shrink-0"
            />
            {text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AdForm({
  platform,
  aiSuggestions,
  setAiSuggestions,
  onGenerateImage,
  onGenerateCopy,
  isGeneratingImage,
  isGeneratingCopy,
}: {
  platform: string;
  aiSuggestions: any;
  setAiSuggestions: any;
  onGenerateImage: () => void;
  onGenerateCopy: () => void;
  isGeneratingImage: boolean;
  isGeneratingCopy: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      <div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Target className="w-4 h-4 text-gray-700" />
          <label className="text-sm font-semibold text-gray-900">Obiettivo</label>
          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> AI
          </span>
        </div>
        <select
          value={aiSuggestions.objective}
          onChange={(e) => setAiSuggestions({ ...aiSuggestions, objective: e.target.value })}
          className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
        >
          <option>Aumenta le visite in farmacia</option>
          <option>Promuovi un prodotto specifico</option>
          <option>Raccogli contatti per newsletter</option>
        </select>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Users className="w-4 h-4 text-gray-700" />
          <label className="text-sm font-semibold text-gray-900">Target</label>
          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> AI
          </span>
        </div>
        <select
          value={aiSuggestions.target}
          onChange={(e) => setAiSuggestions({ ...aiSuggestions, target: e.target.value })}
          className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
        >
          <option>Persone 45-70 anni nel raggio di 5km</option>
          <option>Genitori con bambini 0-5 anni</option>
          <option>Sportivi e fitness enthusiasts</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            <Euro className="w-4 h-4 text-gray-700" />
            <label className="text-sm font-semibold text-gray-900">Budget</label>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI
            </span>
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500">
            <input
              type="number"
              value={aiSuggestions.budget}
              onChange={(e) => setAiSuggestions({ ...aiSuggestions, budget: e.target.value })}
              className="flex-1 text-sm outline-none bg-transparent w-0"
            />
            <span className="text-xs text-gray-400 ml-1 whitespace-nowrap">€/gg</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            <Calendar className="w-4 h-4 text-gray-700" />
            <label className="text-sm font-semibold text-gray-900">Durata</label>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI
            </span>
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500">
            <input
              type="number"
              value={aiSuggestions.duration}
              onChange={(e) => setAiSuggestions({ ...aiSuggestions, duration: e.target.value })}
              className="flex-1 text-sm outline-none bg-transparent w-0"
            />
            <span className="text-xs text-gray-400 ml-1 whitespace-nowrap">giorni</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-gray-700" />
          <label className="text-sm font-semibold text-gray-900">Descrizione</label>
        </div>
        <textarea
          value={aiSuggestions.description}
          onChange={(e) => setAiSuggestions({ ...aiSuggestions, description: e.target.value })}
          rows={3}
          className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          placeholder="La tua salute al primo posto..."
        />
        <motion.button
          onClick={onGenerateCopy}
          disabled={isGeneratingCopy}
          className="mt-1.5 flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
          whileHover={{ x: 3 }}
        >
          <Wand2 className="w-3.5 h-3.5" />
          {isGeneratingCopy ? 'Generando...' : 'Genera nuovo copy con AI'}
        </motion.button>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-900 mb-2 block">Media</label>
        <div className="grid grid-cols-3 gap-2">
          <motion.button
            className="p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors bg-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ImageIcon className="w-5 h-5 mx-auto mb-1 text-gray-600" />
            <p className="text-xs text-gray-700 font-medium">Foto/Video</p>
          </motion.button>
          <motion.button
            onClick={onGenerateImage}
            disabled={isGeneratingImage}
            className="p-3 border border-purple-200 bg-purple-50 rounded-lg hover:border-purple-400 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Wand2 className="w-5 h-5 mx-auto mb-1 text-purple-600" />
            <p className="text-xs text-purple-700 font-semibold">
              {isGeneratingImage ? 'Generando...' : 'Genera AI'}
            </p>
          </motion.button>
          <motion.button
            className="p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors bg-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="w-5 h-5 mx-auto mb-1 text-gray-600" />
            <p className="text-xs text-gray-700 font-medium">Template</p>
          </motion.button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-3 text-sm">Costi totali</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Budget giornaliero</span>
            <span className="font-semibold text-gray-900">€ {aiSuggestions.budget}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Numero di giorni</span>
            <span className="font-semibold text-gray-900">{aiSuggestions.duration}</span>
          </div>
          <div className="border-t border-gray-300 pt-2 flex items-center justify-between">
            <span className="font-bold text-gray-900">Totale</span>
            <span className="text-lg font-bold text-blue-600">
              € {(parseFloat(aiSuggestions.budget || '0') * parseFloat(aiSuggestions.duration || '0')).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <motion.button
          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg font-semibold text-sm text-gray-700 hover:bg-gray-50"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          Salva bozza
        </motion.button>
        <motion.button
          className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm shadow-md"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          Crea ora
        </motion.button>
      </div>
    </motion.div>
  );
}

function AdPreview({
  platform,
  description,
  generatedImage,
  isGeneratingImage,
}: {
  platform: string;
  description: string;
  generatedImage: string | null;
  isGeneratingImage: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Anteprima</h3>
      <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-xl">
        <div className="bg-gray-100 px-5 py-4 border-b-2 border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              F
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Farmacia San Marco</p>
              <p className="text-xs text-gray-600">Sponsorizzato</p>
            </div>
          </div>
        </div>

        <div className="relative bg-white p-4">
          <div
            className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
            style={{ height: '200px' }}
          >
            {isGeneratingImage ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                <Sparkles className="w-10 h-10 text-blue-600" />
              </motion.div>
            ) : generatedImage ? (
              <img src={generatedImage} alt="Generated" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <ImageIcon className="w-12 h-12 text-gray-400" />
            )}
          </div>
        </div>

        <div className="px-5 pb-5 bg-white">
          <p className="text-sm text-gray-800 leading-relaxed mb-3">
            {description || 'La tua descrizione apparirà qui...'}
          </p>
          <motion.button
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-bold text-sm"
            whileHover={{ backgroundColor: '#2563eb' }}
          >
            Scopri di più
          </motion.button>
        </div>

        <div className="px-5 py-3 border-t-2 border-gray-200 bg-white flex items-center justify-around text-gray-600">
          <button className="flex items-center gap-1.5 text-xs hover:text-blue-600 font-medium">
            <span>👍</span> Mi piace
          </button>
          <button className="flex items-center gap-1.5 text-xs hover:text-blue-600 font-medium">
            <span>💬</span> Commenta
          </button>
          <button className="flex items-center gap-1.5 text-xs hover:text-blue-600 font-medium">
            <span>🔄</span> Condividi
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center mt-3">L'aspetto finale potrebbe variare</p>
    </motion.div>
  );
}