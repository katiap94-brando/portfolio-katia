import { motion } from 'framer-motion';
import { useState } from 'react';
import { IPhoneMockup } from './IPhoneMockup';
import { Search, Music, Heart, User, Lock, Mail } from 'lucide-react';

// Login Prototype
export function LoginPrototype() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <IPhoneMockup delay={0} scale={0.7}>
          <div className="w-full h-full bg-gradient-to-b from-[#1a1a1a] to-[#000] p-8 flex flex-col justify-center">
            {/* Logo */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Music className="w-16 h-16 text-[#8B4513] mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white">MaestroMind</h1>
              <p className="text-gray-400 text-sm mt-2">Benvenuto</p>
            </motion.div>

            {/* Email Input */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className={`flex items-center bg-white/10 rounded-2xl px-4 py-3 border-2 transition-colors ${
                focused === 'email' ? 'border-[#8B4513]' : 'border-transparent'
              }`}>
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`flex items-center bg-white/10 rounded-2xl px-4 py-3 border-2 transition-colors ${
                focused === 'password' ? 'border-[#8B4513]' : 'border-transparent'
              }`}>
                <Lock className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused(null)}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                />
              </div>
            </motion.div>

            {/* Login Button */}
            <motion.button
              className="w-full bg-[#8B4513] text-white py-4 rounded-full font-semibold mb-4"
              whileHover={{ scale: 1.02, backgroundColor: '#A0522D' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Accedi
            </motion.button>

            {/* Forgot Password */}
            <motion.p
              className="text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Password dimenticata?
            </motion.p>
          </div>
        </IPhoneMockup>
        
      </motion.div>
      
      <div className="text-center">
        <h3 className="font-semibold text-sm text-gray-900 mb-1">Login</h3>
        <p className="text-xs text-gray-600">Digita qualcosa!</p>
      </div>
    </div>
  );
}

// Search Prototype
export function SearchPrototype() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const composers = [
    { name: 'Mozart', genre: 'Classico', image: '🎼' },
    { name: 'Beethoven', genre: 'Classico', image: '🎹' },
    { name: 'Bach', genre: 'Barocco', image: '🎻' },
    { name: 'Chopin', genre: 'Romantico', image: '🎵' },
  ];

  const filteredComposers = composers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <IPhoneMockup delay={0.1} scale={0.7}>
          <div className="w-full h-full bg-gradient-to-b from-[#f5f1ed] to-white p-6">
            {/* Header */}
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Esplora
            </motion.h2>

            {/* Search Bar */}
            <motion.div
              className="flex items-center bg-white rounded-2xl px-4 py-3 shadow-md mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Cerca compositori..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </motion.div>

            {/* Genre Filters */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              {['Tutti', 'Classico', 'Barocco', 'Romantico'].map((genre, i) => (
                <motion.button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${
                    selectedGenre === genre
                      ? 'bg-[#8B4513] text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  {genre}
                </motion.button>
              ))}
            </div>

            {/* Results */}
            <div className="space-y-3">
              {filteredComposers.map((composer, i) => (
                <motion.div
                  key={composer.name}
                  className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: '#fafafa' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-4xl">{composer.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-gray-900">{composer.name}</h3>
                    <p className="text-xs text-gray-600">{composer.genre}</p>
                  </div>
                  <Heart className="w-5 h-5 text-gray-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </IPhoneMockup>
        
      </motion.div>
      
      <div className="text-center">
        <h3 className="font-semibold text-sm text-gray-900 mb-1">Ricerca</h3>
        <p className="text-xs text-gray-600">Cerca compositori!</p>
      </div>
    </div>
  );
}

// Personalize Prototype
export function PersonalizePrototype() {
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);

  const instruments = [
    { name: 'Piano', icon: '🎹' },
    { name: 'Violino', icon: '🎻' },
    { name: 'Chitarra', icon: '🎸' },
    { name: 'Flauto', icon: '🪈' },
    { name: 'Batteria', icon: '🥁' },
    { name: 'Tromba', icon: '🎺' },
  ];

  const toggleInstrument = (name: string) => {
    setSelectedInstruments(prev =>
      prev.includes(name)
        ? prev.filter(i => i !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <IPhoneMockup delay={0.2} scale={0.7}>
          <div className="w-full h-full bg-gradient-to-b from-[#f5f1ed] to-white p-6">
            {/* Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Personalizza</h2>
              <p className="text-sm text-gray-600">Scegli i tuoi strumenti preferiti</p>
            </motion.div>

            {/* Instruments Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {instruments.map((instrument, i) => {
                const isSelected = selectedInstruments.includes(instrument.name);
                return (
                  <motion.button
                    key={instrument.name}
                    onClick={() => toggleInstrument(instrument.name)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? 'bg-[#8B4513] border-[#8B4513] text-white'
                        : 'bg-white border-gray-200 text-gray-900'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-4xl mb-2">{instrument.icon}</div>
                    <p className="text-xs font-semibold">{instrument.name}</p>
                  </motion.button>
                );
              })}
            </div>

            {/* Continue Button */}
            <motion.button
              className="w-full bg-black text-white py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.02, backgroundColor: '#333' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Continua ({selectedInstruments.length})
            </motion.button>
          </div>
        </IPhoneMockup>
        
      </motion.div>
      
      <div className="text-center">
        <h3 className="font-semibold text-sm text-gray-900 mb-1">Personalizza</h3>
        <p className="text-xs text-gray-600">Seleziona strumenti!</p>
      </div>
    </div>
  );
}

// Register Prototype
export function RegisterPrototype() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
  });

  const levels = ['Principiante', 'Intermedio', 'Avanzato'];

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <IPhoneMockup delay={0.3} scale={0.7}>
          <div className="w-full h-full bg-gradient-to-b from-white to-[#f5f1ed] p-6">
            {/* Progress Indicator */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    i <= step ? 'bg-[#8B4513]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Come ti chiami?</h2>
                <p className="text-sm text-gray-600 mb-6">Inserisci il tuo nome</p>
                
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white rounded-2xl px-4 py-4 border-2 border-gray-200 focus:border-[#8B4513] outline-none mb-6"
                />

                <motion.button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#8B4513] text-white py-4 rounded-full font-semibold"
                  whileHover={{ scale: 1.02, backgroundColor: '#A0522D' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continua
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Qual è il tuo livello?</h2>
                <p className="text-sm text-gray-600 mb-6">Seleziona il tuo livello</p>
                
                <div className="space-y-3 mb-6">
                  {levels.map((level, i) => (
                    <motion.button
                      key={level}
                      onClick={() => setFormData({ ...formData, level })}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                        formData.level === level
                          ? 'bg-[#8B4513] border-[#8B4513] text-white'
                          : 'bg-white border-gray-200'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <p className="font-semibold">{level}</p>
                    </motion.button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-900 py-4 rounded-full font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Indietro
                  </motion.button>
                  <motion.button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#8B4513] text-white py-4 rounded-full font-semibold"
                    whileHover={{ scale: 1.02, backgroundColor: '#A0522D' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continua
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                >
                  <span className="text-4xl">✓</span>
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Benvenuto!</h2>
                <p className="text-gray-600 mb-8">La tua registrazione è completa</p>
                
                <motion.button
                  onClick={() => {
                    setStep(1);
                    setFormData({ name: '', email: '', level: '' });
                  }}
                  className="bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: '#A0522D' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ricomincia
                </motion.button>
              </motion.div>
            )}
          </div>
        </IPhoneMockup>
        
      </motion.div>
      
      <div className="text-center">
        <h3 className="font-semibold text-sm text-gray-900 mb-1">Registrazione</h3>
        <p className="text-xs text-gray-600">Multi-step form!</p>
      </div>
    </div>
  );
}

// Dashboard Prototype
export function DashboardPrototype() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const lessons = [
    { id: 1, title: 'Teoria musicale base', progress: 75, color: '#8B4513' },
    { id: 2, title: 'Lettura delle note', progress: 50, color: '#A0522D' },
    { id: 3, title: 'Ritmo e tempo', progress: 30, color: '#CD853F' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <IPhoneMockup delay={0.4} scale={0.7}>
          <div className="w-full h-full bg-gradient-to-b from-[#f5f1ed] to-white p-6 overflow-hidden">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">I tuoi corsi</h2>
              <p className="text-sm text-gray-600">Continua il tuo percorso</p>
            </div>

            {/* Lessons List */}
            <div className="space-y-3">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-md cursor-pointer"
                  onClick={() => {
                    setActiveLesson(lesson.id);
                    setShowDetail(true);
                  }}
                  whileHover={{ scale: 1.02, backgroundColor: '#fafafa' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    borderLeft: `4px solid ${lesson.color}`,
                  }}
                >
                  <h3 className="font-semibold text-sm text-gray-900 mb-2">
                    {lesson.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: lesson.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${lesson.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {lesson.progress}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.button
              className="w-full mt-6 bg-black text-white py-3 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.02, backgroundColor: '#333' }}
              whileTap={{ scale: 0.98 }}
            >
              Inizia una nuova lezione
            </motion.button>

            {/* Detail Modal */}
            {showDetail && (
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="absolute inset-0 bg-white p-6 overflow-auto z-10"
                onClick={() => setShowDetail(false)}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {lessons.find(l => l.id === activeLesson)?.title}
                  </h3>
                  <button className="text-2xl text-gray-600">&times;</button>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-700 mb-2">Prossima lezione:</p>
                    <p className="font-semibold text-gray-900">Gli accordi maggiori</p>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
                    Continua
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </IPhoneMockup>
        
      </motion.div>
      
      <div className="text-center">
        <h3 className="font-semibold text-sm text-gray-900 mb-1">Dashboard</h3>
        <p className="text-xs text-gray-600">Clicca sui corsi!</p>
      </div>
    </div>
  );
}