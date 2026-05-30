import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { BookOpen, Scale, ChefHat } from 'lucide-react'

interface Props { recipeCount: number; loading: boolean }

export default function EditorialHeader({ recipeCount, loading }: Props) {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <Badge variant="outline" className="border-[#C8553D]/40 text-[#C8553D] bg-[#C8553D]/5 uppercase tracking-[0.2em] text-[11px] font-semibold rounded-full px-3 py-1">
          Your kitchen, organized
        </Badge>
        <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.04] sm:leading-[1.02] mt-5 text-[#2B2420]">
          Every recipe worth<br />
          <span className="italic text-[#C8553D]">remembering</span>, in one place.
        </h1>
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#5C5249] max-w-2xl">
          Mise is a calm, editorial home for the dishes you actually cook. Save recipes from anywhere, scale
          ingredients to any crowd, and keep your handwritten notes alongside the steps \u2014 so the next time
          you reach for it, everything is already in its place.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10"
      >
        {[
          { icon: BookOpen, title: 'Collect', body: 'Keep favorites, family classics, and finds in one tidy library.' },
          { icon: Scale, title: 'Scale', body: 'Adjust portions instantly without re-doing the math.' },
          { icon: ChefHat, title: 'Cook', body: 'Clean steps and notes that stay out of your way at the stove.' },
        ].map((f) => (
          <div key={f.title} className="flex gap-3">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#EFE6D8] flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <f.icon size={20} className="text-[#C8553D]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-semibold text-[#2B2420]">{f.title}</p>
              <p className="text-sm text-[#7A6F63] leading-relaxed">{f.body}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <Separator className="mt-12 bg-[#E5DCD0]" />

      <div className="flex items-baseline justify-between mt-8">
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2B2420]">The collection</h2>
        {!loading && recipeCount > 0 && (
          <span className="text-sm text-[#9A8E80]">{recipeCount} recipe{recipeCount === 1 ? '' : 's'}</span>
        )}
      </div>
    </section>
  )
}
