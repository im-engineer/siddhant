import { useState } from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  Users,
  Package,
  TrendingUp,
  Settings,
  LogOut,
  Shield,
  Activity,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import type { User as UserType } from '@/app/App';
import { AdminOverview } from '@/app/components/admin/AdminOverview';
import { UserManagement } from '@/app/components/admin/UserManagement';
import { SystemMonitor } from '@/app/components/admin/SystemMonitor';

interface AdminDashboardProps {
  user: UserType;
  onLogout: () => void;
}

type Tab = 'overview' | 'users' | 'monitor';

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: LayoutDashboard },
    { id: 'users' as const, label: 'Users', icon: Users },
    { id: 'monitor' as const, label: 'System Monitor', icon: Activity },
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Portal</h1>
                <p className="text-sm text-gray-400">Platform Control Center</p>
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
                      layoutId="adminActiveTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl"
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
        {activeTab === 'overview' && <AdminOverview />}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'monitor' && <SystemMonitor />}
      </div>
    </div>
  );
}
