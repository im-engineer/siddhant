import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingCart, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { toast } from 'sonner';

interface ProductGridProps {
  searchQuery: string;
}

const products = [
  {
    id: 1,
    name: 'Neural Smart Watch',
    price: 299,
    originalPrice: 499,
    image: 'technology watch',
    category: 'Wearables',
    rating: 4.9,
    reviews: 2847,
    ai: 'Perfect for your active lifestyle',
    deliveryTime: '10 min',
    carbonFootprint: 'Low',
  },
  {
    id: 2,
    name: 'Quantum Headphones',
    price: 199,
    originalPrice: 349,
    image: 'modern headphones',
    category: 'Audio',
    rating: 4.8,
    reviews: 1523,
    ai: 'Matches your music taste',
    deliveryTime: '15 min',
    carbonFootprint: 'Medium',
  },
  {
    id: 3,
    name: 'Holographic Sneakers',
    price: 149,
    originalPrice: 249,
    image: 'futuristic sneakers',
    category: 'Fashion',
    rating: 4.7,
    reviews: 3241,
    ai: 'Your size: US 9 (95% confident)',
    deliveryTime: '20 min',
    carbonFootprint: 'Low',
  },
  {
    id: 4,
    name: 'Smart Fabric Jacket',
    price: 349,
    originalPrice: 599,
    image: 'tech jacket',
    category: 'Fashion',
    rating: 4.9,
    reviews: 892,
    ai: 'Weather-adaptive recommendation',
    deliveryTime: '25 min',
    carbonFootprint: 'Low',
  },
  {
    id: 5,
    name: 'Minimalist Chair',
    price: 599,
    originalPrice: 999,
    image: 'modern chair',
    category: 'Furniture',
    rating: 4.8,
    reviews: 1847,
    ai: 'Fits perfectly in your space',
    deliveryTime: '1 day',
    carbonFootprint: 'High',
  },
  {
    id: 6,
    name: 'Ambient Light System',
    price: 249,
    originalPrice: 399,
    image: 'smart lighting',
    category: 'Smart Home',
    rating: 4.9,
    reviews: 2156,
    ai: 'Complements your setup',
    deliveryTime: '15 min',
    carbonFootprint: 'Low',
  },
];

export function ProductGrid({ searchQuery }: ProductGridProps) {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        toast.info('Removed from favorites');
      } else {
        newSet.add(id);
        toast.success('Added to favorites');
      }
      return newSet;
    });
  };

  const addToCart = (product: typeof products[0]) => {
    toast.success(`Added ${product.name} to cart`, {
      description: `Delivery in ${product.deliveryTime}`,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-2"
        >
          AI-Curated For You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400"
        >
          Personalized picks based on your preferences and behavior
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Card className="overflow-hidden border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 border-0 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    {product.deliveryTime}
                  </Badge>
                  {product.carbonFootprint === 'Low' && (
                    <Badge className="bg-green-500/90 border-0 text-white">
                      Eco-Friendly
                    </Badge>
                  )}
                </div>

                {/* Favorite button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </motion.button>

                {/* Quick actions */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => addToCart(product)}
                    className="w-full bg-white/90 backdrop-blur-sm text-black hover:bg-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-cyan-400 mb-1">{product.category}</p>
                    <h3 className="font-semibold text-white">{product.name}</h3>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <p className="text-xs text-purple-300">{product.ai}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-white">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">({product.reviews.toLocaleString()} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="outline" className="ml-auto border-green-500/50 text-green-400">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
