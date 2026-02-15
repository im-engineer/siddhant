import { motion } from 'motion/react';
import { ArrowRight, Menu, X, Code2, Laptop, Layers, Database, Globe, Cpu, Sparkles, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

interface NavigationProps {
  scrolled: boolean;
  onLogoClick?: () => void;
}

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },

  { label: 'Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation({ scrolled, onLogoClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              onClick={onLogoClick}
              whileHover="hover"
              initial="initial"
              animate="animate"
              className="relative cursor-pointer group"
            >
              {/* decorative background SVG removed to simplify code */}

              <div className="relative z-10 flex items-center gap-1 sm:gap-2 md:gap-3">
                <span
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                  Siddhant
                </span>

                <span
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                  Singh
                </span>

                {/* Icons floating above the middle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 hidden sm:flex">
                  <motion.div
                    animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-yellow-400 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
                  </motion.div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-5 -right-6 text-cyan-400/80"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-5 h-5" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-4 text-purple-400/80"
                animate={{
                  y: [0, 5, 0],
                  rotate: [0, -5, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Layers className="w-4 h-4" />
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-5 text-pink-400/80"
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Laptop className="w-4 h-4" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 text-yellow-400/80"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
              </motion.div>

              <motion.div
                className="absolute top-0 -right-8 text-green-400/80"
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Database className="w-4 h-4" />
              </motion.div>

              <motion.div
                className="absolute -top-6 left-0 text-blue-400/80"
                animate={{
                  y: [0, -3, 0],
                  x: [0, 3, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <Globe className="w-4 h-4" />
              </motion.div>

              <motion.div
                className="absolute bottom-1 -right-10 text-orange-400/80"
                animate={{
                  y: [0, 4, 0],
                  rotate: [0, 20, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <Cpu className="w-4 h-4" />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-sm lg:text-base font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 border-0 text-xs sm:text-sm"
              >
                Let's Talk
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-1 sm:p-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden pt-16 sm:pt-20"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-8 px-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-lg sm:text-xl md:text-2xl font-medium text-white hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 border-0 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
