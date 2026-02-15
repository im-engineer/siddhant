import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { useState } from 'react';
import { Link } from 'react-router';
import { projects } from '@/app/data/projects';

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Show only first 3 projects on homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects, real results. Here's how I've helped businesses grow.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32 px-2 sm:px-0">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white text-xs sm:text-sm">
                  {project.category}
                </Badge>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Challenge
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Solution
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {(project.impacts ?? []).slice(0, 3).map((item, idx) => (
                    <motion.div
                      key={item.metric}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
                    >
                      <motion.div
                        className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1"
                        animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {item.value}
                      </motion.div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {[...project.techStack.frontend.slice(0, 2), ...project.techStack.backend.slice(0, 2)].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:border-cyan-500/30 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Link 
                    to={`/project/${project.slug}`}
                    className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity group"
                  >
                    View Case Study
                    <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* 3D Image card */}
              <Link 
                to={`/project/${project.slug}`}
                className={`relative group block ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: 5,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: 1000,
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                    
                    {/* Project thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/10 backdrop-blur-sm">
                      <img
                        src={project.thumbnail as string}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-gray-100 font-medium bg-black/30 px-3 py-1 rounded">{project.title}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    />

                    {/* 3D border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20"
                      style={{ padding: '2px' }}
                      animate={hoveredIndex === index ? {
                        boxShadow: [
                          `0 0 20px rgba(6,182,212,0.3)`,
                          `0 0 40px rgba(6,182,212,0.4)`,
                          `0 0 20px rgba(6,182,212,0.3)`,
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="absolute -bottom-6 -right-6 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-medium text-white">Click to Explore</span>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div>
              <p className="text-gray-400 mb-2">Explore detailed case studies with interactive features</p>
              <div className="text-sm text-gray-500 max-w-md">
                Click any project above to see role-based breakdowns, expandable features, 
                screenshot galleries, and measurable business impact.
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/50"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
