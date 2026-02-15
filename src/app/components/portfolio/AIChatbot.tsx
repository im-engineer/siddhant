import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  suggestions?: string[];
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm the AI assistant. How can I help you today?",
      suggestions: [
        'What services do you offer?',
        'What\'s your pricing?',
        'Show me your portfolio',
        'How long does a project take?',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (message?: string) => {
    const text = message || input;
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: getBotResponse(text),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('service') || lowerQuery.includes('do')) {
      return "I offer full-stack development services including MVP development, SaaS platforms, e-commerce solutions, and performance optimization. With 3.5+ years of experience, each project is tailored to your specific needs. Would you like to discuss your project?";
    }
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('budget')) {
      return "Project costs typically range from $5K-$50K+ depending on scope and complexity. I offer flexible engagement models: fixed-price projects, hourly rates, or retainer agreements. Let's schedule a call to discuss your requirements for a detailed quote.";
    }
    if (lowerQuery.includes('portfolio') || lowerQuery.includes('work') || lowerQuery.includes('project')) {
      return "I've successfully delivered 40+ projects across SaaS, e-commerce, and fintech in 4+ years. Notable achievements include a platform with 10K+ users, $500K GMV e-commerce marketplace, and performance improvements of 85%. Which industry interests you most?";
    }
    if (lowerQuery.includes('time') || lowerQuery.includes('long') || lowerQuery.includes('deliver')) {
      return "Typical MVP projects take 4-6 weeks. Larger projects can take 2-4 months. I work in agile 2-week sprints with regular updates and demos. My average delivery time is 30 days. Want to discuss your timeline?";
    }
    if (lowerQuery.includes('experience') || lowerQuery.includes('years') || lowerQuery.includes('skill')) {
      return "I have 3.5 + years of professional full-stack development experience. Expertise in React, Next.js, Node.js, TypeScript, and modern cloud platforms. I've worked with 35+ clients and maintain a 98% satisfaction rate. Check out my journey section above for more details!";
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('call') || lowerQuery.includes('meet')) {
      return "Great! You can book a free 30-minute consultation via Calendly, or reach me on WhatsApp for quick questions. I typically respond within 24 hours on weekdays. Scroll down to the contact section to get started!";
    }
    if (lowerQuery.includes('tech') || lowerQuery.includes('stack') || lowerQuery.includes('technology')) {
      return "I work with modern tech stacks: React/Next.js for frontend, Node.js/Express for backend, PostgreSQL/MongoDB for databases, AWS/Vercel for deployment. All projects include TypeScript, testing, and CI/CD. I choose technologies based on your specific needs.";
    }

    return "That's a great question! For detailed information, I'd recommend scheduling a call or sending a message through the contact form below. I respond within 24 hours with personalized answers!";
  };

  return (
    <>
      {/* Chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 shadow-2xl flex items-center justify-center group"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 max-h-[600px] flex flex-col"
          >
            <Card className="border-0 bg-slate-900/95 backdrop-blur-xl shadow-2xl flex flex-col h-full overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-gray-400">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/6306654563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.type === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-200'
                        }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>

                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          {message.suggestions.map((suggestion, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSend(suggestion)}
                              className="block w-full text-left text-xs px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 rounded-2xl px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question..."
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                  <Button
                    onClick={() => handleSend()}
                    disabled={!input.trim()}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 border-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}