import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MoreVertical, UserCheck, UserX, Mail, Shield } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Avatar } from '@/app/components/ui/avatar';

const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    role: 'Premium',
    status: 'active',
    orders: 47,
    lifetime: '$12,450',
    joined: '2025-01-15',
    aiScore: 98,
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'mchen@email.com',
    role: 'Gold',
    status: 'active',
    orders: 32,
    lifetime: '$8,230',
    joined: '2025-03-22',
    aiScore: 95,
  },
  {
    id: 3,
    name: 'Emma Davis',
    email: 'emma.d@email.com',
    role: 'Silver',
    status: 'inactive',
    orders: 18,
    lifetime: '$4,120',
    joined: '2025-06-10',
    aiScore: 87,
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'jwilson@email.com',
    role: 'Premium',
    status: 'active',
    orders: 56,
    lifetime: '$15,890',
    joined: '2024-11-05',
    aiScore: 99,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    role: 'Gold',
    status: 'active',
    orders: 28,
    lifetime: '$6,780',
    joined: '2025-04-18',
    aiScore: 92,
  },
];

export function UserManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">User Management</h2>
          <p className="text-gray-400">{users.length} total users</p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users..."
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
          <Button variant="outline" className="border-white/10 bg-white/5 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {['all', 'active', 'inactive'].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === filter
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Users table */}
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr className="text-left">
                <th className="p-4 text-sm font-medium text-gray-400">User</th>
                <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                <th className="p-4 text-sm font-medium text-gray-400">Tier</th>
                <th className="p-4 text-sm font-medium text-gray-400">Orders</th>
                <th className="p-4 text-sm font-medium text-gray-400">Lifetime Value</th>
                <th className="p-4 text-sm font-medium text-gray-400">AI Score</th>
                <th className="p-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500">
                        <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                          {user.name.charAt(0)}
                        </div>
                      </Avatar>
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge
                      variant="outline"
                      className={
                        user.status === 'active'
                          ? 'border-green-500/50 text-green-400'
                          : 'border-gray-500/50 text-gray-400'
                      }
                    >
                      {user.status === 'active' ? (
                        <UserCheck className="w-3 h-3 mr-1" />
                      ) : (
                        <UserX className="w-3 h-3 mr-1" />
                      )}
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge
                      className={
                        user.role === 'Premium'
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                          : user.role === 'Gold'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                      }
                    >
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <p className="text-white font-medium">{user.orders}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-white font-semibold">{user.lifetime}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${user.aiScore}%` }}
                          transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        />
                      </div>
                      <span className="text-sm font-medium text-cyan-400 w-10">{user.aiScore}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Active Users', value: users.filter((u) => u.status === 'active').length, color: 'green' },
          { label: 'Premium Members', value: users.filter((u) => u.role === 'Premium').length, color: 'purple' },
          { label: 'Avg AI Score', value: '94.2%', color: 'cyan' },
          { label: 'New This Month', value: '+247', color: 'orange' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-4">
              <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
              <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
