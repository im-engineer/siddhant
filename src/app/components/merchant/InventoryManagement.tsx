import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, Edit, Trash2, AlertTriangle, TrendingUp, Package } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';

const inventory = [
  {
    id: 1,
    name: 'Neural Smart Watch',
    sku: 'NSW-2030-001',
    stock: 124,
    reserved: 12,
    threshold: 50,
    price: 299,
    status: 'healthy',
    aiPrediction: '+23% demand next week',
  },
  {
    id: 2,
    name: 'Quantum Headphones',
    sku: 'QHP-2030-002',
    stock: 45,
    reserved: 8,
    threshold: 50,
    price: 199,
    status: 'warning',
    aiPrediction: 'Restock in 3 days',
  },
  {
    id: 3,
    name: 'Holographic Sneakers',
    sku: 'HS-2030-003',
    stock: 89,
    reserved: 15,
    threshold: 40,
    price: 149,
    status: 'healthy',
    aiPrediction: 'Stable demand',
  },
  {
    id: 4,
    name: 'Smart Fabric Jacket',
    sku: 'SFJ-2030-004',
    stock: 23,
    reserved: 5,
    threshold: 30,
    price: 349,
    status: 'critical',
    aiPrediction: 'Out of stock in 48h',
  },
  {
    id: 5,
    name: 'Minimalist Chair',
    sku: 'MC-2030-005',
    stock: 67,
    reserved: 9,
    threshold: 25,
    price: 599,
    status: 'healthy',
    aiPrediction: '+12% demand trend',
  },
];

export function InventoryManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStockPercentage = (stock: number, reserved: number, threshold: number) => {
    const available = stock - reserved;
    return (available / threshold) * 100;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'green';
      case 'warning':
        return 'orange';
      case 'critical':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Inventory Management</h2>
          <p className="text-gray-400">{inventory.length} products in stock</p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 border-0">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Items', value: inventory.reduce((acc, item) => acc + item.stock, 0), color: 'cyan' },
          { label: 'Low Stock', value: inventory.filter((i) => i.status === 'warning' || i.status === 'critical').length, color: 'orange' },
          { label: 'Reserved', value: inventory.reduce((acc, item) => acc + item.reserved, 0), color: 'purple' },
          { label: 'Total Value', value: `$${inventory.reduce((acc, item) => acc + item.stock * item.price, 0).toLocaleString()}`, color: 'green' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-4">
              <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
              <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Inventory Table */}
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr className="text-left">
                <th className="p-4 text-sm font-medium text-gray-400">Product</th>
                <th className="p-4 text-sm font-medium text-gray-400">SKU</th>
                <th className="p-4 text-sm font-medium text-gray-400">Stock</th>
                <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                <th className="p-4 text-sm font-medium text-gray-400">Price</th>
                <th className="p-4 text-sm font-medium text-gray-400">AI Prediction</th>
                <th className="p-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item, index) => {
                const stockPercentage = getStockPercentage(item.stock, item.reserved, item.threshold);
                const statusColor = getStatusColor(item.status);
                
                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.name}</p>
                          <p className="text-sm text-gray-400">Available: {item.stock - item.reserved}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <code className="text-sm text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                        {item.sku}
                      </code>
                    </td>
                    <td className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">{item.stock}</span>
                          <span className="text-xs text-gray-400">Reserved: {item.reserved}</span>
                        </div>
                        <Progress value={stockPercentage} className="h-1.5" />
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className={`border-${statusColor}-500/50 text-${statusColor}-400`}
                      >
                        {item.status === 'critical' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <p className="text-white font-semibold">${item.price}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        <p className="text-sm text-gray-300">{item.aiPrediction}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* AI Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-bold text-white mb-4">AI Inventory Alerts</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Critical Stock Alert',
              description: 'Smart Fabric Jacket will be out of stock in 48 hours',
              action: 'Auto-reorder suggested',
              severity: 'high',
            },
            {
              title: 'Demand Surge Predicted',
              description: 'Neural Smart Watch demand up 23% next week',
              action: 'Increase stock by 50 units',
              severity: 'medium',
            },
            {
              title: 'Slow Moving Items',
              description: '3 products have low turnover rate',
              action: 'Consider promotion',
              severity: 'low',
            },
            {
              title: 'Optimal Pricing',
              description: 'AI suggests price adjustment for 2 items',
              action: 'View recommendations',
              severity: 'medium',
            },
          ].map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-5 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      alert.severity === 'high'
                        ? 'bg-red-500/20'
                        : alert.severity === 'medium'
                        ? 'bg-orange-500/20'
                        : 'bg-cyan-500/20'
                    }`}
                  >
                    <AlertTriangle
                      className={`w-5 h-5 ${
                        alert.severity === 'high'
                          ? 'text-red-400'
                          : alert.severity === 'medium'
                          ? 'text-orange-400'
                          : 'text-cyan-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{alert.title}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          alert.severity === 'high'
                            ? 'border-red-500/50 text-red-400'
                            : alert.severity === 'medium'
                            ? 'border-orange-500/50 text-orange-400'
                            : 'border-cyan-500/50 text-cyan-400'
                        }`}
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{alert.description}</p>
                    <button className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors">
                      {alert.action} →
                    </button>
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
