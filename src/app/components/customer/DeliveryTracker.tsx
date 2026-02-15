import { motion } from 'motion/react';
import { Package, MapPin, CheckCircle, Clock, Truck, Home } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';

const orders = [
  {
    id: 'FS2030-001',
    product: 'Neural Smart Watch',
    status: 'out-for-delivery',
    progress: 75,
    estimatedTime: '8 minutes',
    courier: 'Alex (EV-247)',
    location: { lat: 40.7128, lng: -74.0060 },
    carbonSaved: '2.4kg CO2',
    steps: [
      { label: 'Order Confirmed', completed: true, time: '10:30 AM' },
      { label: 'Packed', completed: true, time: '10:35 AM' },
      { label: 'Out for Delivery', completed: true, time: '10:45 AM' },
      { label: 'Delivered', completed: false, time: 'ETA: 10:53 AM' },
    ],
  },
  {
    id: 'FS2030-002',
    product: 'Quantum Headphones',
    status: 'processing',
    progress: 25,
    estimatedTime: '15 minutes',
    courier: 'Assigning...',
    carbonSaved: '1.8kg CO2',
    steps: [
      { label: 'Order Confirmed', completed: true, time: '10:40 AM' },
      { label: 'Packed', completed: false, time: 'In progress' },
      { label: 'Out for Delivery', completed: false, time: 'Pending' },
      { label: 'Delivered', completed: false, time: 'ETA: 10:55 AM' },
    ],
  },
];

export function DeliveryTracker() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Track Your Orders</h2>
        <p className="text-gray-400">Real-time AI-powered delivery tracking with live ETA updates</p>
      </motion.div>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-6 p-6">
                {/* Left side - Order details and tracking */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm text-gray-400">Order {order.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{order.product}</h3>
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 border-0 text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        ETA: {order.estimatedTime}
                      </Badge>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Delivery Progress</span>
                      <span className="text-sm font-semibold text-cyan-400">{order.progress}%</span>
                    </div>
                    <Progress value={order.progress} className="h-2" />
                  </div>

                  {/* Tracking steps */}
                  <div className="space-y-4 mb-6">
                    {order.steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="relative">
                          <motion.div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              step.completed
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                                : 'bg-white/10 border border-white/20'
                            }`}
                            animate={
                              !step.completed && idx === order.steps.findIndex(s => !s.completed)
                                ? { scale: [1, 1.1, 1] }
                                : {}
                            }
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {step.completed ? (
                              <CheckCircle className="w-5 h-5 text-white" />
                            ) : idx === order.steps.findIndex(s => !s.completed) ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"
                              />
                            ) : (
                              <div className="w-2 h-2 bg-white/30 rounded-full" />
                            )}
                          </motion.div>
                          {idx < order.steps.length - 1 && (
                            <div className={`absolute left-1/2 top-10 w-0.5 h-8 -translate-x-1/2 ${
                              step.completed ? 'bg-gradient-to-b from-cyan-500 to-purple-500' : 'bg-white/10'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className={`font-medium ${step.completed ? 'text-white' : 'text-gray-400'}`}>
                            {step.label}
                          </p>
                          <p className="text-sm text-gray-500">{step.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Courier info */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">Courier</p>
                      <p className="font-semibold text-white">{order.courier}</p>
                    </div>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Active
                    </Badge>
                  </div>

                  {/* Eco stats */}
                  <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <span className="text-lg">🌱</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-400">Eco-Route Optimized</p>
                        <p className="text-xs text-green-300/70">Carbon saved: {order.carbonSaved}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Live map */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden relative">
                    {/* Simulated map */}
                    <div className="absolute inset-0">
                      {/* Grid lines */}
                      <svg className="w-full h-full opacity-10">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>

                      {/* Route line */}
                      <svg className="absolute inset-0 w-full h-full">
                        <motion.path
                          d="M 100 400 Q 200 300, 300 200 T 450 100"
                          stroke="url(#routeGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="10 5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: order.progress / 100 }}
                          transition={{ duration: 2 }}
                        />
                        <defs>
                          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Start point (warehouse) */}
                      <motion.div
                        className="absolute"
                        style={{ left: '20%', top: '80%' }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border-2 border-purple-500">
                          <Package className="w-6 h-6 text-purple-400" />
                        </div>
                      </motion.div>

                      {/* End point (home) */}
                      <motion.div
                        className="absolute"
                        style={{ left: '75%', top: '15%' }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-500">
                          <Home className="w-6 h-6 text-cyan-400" />
                        </div>
                      </motion.div>

                      {/* Moving courier */}
                      {order.status === 'out-for-delivery' && (
                        <motion.div
                          className="absolute"
                          initial={{ left: '20%', top: '80%' }}
                          animate={{
                            left: ['20%', '45%', '75%'],
                            top: ['80%', '45%', '15%'],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <div className="relative">
                            <motion.div
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl"
                            />
                            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg">
                              <Truck className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Map overlay info */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-white">Live tracking enabled</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI prediction */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          ✨
                        </motion.div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white mb-1">AI Prediction</p>
                        <p className="text-xs text-gray-400">
                          Based on current traffic and route optimization, delivery is on time. 
                          Your package will arrive in {order.estimatedTime}.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
