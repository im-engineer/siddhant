import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Avatar } from '@/app/components/ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Aarav Patel',
    role: 'Founder, TechFlow Solutions',
    company: 'SaaS',
    image: 'business professional',
    rating: 5,
    text: "Working with Siddhant was a game-changer. Our MVP launched in 5 weeks, and we've already secured seed funding. The code quality and architecture are exceptional - built for scale from day one.",
  },
  {
    name: 'Priya Sharma',
    role: 'CTO, FinEdge India',
    company: 'FinTech',
    image: 'startup founder',
    rating: 5,
    text: "Transformed our slow legacy portal into a blazing-fast experience. User engagement increased 40% within the first month. Best investment we've made for our digital transformation.",
  },
  {
    name: 'Rajesh Kumar',
    role: 'Director, GreenLeaf Organics',
    company: 'E-commerce',
    image: 'tech executive',
    rating: 5,
    text: "Incredibly skilled and professional. Delivered a complex inventory dashboard that handles real-time data beautifully from our warehouses. The technical expertise is unmatched.",
  },
  {
    name: 'Sneha Reddy',
    role: 'Product Head, EduLearn Systems',
    company: 'EdTech',
    image: 'product manager',
    rating: 5,
    text: "Not just a developer, but a strategic partner. Suggested improvements for our student portal that saved us thousands in server costs. Delivers on time, every time. Highly recommend.",
  },
  {
    name: 'Vikram Singh',
    role: 'Co-Founder, Urban Logistics',
    company: 'Logistics',
    image: 'healthcare founder',
    rating: 5,
    text: "Built our tracking platform with robust security from day one. The technical expertise, security mindset, and communication were outstanding. A true professional to work with.",
  },
  {
    name: 'Ananya Gupta',
    role: 'CEO, HealthFirst Clinics',
    company: 'Healthcare',
    image: 'marketplace ceo',
    rating: 5,
    text: "Scaled our telemedicine platform from 100 to 10,000 daily users without breaking a sweat during peak hours. The architecture is solid and maintainable. Worth every penny.",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-3 sm:-ml-4 md:-ml-5 lg:-ml-6 pb-8 sm:pb-10 md:pb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-3 sm:pl-4 md:pl-5 lg:pl-6 cursor-grab active:cursor-grabbing">
                <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8 h-full hover:bg-white/10 transition-all duration-300 group">
                  {/* Quote icon */}
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-cyan-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-5 md:mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-7 md:mb-8 relative z-10 text-sm sm:text-base md:text-base lg:text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-white/10 mt-auto">
                    <Avatar className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-cyan-500 to-purple-500 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base md:text-lg truncate">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-400 truncate">{testimonial.role}</p>
                      <p className="text-xs text-cyan-400 mt-0.5 sm:mt-1 truncate">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 sm:gap-2.5 md:gap-3 mt-6 sm:mt-7 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                ? 'bg-cyan-500 w-6 sm:w-7 md:w-8'
                : 'bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Project Success' },
            { value: '95%', label: 'Repeat Clients' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
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