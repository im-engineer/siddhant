import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Sparkles, Shield, Store } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import type { User as UserType } from '@/app/App';
import { toast } from 'sonner';

interface LoginScreenProps {
  onLogin: (user: UserType) => void;
}

const demoAccounts = [
  {
    role: 'customer' as const,
    email: 'customer@future.ai',
    password: 'demo2030',
    name: 'Alex Chen',
    icon: User,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Experience AI-powered shopping',
  },
  {
    role: 'admin' as const,
    email: 'admin@future.ai',
    password: 'demo2030',
    name: 'Admin Portal',
    icon: Shield,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Platform analytics & control',
  },
  {
    role: 'merchant' as const,
    email: 'merchant@future.ai',
    password: 'demo2030',
    name: 'Merchant Hub',
    icon: Store,
    gradient: 'from-orange-500 to-red-500',
    description: 'Manage your store with AI',
  },
];

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  const handleDemoLogin = (index: number) => {
    const account = demoAccounts[index];
    setSelectedRole(index);
    
    setTimeout(() => {
      onLogin({
        email: account.email,
        role: account.role,
        name: account.name,
      });
      toast.success(`Welcome back, ${account.name}!`);
    }, 800);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Login content */}
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-12 h-12 text-cyan-400" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              FutureShop
            </h1>
            <Sparkles className="w-12 h-12 text-purple-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-2"
          >
            Next-Generation E-Commerce Platform
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            Powered by AI • Built for 2030 • Experience the Future
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {demoAccounts.map((account, index) => {
            const Icon = account.icon;
            return (
              <motion.div
                key={account.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-8 cursor-pointer group">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${account.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${account.gradient} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{account.name}</h3>
                    <p className="text-gray-400 mb-6 min-h-[3rem]">{account.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Email:</span>
                        <code className="text-cyan-400 bg-black/30 px-2 py-1 rounded text-xs">
                          {account.email}
                        </code>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Password:</span>
                        <code className="text-cyan-400 bg-black/30 px-2 py-1 rounded text-xs">
                          {account.password}
                        </code>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleDemoLogin(index)}
                      disabled={selectedRole === index}
                      className={`w-full bg-gradient-to-r ${account.gradient} hover:opacity-90 border-0 text-white relative overflow-hidden group/btn`}
                    >
                      {selectedRole === index ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Logging in...
                        </motion.span>
                      ) : (
                        <>
                          <span className="relative z-10">Demo Login</span>
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${account.gradient} opacity-0 group-hover/btn:opacity-100`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3 }}
                          />
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All systems operational • AI ready • Edge-optimized
          </div>
        </motion.div>
      </div>
    </div>
  );
}
