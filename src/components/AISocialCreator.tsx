import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Image as ImageIcon, Wand2, FileText, ArrowLeft } from 'lucide-react';

interface AISocialCreatorProps {
  onClose: () => void;
}

export function AISocialCreator({ onClose }: AISocialCreatorProps) {
  const [platform, setPlatform] = useState<'facebook' | 'instagram' | null>(null);
  const [postType, setPostType] = useState<'post' | 'stories'>('post');
  const [contentType, setContentType] = useState<'product' | 'promo' | 'event' | 'team'>('product');
  const [postText, setPostText] = useState('');
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generateCopy = () => {
    setIsGeneratingCopy(true);
    setTimeout(() => {
      const copies = {
        product: [
          '💊 Nuovo arrivo! I migliori integratori per il tuo benessere quotidiano. Vieni a scoprire la nostra selezione! #Farmacia #Benessere',
          '🌿 Prodotti naturali per la tua salute! Scopri la linea di integratori bio certificati. Ti aspettiamo! #Salute #Natura',
          '✨ Prenditi cura di te con i nostri prodotti selezionati! Qualità e professionalità al tuo servizio. #Farmacia #Cura',
        ],
        promo: [
          '🎉 Promo Speciale! Sconto 20% su tutti gli integratori fino a domenica. Non perdere l\'occasione! #Promozione #Sconto',
          '💝 Offerta Limitata! Acquista 2 prodotti e ricevi il terzo in omaggio. Solo questa settimana! #Offerta #Risparmio',
          '🔥 Saldi Invernali! Fino al 30% di sconto su prodotti selezionati. Visita la farmacia! #Saldi #Convenienza',
        ],
        event: [
          '📅 Giornata della Salute! Sabato 15 consulenze gratuite con il nostro farmacista. Prenota ora! #Evento #Salute',
          '🎓 Workshop gratuito: "Come prendersi cura della pelle in inverno". Iscriviti sul nostro sito! #Formazione #Benessere',
          '💉 Campagna Vaccinale: dal lunedì al venerdì, senza appuntamento. Proteggi te e i tuoi cari! #Vaccini #Prevenzione',
        ],
        team: [
          '👨‍⚕️ Conosci il nostro team! Professionisti dedicati alla tua salute. Vieni a trovarci! #Team #Farmacisti',
          '💚 Il sorriso che fa la differenza! Il nostro staff è sempre pronto ad aiutarti. #Accoglienza #Professionalità',
          '🤝 La tua salute è la nostra missione! Scopri chi si prende cura di te ogni giorno. #Staff #Dedizione',
        ],
      };
      
      const selectedCopies = copies[contentType];
      setPostText(selectedCopies[Math.floor(Math.random() * selectedCopies.length)]);
      setIsGeneratingCopy(false);
    }, 2000);
  };

  const generateImage = () => {
    setIsGeneratingImage(true);
    setTimeout(() => {
      const images = {
        product: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
        promo: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800',
        event: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        team: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800',
      };
      setGeneratedImage(images[contentType]);
      setIsGeneratingImage(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-white">Crea un nuovo post/stories</h2>
              <p className="text-pink-100 text-sm">Seleziona obiettivo e lascia che l'AI ottimizzi il tuo post ✨</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">AI Powered</span>
          </div>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Left Side - Form */}
          <div className="w-1/2 p-8 overflow-y-auto">
            {/* Platform Selection */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Seleziona piattaforma
              </label>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setPlatform('facebook')}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    platform === 'facebook'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">📘</span>
                    <span className="font-semibold text-gray-900">Facebook</span>
                    {platform === 'facebook' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-blue-600 rounded-full"
                      />
                    )}
                  </div>
                </motion.button>
                
                <motion.button
                  onClick={() => setPlatform('instagram')}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    platform === 'instagram'
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-300 hover:border-pink-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">📷</span>
                    <span className="font-semibold text-gray-900">Instagram</span>
                    {platform === 'instagram' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-pink-600 rounded-full"
                      />
                    )}
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Post Type */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Tipo di contenuto
              </label>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setPostType('post')}
                  className={`flex-1 px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                    postType === 'post'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 text-gray-700 hover:border-blue-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Post
                </motion.button>
                <motion.button
                  onClick={() => setPostType('stories')}
                  className={`flex-1 px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                    postType === 'stories'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 text-gray-700 hover:border-blue-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Stories
                </motion.button>
              </div>
            </div>

            {/* Content Topic */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Di cosa parla il tuo post?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'product' as const, label: 'Prodotto', icon: '💊' },
                  { id: 'promo' as const, label: 'Offerta', icon: '🎉' },
                  { id: 'event' as const, label: 'Evento', icon: '📅' },
                  { id: 'team' as const, label: 'Team', icon: '👥' },
                ].map((topic) => (
                  <motion.button
                    key={topic.id}
                    onClick={() => setContentType(topic.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      contentType === topic.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-3xl mb-2">{topic.icon}</div>
                    <p className="text-sm font-semibold text-gray-900">{topic.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Post Text */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Scrivi il tuo post
              </label>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                rows={5}
                placeholder="Scrivi qui..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <motion.button
                onClick={generateCopy}
                disabled={isGeneratingCopy}
                className="mt-2 flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                whileHover={{ x: 5 }}
              >
                <Wand2 className="w-4 h-4" />
                {isGeneratingCopy ? 'Generando copy magico...' : 'Hai bisogno di ispirazione? Genera un nuovo copy'}
              </motion.button>
            </div>

            {/* Media */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">Media</label>
              <div className="grid grid-cols-3 gap-3">
                <motion.button
                  className="p-4 border-2 border-gray-300 rounded-lg hover:border-purple-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImageIcon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-xs text-gray-600">Foto/Video</p>
                </motion.button>
                <motion.button
                  onClick={generateImage}
                  disabled={isGeneratingImage}
                  className="p-4 border-2 border-purple-300 bg-purple-50 rounded-lg hover:border-purple-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Wand2 className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <p className="text-xs text-purple-700 font-medium">
                    {isGeneratingImage ? 'Generando...' : 'Genera con AI'}
                  </p>
                </motion.button>
                <motion.button
                  className="p-4 border-2 border-gray-300 rounded-lg hover:border-purple-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-xs text-gray-600">Template</p>
                </motion.button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Salva in bozze
              </motion.button>
              <motion.button
                className="px-6 py-3 border-2 border-blue-500 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Programma
              </motion.button>
              <motion.button
                className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Pubblica ora
              </motion.button>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="w-1/2 bg-gray-50 p-8 border-l border-gray-200 overflow-y-auto flex items-center justify-center">
            <SocialPreview
              platform={platform || 'facebook'}
              postType={postType}
              postText={postText}
              generatedImage={generatedImage}
              isGeneratingImage={isGeneratingImage}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Social Preview Component
function SocialPreview({
  platform,
  postType,
  postText,
  generatedImage,
  isGeneratingImage,
}: {
  platform: 'facebook' | 'instagram';
  postType: 'post' | 'stories';
  postText: string;
  generatedImage: string | null;
  isGeneratingImage: boolean;
}) {
  if (postType === 'stories') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-64 h-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden relative"
      >
        {/* Stories Preview */}
        <div className="relative h-full">
          {isGeneratingImage ? (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          ) : generatedImage ? (
            <img src={generatedImage} alt="Story" className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-gray-400" />
            </div>
          )}
          
          {/* Story Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50">
            <div className="p-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                F
              </div>
              <span className="text-white font-semibold text-sm">Farmacia San Marco</span>
            </div>
            
            {postText && (
              <div className="absolute bottom-20 left-0 right-0 px-6">
                <p className="text-white text-sm font-medium drop-shadow-lg">{postText}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-md"
    >
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
        {/* Preview Header */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              F
            </div>
            <div>
              <p className="font-semibold text-gray-900">Farmacia San Marco</p>
              <p className="text-xs text-gray-500">2 ore fa</p>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        {postText && (
          <div className="p-4">
            <p className="text-sm text-gray-800 whitespace-pre-wrap">{postText}</p>
          </div>
        )}

        {/* Preview Image */}
        <div className="relative aspect-square bg-gray-200">
          {isGeneratingImage ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-12 h-12 text-purple-600" />
              </motion.div>
            </div>
          ) : generatedImage ? (
            <img src={generatedImage} alt="Post" className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-gray-400" />
            </div>
          )}
        </div>

        {/* Preview Footer */}
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-around text-gray-600">
            <button className="flex items-center gap-1 text-sm hover:text-blue-600">
              <span>👍</span> Mi piace
            </button>
            <button className="flex items-center gap-1 text-sm hover:text-blue-600">
              <span>💬</span> Commenta
            </button>
            <button className="flex items-center gap-1 text-sm hover:text-blue-600">
              <span>🔄</span> Condividi
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        Anteprima {platform === 'facebook' ? 'Facebook' : 'Instagram'}
      </p>
    </motion.div>
  );
}
