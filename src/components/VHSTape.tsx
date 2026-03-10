import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface VHSTapeProps {
  title: string;
  year: string;
  color: string;
  rating: number;
  genre: string;
  ratingSticker?: string;
  onClick?: () => void;
  compact?: boolean;
}

export function VHSTape({ title, year, color, rating, genre, ratingSticker, onClick, compact = false }: VHSTapeProps) {
  if (compact) {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="flex items-center gap-4 p-3 bg-white rounded-3xl shadow-sm border border-orange-100 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-16 rounded-xl shrink-0 relative overflow-hidden shadow-inner" style={{ backgroundColor: color }}>
          <div className="absolute top-0 bottom-0 left-1 w-0.5 bg-white/20" />
          <div className="absolute top-2 left-0 right-0 h-3 bg-white/90 mx-1 rounded-sm shadow-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 truncate">{title}</h4>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
            <span>{year}</span>
            <span>•</span>
            <span>{genre}</span>
          </div>
        </div>
        <div className="flex gap-0.5 text-orange-400 shrink-0">
          <Star size={12} fill="currentColor" />
          <span className="text-sm font-bold ml-1 text-gray-700">{rating}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative w-28 h-48 md:w-32 md:h-56 rounded-3xl shadow-xl border-4 border-black/5 cursor-pointer group shrink-0 transition-transform duration-300 ${Math.random() > 0.5 ? 'rotate-1' : '-rotate-1'}`}
      style={{ backgroundColor: color }}
    >
      {/* 등급 스티커 */}
      {ratingSticker && (
        <div
          className="absolute top-10 -right-1 z-20 bg-orange-500 text-white font-handwriting font-bold shadow-md px-1.5 py-0.5 text-[8px] leading-tight whitespace-nowrap"
          style={{ transform: 'rotate(8deg)', transformOrigin: 'right top' }}
        >
          ⚠ {ratingSticker}
        </div>
      )}

      {/* Spine Label */}
      <div className="absolute top-2 left-2 right-2 h-6 md:h-8 bg-paper rounded-xl flex items-center justify-center overflow-hidden shadow-inner border border-black/5">
        <span className="text-[10px] md:text-xs font-bold truncate px-1 font-mono uppercase tracking-tighter text-ink">
          {title}
        </span>
      </div>

      {/* Tape Window */}
      <div className="absolute top-12 md:top-14 left-3 right-3 h-16 md:h-20 bg-ink rounded-2xl border-4 border-black/20 flex items-center justify-center shadow-inner">
        <div className="w-full h-full flex items-center justify-between px-2">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white/10 bg-white/5" />
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white/10 bg-white/5" />
        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-3 left-2 right-2 text-white/80 text-[9px] md:text-[10px] font-mono flex flex-col gap-1">
        <div className="flex justify-between">
          <span>{year}</span>
          <span>{genre}</span>
        </div>
        <div className="flex gap-0.5 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={8} fill={i < Math.floor(rating) ? 'currentColor' : 'none'} />
          ))}
        </div>
      </div>

      {/* Side textures */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/20" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10" />
    </motion.div>
  );
}
