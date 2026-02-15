import { motion } from 'motion/react';
import { Sparkles, TrendingUp, DollarSign, Target, Users, Calendar } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const demandForecast = [
  { week: 'W1', predicted: 4200, actual: 4100 },
  { week: 'W2', predicted: 4500, actual: 4600 },
  { week: 'W3', predicted: 4800, actual: 4750 },
  { week: 'W4', predicted: 5200, actual: null },
  { week: 'W5', predicted: 5500, actual: null },
  { week: 'W6', predicted: 5800, actual: null },
];

const customerSegments = [
  { name: 'Premium', value: 35, color: '#a855f7' },
  { name: 'Regular', value: 45, color: '#06b6d4' },
  { name: 'New', value: 20, color: '#10b981' },
];

const pricingRecommendations = [
  {
    product: 'Neural Smart Watch',
    currentPrice: 299,
    suggestedPrice: 279,
    impact: '+15% sales volume',
    reason: 'Competitive pricing analysis',
    confidence: 94,
  },
  {
    product: 'Quantum Headphones',
    currentPrice: 199,
    suggestedPrice: 219,
    impact: '+8% profit margin',
    reason: 'High demand, low competition',
    confidence: 89,
  },
  {
    product: 'Smart Fabric Jacket',
    currentPrice: 349,
    suggestedPrice: 329,
    impact: '+12% conversion',
    reason: 'Price sensitivity detected',
    confidence: 92,
  },
];

const aiRecommendations = [
  {
    title: 'Promotional Strategy',
    description: 'Launch flash sale on Smart Watches this Saturday 3-5 PM for maximum impact',
    impact: '+$12K revenue',
    priority: 'high',
    icon: Target,
  },
  {
    title: 'Inventory Optimization',
    description: 'Increase Holographic Sneakers stock by 50 units before next week',
    impact: 'Prevent stockout',
    priority: 'high',
    icon: TrendingUp,
  },
  {
    title: 'Customer Retention',
    description: '47 premium customers at risk of churning - send personalized offers',
    impact: 'Save $8.4K LTV',
    priority: 'medium',
    icon: Users,
  },
  {
    title: 'Seasonal Planning',
    description: 'Winter collection demand predicted to peak in 3 weeks',
    impact: 'Prepare stock',
    priority: 'medium',
    icon: Calendar,
  },
];

export function AIInsights() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">AI-Powered Insights</h2>
            <p className="text-gray-400">Data-driven recommendations for your store</p>
          </div>
        </div>
      </motion.div>

      {/* AI Recommendations Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {aiRecommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 hover:border-white/20 transition-all h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    rec.priority === 'high' ? 'from-red-500 to-orange-500' : 'from-cyan-500 to-blue-500'
                  } flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{rec.title}</h3>
                      <Badge
                        variant="outline"
                        className={
                          rec.priority === 'high'
                            ? 'border-red-500/50 text-red-400'
                            : 'border-orange-500/50 text-orange-400'
                        }
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{rec.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                        {rec.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 border-0">
                  Take Action
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Demand Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">6-Week Demand Forecast</h3>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                AI Powered
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={demandForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#a855f7"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Predicted"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  name="Actual"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-sm text-purple-300">
                <Sparkles className="w-4 h-4 inline mr-2" />
                AI predicts 38% revenue increase in next 6 weeks based on current trends
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Customer Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Customer Segments</h3>
            <div className="flex items-center justify-center mb-6">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {customerSegments.map((segment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: segment.color }} />
                    <span className="text-white font-medium">{segment.name}</span>
                  </div>
                  <span className="text-gray-400">{segment.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Pricing Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">AI Pricing Recommendations</h3>
          <div className="space-y-4">
            {pricingRecommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <p className="font-semibold text-white mb-1">{rec.product}</p>
                    <p className="text-sm text-gray-400">{rec.reason}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Current</p>
                    <p className="text-lg font-bold text-white">${rec.currentPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Suggested</p>
                    <p className="text-lg font-bold text-cyan-400">${rec.suggestedPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Impact</p>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {rec.impact}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 mb-1">Confidence</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${rec.confidence}%` }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                          />
                        </div>
                        <span className="text-xs font-medium text-cyan-400">{rec.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
