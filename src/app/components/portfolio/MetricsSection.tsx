import { motion, useScroll, useTransform } from 'motion/react';
import { Zap, Award, Clock, TrendingUp, Target, Users, Code } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { useRef } from 'react';

const metrics = [
  {
    icon: Zap,
    value: '< 2s',
    label: 'Average Load Time',
    description: 'Optimized for speed',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Long-term partnerships',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    value: '30 days',
    label: 'Average Delivery',
    description: 'Fast turnaround',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    value: '$1M+',
    label: 'Revenue Generated',
    description: 'For client businesses',
    color: 'from-orange-500 to-red-500',
  },
];

const achievements = [
  {
    title: 'Lighthouse Score',
    value: 98,
    max: 100,
    description: 'Average across all projects',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Uptime',
    value: 99.9,
    max: 100,
    description: 'Guaranteed SLA',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Code Coverage',
    value: 85,
    max: 100,
    description: 'Test coverage minimum',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const highlights = [
  { icon: Target, label: 'Projects Completed', value: '40+', color: 'from-cyan-500 to-blue-500' },
  { icon: Users, label: 'Happy Clients', value: '35+', color: 'from-purple-500 to-pink-500' },
  { icon: Code, label: 'Lines of Code', value: '100K+', color: 'from-green-500 to-emerald-500' },
];

export function MetricsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-purple-950/20 to-cyan-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      </div>

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Results That Matter
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Quality, speed, and performance metrics you can count on
          </p>
        </motion.div>

        {/* Main metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8 h-full group">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated border */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg`}
                    style={{
                      background: `linear-gradient(45deg, transparent, transparent)`,
                    }}
                    whileHover={{
                      background: [
                        `linear-gradient(45deg, rgba(6,182,212,0.3), transparent)`,
                        `linear-gradient(135deg, rgba(168,85,247,0.3), transparent)`,
                        `linear-gradient(225deg, rgba(6,182,212,0.3), transparent)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Icon */}
                  <div className={`relative inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${metric.color} mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>

                  {/* Value */}
                  <div className={`relative text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3 className="relative text-white font-semibold text-sm sm:text-base md:text-base mb-1 sm:mb-2">{metric.label}</h3>
                  <p className="relative text-xs sm:text-sm text-gray-400">{metric.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Performance scores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="border-0 bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
              Performance Standards
            </h3>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2 sm:gap-0">
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white">{achievement.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{achievement.description}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                        {achievement.value}
                        <span className="text-sm sm:text-base text-gray-500">/{achievement.max}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Advanced progress bar */}
                  <div className="relative h-2 sm:h-2.5 md:h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(achievement.value / achievement.max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${achievement.gradient} rounded-full`}
                    />
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Additional highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center group">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <Icon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                    {highlight.value}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">{highlight.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-8">
            {[
              { name: 'Fast Delivery', emoji: '🚀' },
              { name: 'Clean Code', emoji: '✨' },
              { name: 'Best Practices', emoji: '⚡' },
              { name: 'Modern Stack', emoji: '🎯' },
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <motion.span
                  className="text-lg sm:text-xl md:text-2xl"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {badge.emoji}
                </motion.span>
                <span className="text-xs sm:text-sm font-medium text-gray-300">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}