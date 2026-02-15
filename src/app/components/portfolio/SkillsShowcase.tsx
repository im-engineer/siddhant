import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Database, Cloud, Palette, Zap, Shield } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind', level: 95 },
    ],
  },
  {
    name: 'Backend',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 87 },
    ],
  },
  {
    name: 'DevOps',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 95 },
    ],
  },
  {
    name: 'Design',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'UI/UX', level: 85 },
      { name: 'Responsive', level: 95 },
      { name: 'Animation', level: 90 },
    ],
  },
  {
    name: 'Performance',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Optimization', level: 92 },
      { name: 'SEO', level: 88 },
      { name: 'Lighthouse', level: 95 },
      { name: 'Core Vitals', level: 90 },
    ],
  },
  {
    name: 'Security',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    skills: [
      { name: 'Auth', level: 90 },
      { name: 'HTTPS', level: 95 },
      { name: 'Best Practices', level: 92 },
      { name: 'OWASP', level: 85 },
    ],
  },
];

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Complete Skill Set
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Full-stack expertise across the entire development lifecycle
          </p>
        </motion.div>

        {/* Interactive skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;

            return (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`relative group ${isActive ? 'scale-105' : ''
                  }`}
              >
                <div className={`relative overflow-hidden rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-xl border transition-all duration-300 ${isActive
                    ? `bg-gradient-to-br ${category.color} border-white/30`
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}>
                  {/* Glow effect */}
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 blur-xl`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div className="relative">
                    <Icon className={`w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 mx-auto mb-2 sm:mb-3 ${isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    <p className={`text-xs sm:text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-300'
                      }`}>
                      {category.name}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Skill details */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {(() => {
                const Icon = skillCategories[activeCategory].icon;
                return (
                  <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br ${skillCategories[activeCategory].color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                  </div>
                );
              })()}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{skillCategories[activeCategory].name}</h3>
                <p className="text-xs sm:text-sm text-gray-400">Core technologies and expertise</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-white">{skill.name}</span>
                    <span className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* 3D progress bar */}
                  <div className="relative h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                      style={{
                        boxShadow: `0 0 20px ${skillCategories[activeCategory].color}`,
                      }}
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
          </div>
        </motion.div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '15+', label: 'Technologies', icon: '⚡' },
            { value: '40+', label: 'Projects', icon: '🚀' },
            { value: '4 Years', label: 'Experience', icon: '📅' },
            { value: '100%', label: 'Passion', icon: '❤️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
