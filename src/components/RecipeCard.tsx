import { useState } from 'react'
import { Recipe } from '../lib/sampleRecipes'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Clock, ArrowUpRight } from 'lucide-react'
import { totalTime, formatTime } from '../lib/formatTime'

interface Props { recipe: Recipe; index: number }

const diffColor: Record<string, string> = {
  Easy: 'bg-[#E3EFE0] text-[#3E6B47]',
  Medium: 'bg-[#F6ECD6] text-[#9A6B1E]',
  Hard: 'bg-[#F6DED8] text-[#A8432F]',
}

const FALLBACK = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80'

export default function RecipeCard({ recipe, index }: Props) {
  const [imgSrc, setImgSrc] = useState(recipe.image)
  const total = totalTime(recipe.prepMinutes, recipe.cookMinutes)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.5), ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Card className="overflow-hidden border-[#E5DCD0] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden aspect-[4/3] bg-[#EFE6D8]">
          <img
            src={imgSrc}
            alt={recipe.title}
            onError={() => setImgSrc(FALLBACK)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-3 left-3">
            <Badge className={`${diffColor[recipe.difficulty]} border-0 rounded-full px-3 py-1 text-xs font-semibold`}>
              {recipe.difficulty}
            </Badge>
          </span>
          <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="flex items-center gap-1 bg-[#2B2420]/90 text-[#FBF6EF] text-xs font-medium rounded-full px-3 py-1.5">
              View recipe <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-serif-display text-2xl leading-tight text-[#2B2420]">{recipe.title}</h3>
          <p className="mt-2 text-sm text-[#7A6F63] leading-relaxed line-clamp-2">{recipe.description}</p>
          <div className="flex items-center gap-2 mt-4 text-[13px] text-[#9A8E80]">
            <Clock size={15} strokeWidth={1.5} />
            <span>{formatTime(total)}</span>
            <span className="text-[#E5DCD0]">\u2022</span>
            <span>{formatTime(recipe.prepMinutes)} prep</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {recipe.tags.map((t) => (
              <span key={t} className="text-[11px] uppercase tracking-wide text-[#9A8E80] bg-[#F4ECE0] rounded-full px-2.5 py-1 transition-colors duration-200 group-hover:bg-[#EFE6D8]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
