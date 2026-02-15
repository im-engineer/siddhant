import { motion } from 'motion/react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Zap } from 'lucide-react';

interface KeyItem {
  title: string;
  image: string;
  description?: string;
}

interface RoleFeatureDisplayProps {
  features: KeyItem[];
  title: string;
  color?: string;
}

export default function RoleFeatureDisplay({ 
  features, 
  title,
  color = 'from-cyan-500 to-blue-500'
}: RoleFeatureDisplayProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="mt-6 sm:mt-8 md:mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className={`w-1 h-5 sm:h-6 rounded-full bg-gradient-to-b ${color}`} />
        <h4 className="text-base sm:text-lg md:text-lg font-semibold text-white">{title}</h4>
        <Badge className={`bg-gradient-to-r ${color} border-0 text-white text-xs sm:text-sm`}>
          {features.length}
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full p-0 overflow-hidden bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                {typeof feature.image === 'string' && feature.image.includes('/') ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain sm:object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Zap className="w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 text-cyan-400 opacity-50" />
                  </div>
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-4">
                <h5 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h5>
                {feature.description && (
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                    {feature.description}
                  </p>
                )}
              </div>

              {/* Highlight Bar */}
              <div className="h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
