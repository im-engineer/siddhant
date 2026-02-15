import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Store,
  Package,
  TrendingUp,
  Settings,
  LogOut,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import type { User as UserType } from '@/app/App';
import { MerchantOverview } from '@/app/components/merchant/MerchantOverview';
import { InventoryManagement } from '@/app/components/merchant/InventoryManagement';
import { AIInsights } from '@/app/components/merchant/AIInsights';

interface MerchantDashboardProps {
  user: UserType;
  onLogout: () => void;
}

type Tab = 'overview' | 'inventory' | 'insights';

export function MerchantDashboard({ user, onLogout }: MerchantDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
    { id: 'inventory' as const, label: 'Inventory', icon: Package },
    { id: 'insights' as const, label: 'AI Insights', icon: Sparkles },
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
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Merchant Hub</h1>
                <p className="text-sm text-gray-400">AI-Powered Store Management</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
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

          {/* Navigation */}
          <div className="flex gap-2 mt-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl transition-colors ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="merchantActiveTab"
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <MerchantOverview />}
        {activeTab === 'inventory' && <InventoryManagement />}
        {activeTab === 'insights' && <AIInsights />}
      </div>
    </div>
  );
}
