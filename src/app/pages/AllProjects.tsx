import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { projects } from '@/app/data/projects';
import { Navigation } from '@/app/components/portfolio/Navigation';
import { useState, useEffect } from 'react';

export default function AllProjects() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navigation scrolled={scrolled} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button and header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Browse all {projects.length} projects I've worked on. Each one represents a unique challenge and successful solution.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={`/project/${project.slug}`}
                  className="block h-full"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 group hover:shadow-xl hover:shadow-cyan-500/20">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Content */}
                    <div className="h-full p-6 flex flex-col">
                      {/* Thumbnail area */}
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-slate-800/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <img
                          src={project.thumbnail as string}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Badge */}
                      <Badge className="w-fit mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white">
                        {project.category}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-grow">
                        {project.shortDescription}
                      </p>

                      {/* Year and impact preview */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-white/10">
                        <span>{project.year}</span>
                        <span className="text-cyan-400">{(project.impacts ?? []).length} impacts</span>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
                        View Case Study
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20"
                      style={{ padding: '2px' }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
