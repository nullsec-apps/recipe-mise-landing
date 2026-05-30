import { useState } from 'react'
import TopNav from './components/TopNav'
import EditorialHeader from './components/EditorialHeader'
import RecipeGrid from './components/RecipeGrid'
import AddRecipeDialog from './components/AddRecipeDialog'
import ErrorBoundary from './components/ErrorBoundary'
import { Toaster } from 'react-hot-toast'
import { useRecipes } from './hooks/useRecipes'

export default function App() {
  const { recipes, loading, addRecipe } = useRecipes()
  const [open, setOpen] = useState(false)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#FBF6EF] text-[#2B2420] overflow-x-hidden">
        <TopNav onAdd={() => setOpen(true)} />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <EditorialHeader recipeCount={recipes.length} loading={loading} />
          <RecipeGrid recipes={recipes} loading={loading} onAdd={() => setOpen(true)} />
        </main>
        <footer className="border-t border-[#E5DCD0] py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#7A6F63]">
            <span className="font-serif-display text-xl text-[#2B2420]">Mise</span>
            <span>Cook with intention. \u00a9 {new Date().getFullYear()}</span>
          </div>
        </footer>
        <AddRecipeDialog open={open} onOpenChange={setOpen} onSubmit={addRecipe} />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: { background: '#2B2420', color: '#FBF6EF', borderRadius: '9999px', fontSize: '14px' },
          }}
        />
      </div>
    </ErrorBoundary>
  )
}
