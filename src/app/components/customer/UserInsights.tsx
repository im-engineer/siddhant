import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Leaf, Award, ShoppingBag, Target, Zap } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';

export function UserInsights() {
  const insights = [
    {
      title: 'Spending Analytics',
      icon: DollarSign,
      gradient: 'from-cyan-500 to-blue-500',
      data: [
        { label: 'This Month', value: '$1,247', change: '+12%', trend: 'up' },
        { label: 'Avg per Order', value: '$156', change: '-5%', trend: 'down' },
        { label: 'Budget Status', value: '78%', change: 'On track', trend: 'neutral' },
      ],
    },
    {
      title: 'Sustainability Score',
      icon: Leaf,
      gradient: 'from-green-500 to-emerald-500',
      data: [
        { label: 'CO2 Saved', value: '24.8kg', change: '+18%', trend: 'up' },
        { label: 'Eco Purchases', value: '68%', change: '+25%', trend: 'up' },
        { label: 'Green Rank', value: 'Top 15%', change: 'Rising', trend: 'neutral' },
      ],
    },
    {
      title: 'Shopping Behavior',
      icon: ShoppingBag,
      gradient: 'from-purple-500 to-pink-500',
      data: [
        { label: 'Orders This Year', value: '47', change: '+8', trend: 'up' },
        { label: 'Favorite Category', value: 'Tech', change: '42% of orders', trend: 'neutral' },
        { label: 'Avg Delivery Time', value: '12 min', change: '-3 min', trend: 'down' },
      ],
    },
  ];

  const loyaltyTiers = [
    { name: 'Bronze', min: 0, max: 1000, color: 'from-amber-700 to-amber-500' },
    { name: 'Silver', min: 1000, max: 5000, color: 'from-slate-400 to-slate-300' },
    { name: 'Gold', min: 5000, max: 15000, color: 'from-yellow-500 to-yellow-300' },
    { name: 'Platinum', min: 15000, max: Infinity, color: 'from-purple-500 to-purple-300' },
  ];

  const currentPoints = 3450;
  const currentTier = loyaltyTiers.find(tier => currentPoints >= tier.min && currentPoints < tier.max);
  const nextTier = loyaltyTiers[loyaltyTiers.indexOf(currentTier!) + 1];
  const tierProgress = nextTier 
    ? ((currentPoints - currentTier!.min) / (nextTier.min - currentTier!.min)) * 100
    : 100;

  const recommendations = [
    {
      title: 'Budget Optimization',
      description: 'You could save $124/month by choosing eco-friendly alternatives',
      action: 'View Alternatives',
      icon: Target,
      color: 'cyan',
    },
    {
      title: 'Sustainable Options',
      description: '12 products in your wishlist have greener alternatives',
      action: 'Explore Now',
      icon: Leaf,
      color: 'green',
    },
    {
      title: 'Smart Reorder',
      description: 'AI predicts you\'ll need coffee pods in 3 days',
      action: 'Auto-Order',
      icon: Zap,
      color: 'purple',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Your AI Insights</h2>
        <p className="text-gray-400">Personalized analytics and smart recommendations</p>
      </motion.div>

      {/* Loyalty Program */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/20 backdrop-blur-xl border-purple-500/30 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentTier?.color} flex items-center justify-center`}>
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">{currentTier?.name} Member</h3>
              <p className="text-gray-300">
                {currentPoints.toLocaleString()} points
                {nextTier && ` • ${(nextTier.min - currentPoints).toLocaleString()} to ${nextTier.name}`}
              </p>
            </div>
            <Badge className="bg-white/10 border-white/20 text-white text-lg px-6 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              +248 this month
            </Badge>
          </div>

          {nextTier && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Progress to {nextTier.name}</span>
                <span className="text-sm font-semibold text-white">{Math.round(tierProgress)}%</span>
              </div>
              <Progress value={tierProgress} className="h-3 mb-4" />
              <div className="grid grid-cols-3 gap-4">
                {['5% Extra Cashback', 'Priority Delivery', 'Exclusive Deals'].map((benefit, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-xs text-gray-400 mb-1">Unlock at {nextTier.name}</p>
                    <p className="text-sm font-medium text-white">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </motion.div>

      {/* Analytics Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{insight.title}</h3>
                </div>

                <div className="space-y-4">
                  {insight.data.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                        <p className="text-lg font-bold text-white">{item.value}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`${
                          item.trend === 'up'
                            ? 'border-green-500/50 text-green-400'
                            : item.trend === 'down'
                            ? 'border-red-500/50 text-red-400'
                            : 'border-gray-500/50 text-gray-400'
                        }`}
                      >
                        {item.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* AI Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white mb-4">AI Recommendations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer"
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-5 h-full hover:border-white/20 transition-all">
                  <div className={`w-10 h-10 rounded-lg bg-${rec.color}-500/20 flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 text-${rec.color}-400`} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{rec.title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{rec.description}</p>
                  <button className={`text-sm font-medium text-${rec.color}-400 hover:text-${rec.color}-300 transition-colors`}>
                    {rec.action} →
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
