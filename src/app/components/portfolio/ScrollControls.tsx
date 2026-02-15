import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ArrowDown, MousePointer2, Move, Compass, MapPin, Navigation } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';

export function ScrollControls() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 left-6 z-50 flex flex-col gap-4">
            {/* Decorative Control Cluster Icons */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    className="absolute -top-8 -right-8 text-cyan-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <Compass className="w-6 h-6" />
                </motion.div>
                <motion.div
                    className="absolute top-1/2 -left-8 text-purple-500/30"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Navigation className="w-5 h-5 -rotate-90" />
                </motion.div>
                <motion.div
                    className="absolute -bottom-8 -right-6 text-pink-500/30"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MapPin className="w-5 h-5" />
                </motion.div>
                <motion.div
                    className="absolute top-0 -left-6 text-green-500/30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MousePointer2 className="w-4 h-4" />
                </motion.div>
                <motion.div
                    className="absolute bottom-10 -right-10 text-blue-500/30"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Move className="w-4 h-4" />
                </motion.div>
            </div>
            {/* Buttons */}
            <AnimatePresence>
                {scrollProgress > 0.1 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    >
                        <Button
                            onClick={scrollToTop}
                            size="icon"
                            className="rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-500/10 w-12 h-12"
                        >
                            <ArrowUp className="w-6 h-6" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {scrollProgress < 0.9 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: -20 }}
                    >
                        <Button
                            onClick={scrollToBottom}
                            size="icon"
                            className="rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/20 backdrop-blur-xl shadow-lg shadow-purple-500/10 w-12 h-12"
                        >
                            <ArrowDown className="w-6 h-6" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
