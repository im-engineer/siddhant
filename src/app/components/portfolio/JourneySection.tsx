import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const journeyData = [
  {
    year: '2022',
    title: 'Started the Journey',
    company: 'Freelance',
    description: 'Began full-stack development, completed first 5 client projects',
    icon: GraduationCap,
    achievements: ['5 projects delivered', 'React & Node.js mastery', 'First SaaS built'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2023',
    title: 'Rapid Growth',
    company: 'Multiple Clients',
    description: 'Scaled to 20+ projects, specialized in performance optimization',
    icon: TrendingUp,
    achievements: ['20+ clients served', 'Built e-commerce platforms', '$500K+ revenue generated'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024',
    title: 'Enterprise Scale',
    company: 'Senior Developer',
    description: 'Leading complex projects, mentoring developers, building scalable systems',
    icon: Briefcase,
    achievements: ['15+ enterprise projects', 'Team collaboration', '98% client satisfaction'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2025',
    title: 'Innovation & Excellence',
    company: 'Top-Tier Clients',
    description: 'Working with startups and established companies, delivering cutting-edge solutions',
    icon: Award,
    achievements: ['AI-powered applications', 'Micro-frontend architecture', 'Real-time systems'],
    color: 'from-orange-500 to-red-500',
  },
];

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-cyan-950/20 to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            4 years of growth, learning, and delivering exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Journey items */}
          <div className="space-y-24">
            {journeyData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`pl-20 md:pl-0 ${isLeft ? 'md:text-right md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: isLeft ? -5 : 5 }}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} mb-4`}>
                        <Calendar className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-cyan-400 font-medium mb-4">{item.company}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon in center */}
                  <div className={`absolute left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Placeholder for spacing on mobile */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 border border-white/20 backdrop-blur-xl">
            <div className="flex -space-x-2">
              {[
                { emoji: '🚀', color: 'from-cyan-500 to-blue-500' },
                { emoji: '⚡', color: 'from-purple-500 to-pink-500' },
                { emoji: '🎯', color: 'from-green-500 to-emerald-500' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} border-2 border-slate-950 flex items-center justify-center text-xl`}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Currently available</p>
              <p className="text-gray-400">Ready to take on your next big project</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
