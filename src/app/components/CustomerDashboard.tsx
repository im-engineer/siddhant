import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Zap,
  MessageCircle,
  Scan,
  LogOut,
  Search,
  User,
  Heart,
  MapPin,
  Sparkles,
  ShoppingCart,
  TrendingUp,
  Package,
  Leaf,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import type { User as UserType } from '@/app/App';
import { HeroSection } from '@/app/components/customer/HeroSection';
import { AIAssistant } from '@/app/components/customer/AIAssistant';
import { ProductGrid } from '@/app/components/customer/ProductGrid';
import { DeliveryTracker } from '@/app/components/customer/DeliveryTracker';
import { UserInsights } from '@/app/components/customer/UserInsights';

interface CustomerDashboardProps {
  user: UserType;
  onLogout: () => void;
}

type Tab = 'home' | 'ai-assistant' | 'tracking' | 'insights';

export function CustomerDashboard({ user, onLogout }: CustomerDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [cartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'home' as const, label: 'Shop', icon: ShoppingBag },
    { id: 'ai-assistant' as const, label: 'AI Assistant', icon: Sparkles },
    { id: 'tracking' as const, label: 'Track Orders', icon: Package },
    { id: 'insights' as const, label: 'My Insights', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FutureShop
              </span>
            </motion.div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by image, voice, or intent..."
                  className="w-full pl-12 pr-4 py-6 bg-white/5 border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:bg-white/10 focus:border-cyan-500/50"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Scan className="w-4 h-4 text-gray-400" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="w-5 h-5 text-gray-300" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5 text-gray-300" />
                  {cartCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold"
                    >
                      {cartCount}
                    </motion.div>
                  )}
                </Button>
              </motion.div>

              <div className="h-8 w-px bg-white/10" />

              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-0.5"
                >
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-300" />
                  </div>
                </Button>
              </div>

              <Button
                onClick={onLogout}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="flex gap-2 mt-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl transition-colors ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSection />
            <ProductGrid searchQuery={searchQuery} />
          </motion.div>
        )}

        {activeTab === 'ai-assistant' && (
          <motion.div
            key="ai-assistant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AIAssistant />
          </motion.div>
        )}

        {activeTab === 'tracking' && (
          <motion.div
            key="tracking"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DeliveryTracker />
          </motion.div>
        )}

        {activeTab === 'insights' && (
          <motion.div
            key="insights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <UserInsights />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating quick actions */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 shadow-2xl flex items-center justify-center group relative overflow-hidden"
        >
          <MessageCircle className="w-7 h-7 text-white relative z-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse" />
        </motion.button>
      </motion.div>
    </div>
  );
}
