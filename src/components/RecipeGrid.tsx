import { Recipe } from '../lib/sampleRecipes'
import RecipeCard from './RecipeCard'
import EmptyState from './EmptyState'
import { Skeleton } from '@/components/ui/skeleton'

interface Props { recipes: Recipe[]; loading: boolean; onAdd: () => void }

export default function RecipeGrid({ recipes, loading, onAdd }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="w-full aspect-[4/3] rounded-2xl bg-[#EFE6D8]" />
            <Skeleton className="h-5 w-3/4 bg-[#EFE6D8]" />
            <Skeleton className="h-4 w-full bg-[#EFE6D8]" />
            <Skeleton className="h-4 w-1/2 bg-[#EFE6D8]" />
          </div>
        ))}
      </div>
    )
  }

  if (recipes.length === 0) {
    return <EmptyState onAdd={onAdd} />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((r, i) => (
        <RecipeCard key={r.id} recipe={r} index={i} />
      ))}
    </div>
  )
}
