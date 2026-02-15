import { motion } from 'motion/react';
import { DollarSign, Package, ShoppingCart, TrendingUp, ArrowUp, Eye, Heart } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  {
    label: 'Today\'s Revenue',
    value: '$4,248',
    change: '+18.2%',
    trend: 'up',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    label: 'Orders',
    value: '147',
    change: '+12.5%',
    trend: 'up',
    icon: ShoppingCart,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    label: 'Products Sold',
    value: '234',
    change: '+8.7%',
    trend: 'up',
    icon: Package,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Conversion Rate',
    value: '3.8%',
    change: '+0.5%',
    trend: 'up',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
  },
];

const salesData = [
  { day: 'Mon', sales: 3200, orders: 45 },
  { day: 'Tue', sales: 3800, orders: 52 },
  { day: 'Wed', sales: 4200, orders: 58 },
  { day: 'Thu', sales: 3900, orders: 51 },
  { day: 'Fri', sales: 4800, orders: 67 },
  { day: 'Sat', sales: 5200, orders: 72 },
  { day: 'Sun', sales: 4248, orders: 59 },
];

const topProducts = [
  {
    name: 'Neural Smart Watch',
    sales: 47,
    revenue: '$14,053',
    views: 1247,
    likes: 892,
    trend: '+23%',
  },
  {
    name: 'Quantum Headphones',
    sales: 38,
    revenue: '$7,562',
    views: 1089,
    likes: 754,
    trend: '+18%',
  },
  {
    name: 'Holographic Sneakers',
    sales: 34,
    revenue: '$5,066',
    views: 982,
    likes: 623,
    trend: '+15%',
  },
  {
    name: 'Smart Fabric Jacket',
    sales: 28,
    revenue: '$9,772',
    views: 856,
    likes: 541,
    trend: '+12%',
  },
];

export function MerchantOverview() {
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
                  <Badge variant="outline" className="border-green-500/50 text-green-400">
                    <ArrowUp className="w-3 h-3 mr-1" />
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
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Sales Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="day" stroke="#9ca3af" />
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
                  dataKey="sales"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#salesGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Orders Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Orders Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="orders" fill="url(#orderGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Top Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Top Performing Products</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr className="text-left">
                  <th className="p-3 text-sm font-medium text-gray-400">Product</th>
                  <th className="p-3 text-sm font-medium text-gray-400">Sales</th>
                  <th className="p-3 text-sm font-medium text-gray-400">Revenue</th>
                  <th className="p-3 text-sm font-medium text-gray-400">Views</th>
                  <th className="p-3 text-sm font-medium text-gray-400">Likes</th>
                  <th className="p-3 text-sm font-medium text-gray-400">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <motion.tr
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-3">
                      <p className="font-medium text-white">{product.name}</p>
                    </td>
                    <td className="p-3">
                      <p className="text-white font-semibold">{product.sales}</p>
                    </td>
                    <td className="p-3">
                      <p className="text-green-400 font-semibold">{product.revenue}</p>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Eye className="w-4 h-4" />
                        {product.views}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Heart className="w-4 h-4" />
                        {product.likes}
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        {product.trend}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
