import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Github,
  Users, Zap, TrendingUp, Code, Server, Database, Cloud,
  X, Check
} from 'lucide-react';
import { projects } from '@/app/data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Dialog, DialogContent, DialogClose } from '@/app/components/ui/dialog';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import RoleFeatureDisplay from '@/app/components/portfolio/RoleFeatureDisplay';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Set initial active role
  if (!activeRole && project.roles && project.roles.length > 0) {
    setActiveRole(project.roles[0].id);
  }

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white text-xs sm:text-sm">
              {project.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mb-6 sm:mb-8">
              {project.shortDescription}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {project.liveUrl && (
                <button className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity group">
                  View Live
                  <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              )}
              {project.caseStudyUrl && (
                <button className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                  <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                  View Code
                </button>
              )}
            </div>
          </motion.div>

          {/* Project Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            <div className="p-3 sm:p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">Project Type</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-2">{project.projectType}</div>
            </div>
            <div className="p-3 sm:p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">Duration</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white">{project.duration}</div>
            </div>
            <div className="p-3 sm:p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">Year</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white">{project.year}</div>
            </div>
            {project.client && (
              <div className="p-3 sm:p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">Client</div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-2">{project.client}</div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="md:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Overview</h2>
              <p className="text-sm sm:text-base text-gray-400">Understanding the problem and crafting the solution</p>
            </div>

            <div className="md:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
              {/* Problem */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white flex items-center gap-2">
                  <span className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm sm:text-base text-red-400">
                    ⚠️
                  </span>
                  The Problem
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white flex items-center gap-2">
                  <span className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-sm sm:text-base text-green-400">
                    ✓
                  </span>
                  The Solution
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{project.solution}</p>
              </div>

              {/* My Responsibility */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white flex items-center gap-2">
                  <span className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm sm:text-base text-blue-400">
                    👨‍💻
                  </span>
                  My Role
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{project.myResponsibility}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles & Permissions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">Roles & Permissions</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Different user types with specific access and responsibilities</p>
          </motion.div>

          <Tabs value={activeRole || project.roles?.[0]?.id} onValueChange={setActiveRole} className="w-full">
            <div className="overflow-x-auto scrollbar-hide -mx-3 sm:-mx-4 md:-mx-6 lg:-mx-8">
              <TabsList className="flex gap-2 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-8 bg-transparent pb-2 px-3 sm:px-4 md:px-6 lg:px-8 min-w-max scrollbar-hide">
                {(project.roles ?? []).map((role) => (
                  <TabsTrigger
                    key={role.id}
                    value={role.id}
                    className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-sm bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:border-0 data-[state=active]:text-white text-gray-400 hover:bg-white/10 transition-all whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1 justify-center">
                      <Users className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span className="hidden sm:inline">{role.name}</span>
                      <span className="sm:hidden text-xs">{role.name.substring(0, 3)}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {(project.roles ?? []).map((role) => (
              <TabsContent key={role.id} value={role.id} className="mt-4 sm:mt-6 md:mt-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
                >
                  {/* Role Description */}
                  <div>
                    <Card className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white/5 border-white/10 h-full">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">{role.name}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">{role.description}</p>

                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-3 md:mb-4">Key Responsibilities:</h4>
                      <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                        {(role.responsibilities ?? []).map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base text-gray-300"
                          >
                            <Check className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Role Screenshots */}
                  <div className="flex flex-col">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-3 md:mb-4">Screenshots</h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 flex-1">
                      {(role.screenshots ?? []).map((screenshot, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 cursor-pointer group relative"
                          onClick={() => setSelectedImage(screenshot)}
                        >
                          {typeof screenshot === 'string' && screenshot.includes('/') ? (
                            <img
                              src={screenshot}
                              alt={`Screenshot ${idx}`}
                              className="w-full h-full object-contain sm:object-cover bg-black/20"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center p-2">
                              <div className="text-center">
                                <TrendingUp className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-cyan-400 mx-auto mb-1 sm:mb-2" />
                                <p className="text-xs sm:text-sm text-gray-300 capitalize line-clamp-2">{String(screenshot).replace(/-/g, ' ')}</p>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2 sm:pb-4">
                            <span className="text-white text-xs sm:text-sm">Click to view</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Key Features & Responsibilities Display */}
                {/* {(role.keyFeatures || role.keyResponsibilities) && (
                  <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8">
                    {role.keyFeatures && (
                      <RoleFeatureDisplay 
                        features={role.keyFeatures}
                        title="Key Features"
                        color="from-cyan-500 to-blue-500"
                      />
                    )}
                    {role.keyResponsibilities && (
                      <RoleFeatureDisplay 
                        features={role.keyResponsibilities}
                        title="Key Responsibilities"
                        color="from-orange-500 to-yellow-500"
                      />
                    )}
                  </div>
                )} */}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">Key Features</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">In-depth look at what makes this project powerful</p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {(project.features ?? []).map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card
                  className={`overflow-hidden transition-all duration-300 ${expandedFeature === feature.id
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                >
                  {/* Feature Header - Clickable */}
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className="w-full p-3 sm:p-4 md:p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                      <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base md:text-xl font-bold text-white mb-0.5 sm:mb-1 truncate">{feature.name}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-400 line-clamp-1">{feature.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-2 sm:ml-3 md:ml-4">
                      {expandedFeature === feature.id ? (
                        <ChevronUp className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Feature Details - Expandable */}
                  <AnimatePresence>
                    {expandedFeature === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 sm:p-4 md:p-6 pt-0 sm:pt-0 md:pt-0 space-y-4 sm:space-y-5 md:space-y-6 border-t border-white/10">
                          {/* Why it was built */}
                          <div>
                            <h4 className="text-xs sm:text-sm md:text-base font-semibold text-cyan-400 uppercase tracking-wider mb-1 sm:mb-2">
                              Why This Feature?
                            </h4>
                            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{feature.why}</p>
                          </div>

                          {/* Business Impact */}
                          <div>
                            <h4 className="text-xs sm:text-sm md:text-base font-semibold text-green-400 uppercase tracking-wider mb-1 sm:mb-2">
                              Business Impact
                            </h4>
                            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{feature.businessImpact}</p>
                          </div>

                          {/* Related Roles */}
                          <div>
                            <h4 className="text-xs sm:text-sm md:text-base font-semibold text-purple-400 uppercase tracking-wider mb-1 sm:mb-2">
                              Used By
                            </h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {(feature.relatedRoles ?? []).map((roleId) => {
                                const role = (project.roles ?? []).find(r => r.id === roleId);
                                return role ? (
                                  <Badge key={roleId} variant="outline" className="border-white/20 text-gray-300 text-xs sm:text-sm">
                                    {role.name}
                                  </Badge>
                                ) : null;
                              })}
                            </div>
                          </div>

                          {/* Screenshots */}
                          <div>
                            <h4 className="text-xs sm:text-sm md:text-base font-semibold text-orange-400 uppercase tracking-wider mb-2 sm:mb-3">
                              Screenshots
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                              {(feature.screenshots ?? []).map((screenshot, screenshotIdx) => (
                                <motion.div
                                  key={screenshotIdx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: screenshotIdx * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                  className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 cursor-pointer relative group"
                                  onClick={() => setSelectedImage(screenshot)}
                                >
                                  {typeof screenshot === 'string' && screenshot.includes('/') ? (
                                    <img
                                      src={screenshot}
                                      alt={`Screenshot ${screenshotIdx}`}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-center">
                                        <Code className="w-8 h-8 text-cyan-400 mx-auto mb-1" />
                                        <p className="text-xs text-gray-400 capitalize px-2">
                                          {String(screenshot).replace(/-/g, ' ')}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ExternalLink className="w-6 h-6 text-white" />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent border-t border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">Technology Stack</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Tools and technologies powering this solution</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Frontend */}
            <Card className="p-4 sm:p-5 md:p-6 bg-white/5 border-white/10">
              <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 sm:mb-4">
                <Code className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Frontend</h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {(project.techStack.frontend ?? []).map((tech, idx) => (
                  <li key={idx} className="text-gray-300 text-xs sm:text-sm">{tech}</li>
                ))}
              </ul>
            </Card>

            {/* Backend */}
            <Card className="p-4 sm:p-5 md:p-6 bg-white/5 border-white/10">
              <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-3 sm:mb-4">
                <Server className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Backend</h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {(project.techStack.backend ?? []).map((tech, idx) => (
                  <li key={idx} className="text-gray-300 text-xs sm:text-sm">{tech}</li>
                ))}
              </ul>
            </Card>

            {/* Database */}
            <Card className="p-4 sm:p-5 md:p-6 bg-white/5 border-white/10">
              <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 sm:mb-4">
                <Database className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Database</h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {(project.techStack.database ?? []).map((tech, idx) => (
                  <li key={idx} className="text-gray-300 text-sm">{tech}</li>
                ))}
              </ul>
            </Card>

            {/* APIs */}
            <Card className="p-4 sm:p-5 md:p-6 bg-white/5 border-white/10">
              <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">APIs</h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {(project.techStack.apis ?? []).map((tech, idx) => (
                  <li key={idx} className="text-gray-300 text-xs sm:text-sm">{tech}</li>
                ))}
              </ul>
            </Card>

            {/* Hosting */}
            <Card className="p-4 sm:p-5 md:p-6 bg-white/5 border-white/10">
              <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-3 sm:mb-4">
                <Cloud className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Hosting</h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {(project.techStack.hosting ?? []).map((tech, idx) => (
                  <li key={idx} className="text-gray-300 text-xs sm:text-sm">{tech}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">Impact & Results</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Measurable outcomes that matter</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {(project.impacts ?? []).map((impact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center hover:border-cyan-500/30 transition-all group"
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {impact.value}
                </motion.div>
                <div className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{impact.metric}</div>
                <div className="text-xs sm:text-sm text-gray-400">{impact.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
              Want similar results for your business?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-7 md:mb-8">
              Let's discuss how I can help you build scalable, user-focused solutions.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base md:text-base hover:opacity-90 transition-opacity"
            >
              Get In Touch
              <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl sm:max-w-5xl bg-slate-900 border-white/10 p-2 sm:p-0">
          <DialogClose className="absolute right-2 sm:right-4 top-2 sm:top-4 rounded-sm z-50 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
            {typeof selectedImage === 'string' && selectedImage.includes('/') ? (
              <img
                src={selectedImage}
                alt="Screenshot"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="text-center">
                  <TrendingUp className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-cyan-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 capitalize">{String(selectedImage).replace(/-/g, ' ')}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">Screenshot Preview</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
