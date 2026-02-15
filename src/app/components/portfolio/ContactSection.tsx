import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { Send, Mail, MessageCircle, Calendar, Linkedin, Github, Twitter, Code2, Cpu, Database, Globe, Laptop, Smartphone, Wifi, Cloud, Server, Shield, Zap, Sparkles, Command, Terminal, Monitor } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      budget: formData.budget,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success('Message sent successfully!', {
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message.', {
        description: "Please check your configuration or try WhatsApp as an alternative.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick response',
      action: 'Chat Now',
      link: 'https://wa.me/6306654563',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: '30-min consultation',
      action: 'Book Slot',
      link: 'https://calendly.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Response in 24h',
      action: 'Send Email',
      link: 'mailto:azmsiddhant1@gmail.com',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/siddhant-singh-9a47051a2/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/im-engineer', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Build Something Great
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Got a project in mind? Let's discuss how I can help bring it to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm"
                    >
                      <option value="" className="bg-slate-900 text-white">Select range</option>
                      <option value="5k-10k" className="bg-slate-900 text-white">$5K - $10K</option>
                      <option value="10k-25k" className="bg-slate-900 text-white">$10K - $25K</option>
                      <option value="25k-50k" className="bg-slate-900 text-white">$25K - $50K</option>
                      <option value="50k+" className="bg-slate-900 text-white">$50K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 border-0 text-sm sm:text-base py-4 sm:py-5 md:py-6"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Card className="border-0 bg-white/5 backdrop-blur-xl p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm sm:text-base mb-0.5">{method.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-400 truncate">{method.description}</p>
                        </div>
                        <Button
                          onClick={() => window.open(method.link, '_blank')}
                          variant="ghost"
                          className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm flex-shrink-0"
                        >
                          {method.action} →
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-10 sm:w-12 md:w-12 h-10 sm:h-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl">⚡</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Fast Response Time</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    I typically respond within 24 hours on weekdays. For urgent projects,
                    use WhatsApp for immediate attention.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Connect with me</p>
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      <Icon className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-gray-300" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        {/* Footer with Tech Galaxy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-20 pt-6 sm:pt-8 border-t border-white/10 text-center relative"
        >
          <div className="relative z-10">
            <p className="text-xs sm:text-sm text-gray-400">
              Designed & Engineered by Siddhant Singh. Made with <span className="text-red-500">❤️</span>.
            </p>
          </div>

          {/* Footer Tech Galaxy Icons */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 md:h-32 overflow-hidden pointer-events-none select-none">
            {/* Left Side Icons */}
            <motion.div
              className="absolute bottom-8 sm:bottom-10 left-[10%] text-cyan-500/20"
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="w-3 sm:w-5 md:w-6 h-3 sm:h-5 md:h-6" />
            </motion.div>
            <motion.div
              className="absolute bottom-3 sm:bottom-4 left-[20%] text-purple-500/20"
              animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Cpu className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 sm:bottom-14 left-[5%] text-green-500/20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Database className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />
            </motion.div>
            <motion.div
              className="absolute bottom-16 sm:bottom-20 left-[15%] text-blue-500/20"
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Globe className="w-2 sm:w-4 md:w-4 h-2 sm:h-4 md:h-4" />
            </motion.div>
            <motion.div
              className="absolute bottom-5 sm:bottom-6 left-[25%] text-pink-500/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-3 sm:w-5 md:w-5 h-3 sm:h-5 md:h-5" />
            </motion.div>
            <motion.div
              className="absolute bottom-14 sm:bottom-16 left-[2%] text-orange-500/20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Server className="w-3 sm:w-6 md:w-6 h-3 sm:h-6 md:h-6" />
            </motion.div>

            {/* Right Side Icons */}
            <motion.div
              className="absolute bottom-7 sm:bottom-8 right-[10%] text-indigo-500/20"
              animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <Laptop className="w-3 sm:w-6 md:w-6 h-3 sm:h-6 md:h-6" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 sm:bottom-12 right-[20%] text-teal-500/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Smartphone className="w-3 sm:w-5 md:w-5 h-3 sm:h-5 md:h-5" />
            </motion.div>
            <motion.div
              className="absolute bottom-2 sm:bottom-3 right-[5%] text-yellow-500/20"
              animate={{ y: [0, -8, 0], x: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            >
              <Cloud className="w-4 sm:w-8 md:w-8 h-4 sm:h-8 md:h-8" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 sm:bottom-24 right-[15%] text-red-500/20"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield className="w-2 sm:w-4 md:w-4 h-2 sm:h-4 md:h-4" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 sm:bottom-5 right-[28%] text-lime-500/20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wifi className="w-3 sm:w-5 md:w-5 h-3 sm:h-5 md:h-5" />
            </motion.div>
            <motion.div
              className="absolute bottom-14 sm:bottom-16 right-[2%] text-sky-500/20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Monitor className="w-3 sm:w-6 md:w-6 h-3 sm:h-6 md:h-6" />
            </motion.div>

            {/* Center Area Icons (Sparse to avoid overlapping text) */}
            <motion.div
              className="absolute bottom-16 sm:bottom-20 left-[40%] text-fuchsia-500/10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Command className="w-6 sm:w-10 md:w-10 h-6 sm:h-10 md:h-10" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 sm:-bottom-5 right-[40%] text-violet-500/10"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <Terminal className="w-8 sm:w-12 md:w-12 h-8 sm:h-12 md:h-12" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 sm:bottom-24 left-[50%] -translate-x-1/2 text-rose-500/10"
              animate={{ scale: [1, 1.5, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-2 sm:w-4 md:w-4 h-2 sm:h-4 md:h-4" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
