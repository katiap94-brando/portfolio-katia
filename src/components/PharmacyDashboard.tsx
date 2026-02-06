import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Package,
  Users,
  Mail,
  Share2,
  Euro,
  ShoppingCart,
  AlertCircle,
  Search,
  Filter,
  Calendar,
  Eye,
  BarChart3,
  Send,
  Plus,
  Sparkles,
} from 'lucide-react';
import { AIAdCreator } from './AIAdCreator';
import { AISocialCreator } from './AISocialCreator';

type Tab = 'overview' | 'prodotti' | 'clienti' | 'newsletter' | 'social' | 'ads';

export function PharmacyDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [showAIAdCreator, setShowAIAdCreator] = useState(false);
  const [showAISocialCreator, setShowAISocialCreator] = useState(false);

  const tabs = [
    { id: 'overview' as const, label: 'Panoramica', icon: BarChart3 },
    { id: 'prodotti' as const, label: 'Prodotti', icon: Package },
    { id: 'clienti' as const, label: 'Clienti', icon: Users },
    { id: 'newsletter' as const, label: 'Newsletter', icon: Mail },
    { id: 'social' as const, label: 'Social Media', icon: Share2 },
    { id: 'ads' as const, label: 'Campagne ADS', icon: Eye },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">PharmaDash</h1>
            <p className="text-blue-100 text-sm">Dashboard Gestionale Farmacia</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-blue-100">Ultimo aggiornamento</p>
              <p className="text-sm font-semibold text-white">Oggi, 14:30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && <OverviewContent key="overview" />}
          {activeTab === 'prodotti' && <ProdottiContent key="prodotti" />}
          {activeTab === 'clienti' && <ClientiContent key="clienti" />}
          {activeTab === 'newsletter' && <NewsletterContent key="newsletter" />}
          {activeTab === 'social' && <SocialContent key="social" onCreateNew={() => setShowAISocialCreator(true)} />}
          {activeTab === 'ads' && <AdsContent key="ads" onCreateNew={() => setShowAIAdCreator(true)} />}
        </AnimatePresence>
      </div>

      {/* AI Creators */}
      <AnimatePresence>
        {showAIAdCreator && <AIAdCreator onClose={() => setShowAIAdCreator(false)} />}
        {showAISocialCreator && <AISocialCreator onClose={() => setShowAISocialCreator(false)} />}
      </AnimatePresence>
    </div>
  );
}

// Overview Content
function OverviewContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Vendite Oggi"
          value="€2.847"
          change="+12.5%"
          trend="up"
          icon={Euro}
          color="blue"
        />
        <KPICard
          title="Ordini"
          value="47"
          change="+8.2%"
          trend="up"
          icon={ShoppingCart}
          color="green"
        />
        <KPICard
          title="Prodotti in Scadenza"
          value="12"
          change="Entro 30gg"
          trend="warning"
          icon={AlertCircle}
          color="orange"
        />
        <KPICard
          title="Nuovi Clienti"
          value="8"
          change="+3 vs ieri"
          trend="up"
          icon={Users}
          color="purple"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Vendite Settimanali</h3>
          <div className="space-y-3">
            {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map((day, i) => {
              const values = [2100, 2400, 1800, 2900, 3200, 2800, 1900];
              return (
                <div key={day} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 w-8">{day}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-3"
                      initial={{ width: 0 }}
                      animate={{ width: `${(values[i] / 3500) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    >
                      <span className="text-xs font-semibold text-white">
                        €{values[i]}
                      </span>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Prodotti Più Venduti</h3>
          <div className="space-y-3">
            {[
              { name: 'Tachipirina 1000mg', sales: 45, stock: 120 },
              { name: 'Aspirina 500mg', sales: 38, stock: 95 },
              { name: 'Moment 200mg', sales: 32, stock: 80 },
              { name: 'Augmentin antibiotico', sales: 28, stock: 45 },
              { name: 'Bentelan compresse', sales: 24, stock: 60 },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                className="bg-white rounded-lg p-3 flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-500">Stock: {product.stock} unità</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-600">{product.sales}</p>
                  <p className="text-xs text-gray-500">vendite</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Prodotti Content
function ProdottiContent() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Tachipirina 1000mg', category: 'Antidolorifici', stock: 120, price: 8.50, expiry: '2025-12-31', status: 'ok' },
    { id: 2, name: 'Aspirina 500mg', category: 'Antinfiammatori', stock: 95, price: 6.20, expiry: '2025-08-15', status: 'ok' },
    { id: 3, name: 'Moment 200mg', category: 'Antidolorifici', stock: 80, price: 7.80, expiry: '2025-03-20', status: 'warning' },
    { id: 4, name: 'Augmentin antibiotico', category: 'Antibiotici', stock: 45, price: 15.40, expiry: '2025-02-28', status: 'warning' },
    { id: 5, name: 'Enterogermina fiale', category: 'Integratori', stock: 150, price: 12.90, expiry: '2026-01-10', status: 'ok' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestione Prodotti</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          Nuovo Prodotto
        </motion.button>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cerca prodotti..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filtri
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Prodotto</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Categoria</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Prezzo</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Scadenza</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stato</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product, i) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-gray-50 cursor-pointer"
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{product.name}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-medium ${product.stock < 50 ? 'text-orange-600' : 'text-gray-900'}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">€{product.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.expiry}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.status === 'ok' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {product.status === 'ok' ? 'OK' : 'In scadenza'}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// Clienti Content
function ClientiContent() {
  const clients = [
    { id: 1, name: 'Mario Rossi', email: 'mario.rossi@email.com', phone: '+39 340 1234567', orders: 23, total: 487.50, lastVisit: '2 giorni fa' },
    { id: 2, name: 'Laura Bianchi', email: 'laura.b@email.com', phone: '+39 335 9876543', orders: 18, total: 356.20, lastVisit: '1 settimana fa' },
    { id: 3, name: 'Giuseppe Verdi', email: 'g.verdi@email.com', phone: '+39 348 5551234', orders: 31, total: 672.80, lastVisit: 'Oggi' },
    { id: 4, name: 'Anna Ferrari', email: 'anna.ferrari@email.com', phone: '+39 342 7778888', orders: 12, total: 289.40, lastVisit: '3 giorni fa' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Database Clienti</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          Nuovo Cliente
        </motion.button>
      </div>

      <div className="grid gap-4">
        {clients.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {client.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{client.email}</p>
                  <p className="text-sm text-gray-600">{client.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Ultimo accesso</p>
                <p className="text-sm font-medium text-gray-900">{client.lastVisit}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Ordini totali</p>
                <p className="text-lg font-semibold text-gray-900">{client.orders}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Spesa totale</p>
                <p className="text-lg font-semibold text-blue-600">€{client.total.toFixed(2)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Newsletter Content
function NewsletterContent() {
  const campaigns = [
    { id: 1, name: 'Promozione Inverno 2025', status: 'sent', sent: 1247, opened: 892, clicked: 234, date: '15 Gen 2025' },
    { id: 2, name: 'Novità Integratori', status: 'draft', sent: 0, opened: 0, clicked: 0, date: 'Bozza' },
    { id: 3, name: 'Consigli Influenza', status: 'scheduled', sent: 1180, opened: 0, clicked: 0, date: '20 Feb 2025' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Campagne Newsletter</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          Nuova Campagna
        </motion.button>
      </div>

      <div className="grid gap-4">
        {campaigns.map((campaign, i) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{campaign.name}</h3>
                <p className="text-sm text-gray-600">{campaign.date}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                campaign.status === 'sent' ? 'bg-green-100 text-green-700' :
                campaign.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {campaign.status === 'sent' ? 'Inviata' : campaign.status === 'draft' ? 'Bozza' : 'Programmata'}
              </span>
            </div>
            
            {campaign.status === 'sent' && (
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Inviate</p>
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-blue-600" />
                    <p className="text-lg font-semibold text-gray-900">{campaign.sent}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Aperte</p>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-green-600" />
                    <p className="text-lg font-semibold text-gray-900">{campaign.opened}</p>
                    <span className="text-xs text-gray-500">({((campaign.opened/campaign.sent)*100).toFixed(0)}%)</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Click</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <p className="text-lg font-semibold text-gray-900">{campaign.clicked}</p>
                    <span className="text-xs text-gray-500">({((campaign.clicked/campaign.sent)*100).toFixed(0)}%)</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Social Content
function SocialContent({ onCreateNew }: { onCreateNew: () => void }) {
  const posts = [
    { id: 1, platform: 'Facebook', content: '🌿 Scopri i nuovi integratori naturali per il benessere invernale!', likes: 234, comments: 45, shares: 12, date: '2 giorni fa', status: 'published' },
    { id: 2, platform: 'Instagram', content: '💊 Consigli per prevenire l\'influenza stagionale', likes: 567, comments: 89, shares: 34, date: '5 giorni fa', status: 'published' },
    { id: 3, platform: 'Facebook', content: '⏰ Orari speciali per le festività', likes: 0, comments: 0, shares: 0, date: 'Programmato 20 Feb', status: 'scheduled' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Social Media Manager</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCreateNew}
        >
          <Plus className="w-4 h-4" />
          Nuovo Post
        </motion.button>
      </div>

      <div className="grid gap-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  post.platform === 'Facebook' ? 'bg-blue-100' : 'bg-pink-100'
                }`}>
                  <span className="text-xl">{post.platform === 'Facebook' ? '📘' : '📷'}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.platform}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {post.status === 'published' ? 'Pubblicato' : 'Programmato'}
              </span>
            </div>
            
            <p className="text-gray-700 mb-4">{post.content}</p>
            
            {post.status === 'published' && (
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl mb-1">❤️</p>
                  <p className="text-sm font-semibold text-gray-900">{post.likes}</p>
                  <p className="text-xs text-gray-500">Mi piace</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-1">💬</p>
                  <p className="text-sm font-semibold text-gray-900">{post.comments}</p>
                  <p className="text-xs text-gray-500">Commenti</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-1">🔄</p>
                  <p className="text-sm font-semibold text-gray-900">{post.shares}</p>
                  <p className="text-xs text-gray-500">Condivisioni</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ADS Content
function AdsContent({ onCreateNew }: { onCreateNew: () => void }) {
  const campaigns = [
    { id: 1, name: 'Campagna Google Ads - Integratori', platform: 'Google', budget: 500, spent: 347, impressions: 45200, clicks: 892, conversions: 23, status: 'active' },
    { id: 2, name: 'Facebook Ads - Promozione Inverno', platform: 'Facebook', budget: 300, spent: 280, impressions: 32100, clicks: 654, conversions: 18, status: 'active' },
    { id: 3, name: 'Instagram Ads - Brand Awareness', platform: 'Instagram', budget: 200, spent: 200, impressions: 28500, clicks: 421, conversions: 12, status: 'completed' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Campagne Pubblicitarie</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCreateNew}
        >
          <Plus className="w-4 h-4" />
          Nuova Campagna
        </motion.button>
      </div>

      <div className="grid gap-4">
        {campaigns.map((campaign, i) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  campaign.platform === 'Google' ? 'bg-red-100' :
                  campaign.platform === 'Facebook' ? 'bg-blue-100' : 'bg-pink-100'
                }`}>
                  <span className="text-xl">
                    {campaign.platform === 'Google' ? '🔍' : 
                     campaign.platform === 'Facebook' ? '📘' : '📷'}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                  <p className="text-sm text-gray-600">{campaign.platform} Ads</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                campaign.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {campaign.status === 'active' ? 'Attiva' : 'Completata'}
              </span>
            </div>

            {/* Budget Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Budget utilizzato</span>
                <span className="text-sm font-semibold text-gray-900">
                  €{campaign.spent} / €{campaign.budget}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500 mb-1">Impressioni</p>
                <p className="text-lg font-semibold text-gray-900">{campaign.impressions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Click</p>
                <p className="text-lg font-semibold text-gray-900">{campaign.clicks}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">CTR</p>
                <p className="text-lg font-semibold text-blue-600">
                  {((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Conversioni</p>
                <p className="text-lg font-semibold text-green-600">{campaign.conversions}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Brand Identity Content
function BrandIdentityContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Identità Brand</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          Nuovo Elemento Brand
        </motion.button>
      </div>

      <div className="grid gap-4">
        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Logo</h3>
                <p className="text-sm text-gray-600">Brand Identity</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Attivo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">PharmaDash</p>
              <p className="text-xs text-gray-500">Logo principale</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Colore Brand</h3>
                <p className="text-sm text-gray-600">Brand Identity</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Attivo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Blu-Purple Gradient</p>
              <p className="text-xs text-gray-500">Colore principale</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Font Brand</h3>
                <p className="text-sm text-gray-600">Brand Identity</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Attivo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Roboto</p>
              <p className="text-xs text-gray-500">Font principale</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// User Flow Content
function UserFlowContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">User Flow</h2>
        <motion.button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          Nuovo Flusso Utente
        </motion.button>
      </div>

      <div className="grid gap-4">
        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Registrazione Utente</h3>
                <p className="text-sm text-gray-600">User Flow</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Attivo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Registrazione Utente</p>
              <p className="text-xs text-gray-500">Flusso di registrazione</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Acquisto Prodotto</h3>
                <p className="text-sm text-gray-600">User Flow</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Attivo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Acquisto Prodotto</p>
              <p className="text-xs text-gray-500">Flusso di acquisto</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Supporto Clienti</h3>
                <p className="text-sm text-gray-600">User Flow</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Attivo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Supporto Clienti</p>
              <p className="text-xs text-gray-500">Flusso di supporto</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// KPI Card Component
function KPICard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon, 
  color 
}: { 
  title: string; 
  value: string; 
  change: string; 
  trend: 'up' | 'down' | 'warning'; 
  icon: any; 
  color: string;
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600',
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-xl p-6 border border-gray-200"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-600">{title}</p>
        <div className={`w-10 h-10 rounded-lg ${colorClasses} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <div className="flex items-center gap-1">
        {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
        {trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
        {trend === 'warning' && <AlertCircle className="w-4 h-4 text-orange-600" />}
        <span className={`text-sm font-medium ${
          trend === 'up' ? 'text-green-600' :
          trend === 'down' ? 'text-red-600' :
          'text-orange-600'
        }`}>
          {change}
        </span>
      </div>
    </motion.div>
  );
}