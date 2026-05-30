import { useState } from 'react'
import { Recipe } from '../lib/sampleRecipes'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props { open: boolean; onOpenChange: (o: boolean) => void; onSubmit: (r: Omit<Recipe, 'id'>) => void }

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80'

export default function AddRecipeDialog({ open, onOpenChange, onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [prep, setPrep] = useState('15')
  const [cook, setCook] = useState('30')
  const [difficulty, setDifficulty] = useState<Recipe['difficulty']>('Easy')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const reset = () => {
    setTitle(''); setDescription(''); setImage(''); setPrep('15'); setCook('30')
    setDifficulty('Easy'); setTagInput(''); setTags([])
  }

  const addTag = () => {
    const t = tagInput.trim()
    if (t && !tags.includes(t) && tags.length < 5) {
      setTags([...tags, t])
      setTagInput('')
    }
  }

  const handleSubmit = () => {
    if (!title.trim()) { toast.error('Give your recipe a name'); return }
    if (!description.trim()) { toast.error('Add a short description'); return }
    onSubmit({
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || FALLBACK_IMG,
      prepMinutes: Math.max(0, parseInt(prep) || 0),
      cookMinutes: Math.max(0, parseInt(cook) || 0),
      difficulty,
      tags: tags.length ? tags : ['Home cooking'],
    })
    toast.success('Recipe saved')
    reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) reset(); onOpenChange(o) }}>
      <DialogContent className="bg-[#FBF6EF] border-[#E5DCD0] max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif-display text-3xl text-[#2B2420]">Add a recipe</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label className="text-[#5C5249]">Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tuscan white bean soup" className="bg-white border-[#E5DCD0] h-12 text-base" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[#5C5249]">Description</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A cozy one-pot soup with rosemary and a parmesan crust." className="bg-white border-[#E5DCD0] min-h-[80px] text-base" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[#5C5249]">Image URL (optional)</Label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." className="bg-white border-[#E5DCD0] h-12 text-base" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-[#5C5249]">Prep (min)</Label>
              <Input type="number" value={prep} onChange={(e) => setPrep(e.target.value)} className="bg-white border-[#E5DCD0] h-12 text-base" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[#5C5249]">Cook (min)</Label>
              <Input type="number" value={cook} onChange={(e) => setCook(e.target.value)} className="bg-white border-[#E5DCD0] h-12 text-base" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[#5C5249]">Difficulty</Label>
            <Select value={difficulty} onValueChange={(v) => setDifficulty(v as Recipe['difficulty'])}>
              <SelectTrigger className="bg-white border-[#E5DCD0] h-12 text-base"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[#5C5249]">Tags</Label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag() } }}
                placeholder="Vegetarian, Soup..."
                className="bg-white border-[#E5DCD0] h-12 text-base"
              />
              <Button type="button" variant="outline" onClick={addTag} className="border-[#E5DCD0] h-12 transition-all duration-200">Add</Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((t) => (
                  <Badge key={t} className="bg-[#EFE6D8] text-[#5C5249] border-0 rounded-full pl-3 pr-1.5 py-1 flex items-center gap-1">
                    {t}
                    <button onClick={() => setTags(tags.filter((x) => x !== t))} className="hover:text-[#C8553D] transition-colors duration-200">
                      <X size={13} />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <Button onClick={handleSubmit} className="w-full bg-[#C8553D] hover:bg-[#A8432F] text-[#FBF6EF] h-12 rounded-full text-base mt-2 transition-all duration-200 active:scale-95">
            Save recipe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
