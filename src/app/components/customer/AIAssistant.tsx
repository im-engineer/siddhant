import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Image, Mic, Camera, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  suggestions?: string[];
  products?: Array<{
    name: string;
    price: number;
    reason: string;
  }>;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI shopping assistant. I can help you find products by understanding your mood, budget, and preferences. What are you looking for today?",
      suggestions: [
        'Show me minimal shoes under $150',
        'I need a gift for my tech-savvy friend',
        'What\'s trending this week?',
        'Eco-friendly workout gear',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: Image, label: 'Search by Image', color: 'from-cyan-500 to-blue-500' },
    { icon: Mic, label: 'Voice Search', color: 'from-purple-500 to-pink-500' },
    { icon: Camera, label: 'Try-On AR', color: 'from-orange-500 to-red-500' },
    { icon: TrendingUp, label: 'Trending Now', color: 'from-green-500 to-emerald-500' },
  ];

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

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        content: getAIResponse(text),
        products: [
          { name: 'Neural Smart Watch', price: 299, reason: 'Matches your budget and style preferences' },
          { name: 'Quantum Headphones', price: 199, reason: 'Perfect for your music taste' },
          { name: 'Holographic Sneakers', price: 149, reason: 'Trending in your size' },
        ],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('shoe') || lowerQuery.includes('minimal')) {
      return "I've found some amazing minimal sneakers for you! Based on your style history and size prediction (US 9 with 95% confidence), here are my top picks:";
    }
    if (lowerQuery.includes('gift')) {
      return "Great choice! Based on tech trends and gift popularity, I've curated these options that tech enthusiasts love:";
    }
    if (lowerQuery.includes('trend')) {
      return "Here's what's hot this week! These items are trending among users with similar preferences to yours:";
    }
    if (lowerQuery.includes('eco')) {
      return "Excellent! Here are eco-friendly workout gear options with low carbon footprints:";
    }
    return "I've analyzed your request and found these perfect matches. Each recommendation is personalized based on your preferences:";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">AI Shopping Assistant</h2>
            <p className="text-gray-400">Your personal AI-powered shopping guide</p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-300 text-center">{action.label}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Chat container */}
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
        <div className="h-[600px] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-2xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    {message.type === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">AI Assistant</span>
                      </div>
                    )}
                    
                    <div
                      className={`rounded-2xl p-4 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-white/10 border border-white/10 text-gray-200'
                      }`}
                    >
                      <p className="leading-relaxed">{message.content}</p>
                    </div>

                    {/* Product suggestions */}
                    {message.products && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 space-y-3"
                      >
                        {message.products.map((product, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:border-cyan-500/30 transition-all"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-white">{product.name}</h4>
                              <span className="text-lg font-bold text-cyan-400">${product.price}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3 h-3 text-purple-400" />
                              <p className="text-sm text-gray-400">{product.reason}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {/* Suggestions */}
                    {message.suggestions && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 flex flex-wrap gap-2"
                      >
                        {message.suggestions.map((suggestion, idx) => (
                          <Badge
                            key={idx}
                            onClick={() => handleSend(suggestion)}
                            className="cursor-pointer bg-white/5 hover:bg-white/10 border-white/20 text-gray-300 hover:text-white transition-all"
                          >
                            {suggestion}
                          </Badge>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/10 rounded-2xl px-4 py-3 flex gap-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-white/10">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything... (e.g., 'Show me minimal shoes under $150')"
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50"
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 border-0"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
