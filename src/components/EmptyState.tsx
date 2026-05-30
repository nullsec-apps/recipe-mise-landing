import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { NotebookPen, Sparkles } from 'lucide-react'

interface Props { onAdd: () => void }

export default function EmptyState({ onAdd }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl border border-[#E5DCD0] bg-white px-6 py-16 sm:py-20 text-center"
    >
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#C8553D]/5 blur-2xl" />
      <div className="absolute -bottom-20 -left-12 w-64 h-64 rounded-full bg-[#EFE6D8] blur-2xl" />
      <div className="relative">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-[#EFE6D8] flex items-center justify-center">
          <NotebookPen size={28} className="text-[#C8553D]" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif-display text-3xl sm:text-4xl mt-6 text-[#2B2420]">Your collection starts here</h3>
        <p className="mt-3 text-[#7A6F63] max-w-md mx-auto leading-relaxed">
          Add the first dish you love \u2014 a weeknight pasta, your grandmother\u2019s stew, that cake you keep meaning
          to write down. Mise keeps it safe and ready to cook.
        </p>
        <motion.div
          animate={{ boxShadow: ['0 0 0 0 rgba(200,85,61,0.0)', '0 0 0 10px rgba(200,85,61,0.08)', '0 0 0 0 rgba(200,85,61,0.0)'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block mt-8 rounded-full"
        >
          <Button onClick={onAdd} className="bg-[#C8553D] hover:bg-[#A8432F] text-[#FBF6EF] h-12 px-6 rounded-full text-base transition-all duration-200 active:scale-95">
            <Sparkles size={18} strokeWidth={2} className="mr-2" />
            Add your first recipe
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
