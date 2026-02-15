import { motion } from 'motion/react';
import { Users, ShoppingBag, DollarSign, TrendingUp, ArrowUp, ArrowDown, Sparkles } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  {
    label: 'Total Users',
    value: '124,547',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    label: 'Orders Today',
    value: '8,234',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingBag,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Revenue',
    value: '$1.2M',
    change: '+18.7%',
    trend: 'up',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    label: 'AI Accuracy',
    value: '99.4%',
    change: '+0.3%',
    trend: 'up',
    icon: Sparkles,
    gradient: 'from-orange-500 to-red-500',
  },
];

const revenueData = [
  { month: 'Jan', revenue: 850000, orders: 12400 },
  { month: 'Feb', revenue: 920000, orders: 13200 },
  { month: 'Mar', revenue: 980000, orders: 14100 },
  { month: 'Apr', revenue: 1050000, orders: 15800 },
  { month: 'May', revenue: 1120000, orders: 16500 },
  { month: 'Jun', revenue: 1200000, orders: 17200 },
];

const categoryData = [
  { name: 'Electronics', value: 45 },
  { name: 'Fashion', value: 28 },
  { name: 'Home', value: 15 },
  { name: 'Sports', value: 12 },
];

const aiInsights = [
  {
    title: 'Peak Traffic Prediction',
    description: 'AI predicts 35% traffic increase on Saturday 3-5 PM',
    impact: 'High',
    color: 'purple',
  },
  {
    title: 'Inventory Alert',
    description: '12 products predicted to go out of stock within 48h',
    impact: 'Medium',
    color: 'orange',
  },
  {
    title: 'Fraud Detection',
    description: '3 suspicious transactions flagged for review',
    impact: 'High',
    color: 'red',
  },
  {
    title: 'Demand Forecast',
    description: 'Smart watches demand up 45% for next week',
    impact: 'Low',
    color: 'cyan',
  },
];

export function AdminOverview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      stat.trend === 'up'
                        ? 'border-green-500/50 text-green-400'
                        : 'border-red-500/50 text-red-400'
                    }`}
                  >
                    {stat.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Revenue & Orders Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Category Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Top Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-5 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-${insight.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <Sparkles className={`w-5 h-5 text-${insight.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{insight.title}</h4>
                      <Badge
                        variant="outline"
                        className={`${
                          insight.impact === 'High'
                            ? 'border-red-500/50 text-red-400'
                            : insight.impact === 'Medium'
                            ? 'border-orange-500/50 text-orange-400'
                            : 'border-cyan-500/50 text-cyan-400'
                        }`}
                      >
                        {insight.impact}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400">{insight.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
