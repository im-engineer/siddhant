import { motion } from 'motion/react';
import { Server, Database, Cpu, Activity, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const generateData = (points: number = 20) => {
  return Array.from({ length: points }, (_, i) => ({
    time: i,
    value: Math.random() * 100,
  }));
};

const services = [
  {
    name: 'API Gateway',
    status: 'healthy',
    uptime: '99.98%',
    latency: '45ms',
    requests: '2.4M/hr',
    icon: Server,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'AI Engine',
    status: 'healthy',
    uptime: '99.95%',
    latency: '120ms',
    requests: '840K/hr',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Database Cluster',
    status: 'warning',
    uptime: '99.89%',
    latency: '25ms',
    requests: '1.8M/hr',
    icon: Database,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Cache Layer',
    status: 'healthy',
    uptime: '99.99%',
    latency: '8ms',
    requests: '5.2M/hr',
    icon: Activity,
    gradient: 'from-green-500 to-emerald-500',
  },
];

const systemMetrics = [
  { label: 'CPU Usage', value: 67, status: 'normal', color: 'cyan' },
  { label: 'Memory', value: 82, status: 'warning', color: 'orange' },
  { label: 'Storage', value: 45, status: 'normal', color: 'green' },
  { label: 'Network', value: 58, status: 'normal', color: 'purple' },
];

const recentEvents = [
  { type: 'info', message: 'Auto-scaling triggered: +3 instances', time: '2 min ago' },
  { type: 'warning', message: 'Database connection pool at 85%', time: '5 min ago' },
  { type: 'success', message: 'Deployment completed successfully', time: '12 min ago' },
  { type: 'info', message: 'Cache hit ratio: 94.5% (↑ 2.1%)', time: '18 min ago' },
  { type: 'warning', message: 'Increased latency detected in EU region', time: '25 min ago' },
];

export function SystemMonitor() {
  return (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      service.status === 'healthy'
                        ? 'border-green-500/50 text-green-400'
                        : 'border-orange-500/50 text-orange-400'
                    }
                  >
                    {service.status === 'healthy' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mr-1" />
                    )}
                    {service.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-white mb-3">{service.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-white font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-cyan-400 font-medium">{service.latency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Requests</span>
                    <span className="text-purple-400 font-medium">{service.requests}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Metrics and Graphs */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* System Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">System Metrics</h3>
            <div className="space-y-6">
              {systemMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium text-${metric.color}-400`}>
                        {metric.value}%
                      </span>
                      <Badge
                        variant="outline"
                        className={
                          metric.status === 'normal'
                            ? 'border-green-500/50 text-green-400 text-xs'
                            : 'border-orange-500/50 text-orange-400 text-xs'
                        }
                      >
                        {metric.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Real-time Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Real-time Activity</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Requests/sec', value: '12.4K', trend: '+5.2%' },
                { label: 'Active Users', value: '8,234', trend: '+12%' },
                { label: 'Errors', value: '0.02%', trend: '-15%' },
                { label: 'Avg Response', value: '45ms', trend: '-8%' },
              ].map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/5">
                  <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <Badge
                      variant="outline"
                      className={
                        stat.trend.startsWith('+')
                          ? 'border-green-500/50 text-green-400 text-xs'
                          : 'border-red-500/50 text-red-400 text-xs'
                      }
                    >
                      {stat.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini charts */}
            <div className="grid grid-cols-2 gap-4">
              {['API Latency', 'Database Load'].map((label, idx) => (
                <div key={idx}>
                  <p className="text-xs text-gray-400 mb-2">{label}</p>
                  <ResponsiveContainer width="100%" height={60}>
                    <LineChart data={generateData()}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={idx === 0 ? '#06b6d4' : '#a855f7'}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Recent Events</h3>
          <div className="space-y-3">
            {recentEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    event.type === 'success'
                      ? 'bg-green-500'
                      : event.type === 'warning'
                      ? 'bg-orange-500'
                      : 'bg-cyan-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-white text-sm">{event.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    event.type === 'success'
                      ? 'border-green-500/50 text-green-400'
                      : event.type === 'warning'
                      ? 'border-orange-500/50 text-orange-400'
                      : 'border-cyan-500/50 text-cyan-400'
                  } text-xs`}
                >
                  {event.type}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
