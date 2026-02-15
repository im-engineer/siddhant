import { motion, AnimatePresence } from 'motion/react';
import { Code, Rocket, Zap, LineChart, ArrowRight, Smartphone, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { useState } from 'react';

const services = [
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Ship your product in 4-6 weeks. Validated, scalable, and ready for users.',
    features: ['Fast time-to-market', 'Cost-effective', 'Tech debt-free'],
    gradient: 'from-cyan-500 to-blue-500',
    cta: 'Start Building',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end solutions from database to pixel-perfect UI. One developer, zero handoffs.',
    features: ['React & Next.js', 'Node.js & databases', 'API integration'],
    gradient: 'from-purple-500 to-pink-500',
    cta: 'See Tech Stack',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Turn slow sites into lightning-fast experiences. Better speed = more conversions.',
    features: ['Load time < 2s', 'SEO optimization', 'Lighthouse 95+'],
    gradient: 'from-orange-500 to-red-500',
    cta: 'Boost Speed',
  },
  {
    icon: LineChart,
    title: 'SaaS & E-commerce',
    description: 'Build platforms that handle payments, subscriptions, and scale to thousands of users.',
    features: ['Stripe integration', 'Admin dashboards', 'Analytics built-in'],
    gradient: 'from-green-500 to-emerald-500',
    cta: 'Scale Now',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native-like experiences with React Native. Build once, deploy to iOS and Android.',
    features: ['Cross-platform', 'Offline support', 'App Store publication'],
    gradient: 'from-pink-500 to-rose-500',
    cta: 'Go Mobile',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love. Design systems that scale.',
    features: ['Figma prototyping', 'User research', 'Modern aesthetics'],
    gradient: 'from-indigo-500 to-violet-500',
    cta: 'View Designs',
  },
];

export function ServicesSection() {
  const [visibleItems, setVisibleItems] = useState(4);

  const toggleView = () => {
    if (visibleItems >= services.length) {
      setVisibleItems(4); // Show Less
    } else {
      setVisibleItems(services.length); // Load More
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What I Do Best
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Specialized services that solve real business problems and generate measurable ROI
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <AnimatePresence>
            {services.slice(0, visibleItems).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 h-full hover:bg-white/10 transition-all duration-300">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                          <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-cyan-400 font-medium text-xs sm:text-sm group-hover:gap-4 transition-all">
                      {service.cta || 'Learn more'}
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {services.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8 sm:mt-10 md:mt-12"
          >
            <button
              onClick={toggleView}
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm md:text-base text-white hover:bg-white/10 transition-all font-medium group"
            >
              {visibleItems >= services.length ? (
                <>
                  Show Less Services
                  <ChevronUp className="w-3 sm:w-4 h-3 sm:h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Load More Services
                  <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6">Not sure what you need?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2 text-xs sm:text-sm md:text-base group"
          >
            Let's discuss your project
            <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
