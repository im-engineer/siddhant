import { motion } from 'motion/react';
import { useState } from 'react';

const techStack = {
  Frontend: [
    { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-teal-400' },
  ],
  Backend: [
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Express', level: 88, color: 'from-gray-500 to-slate-500' },
    { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-blue-400' },
    { name: 'MongoDB', level: 87, color: 'from-green-600 to-green-400' },
  ],
  Tools: [
    { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'Docker', level: 82, color: 'from-blue-500 to-sky-500' },
    { name: 'AWS', level: 80, color: 'from-orange-600 to-yellow-500' },
    { name: 'Vercel', level: 92, color: 'from-slate-600 to-slate-400' },
  ],
};

const categories = Object.keys(techStack) as Array<keyof typeof techStack>;

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof techStack>('Frontend');

  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Modern technologies chosen for performance, scalability, and maintainability
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {techStack[activeCategory].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                {/* Tech name and level */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                  <span className={`text-sm font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${tech.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex -space-x-2">
              {['⚛️', '🚀', '⚡', '🎯'].map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-slate-950 flex items-center justify-center text-lg"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Always learning</p>
              <p className="text-sm text-gray-400">Staying ahead with latest tech trends</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
