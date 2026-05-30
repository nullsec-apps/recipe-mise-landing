import { Button } from '@/components/ui/button'
import { Plus, UtensilsCrossed } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props { onAdd: () => void }

export default function TopNav({ onAdd }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-30 backdrop-blur-md bg-[#FBF6EF]/80 border-b border-[#E5DCD0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C8553D] flex items-center justify-center">
            <UtensilsCrossed size={18} className="text-[#FBF6EF]" strokeWidth={1.5} />
          </div>
          <div className="leading-none">
            <span className="font-serif-display text-2xl text-[#2B2420]">Mise</span>
            <span className="hidden sm:inline ml-2 text-xs uppercase tracking-widest text-[#9A8E80]">recipe keeper</span>
          </div>
        </div>
        <Button onClick={onAdd} className="bg-[#C8553D] hover:bg-[#A8432F] text-[#FBF6EF] h-11 px-4 rounded-full transition-all duration-200 active:scale-95">
          <Plus size={18} strokeWidth={2} className="mr-1" />
          <span className="hidden xs:inline sm:inline">Add Recipe</span>
          <span className="xs:hidden sm:hidden">Add</span>
        </Button>
      </div>
    </motion.header>
  )
}
