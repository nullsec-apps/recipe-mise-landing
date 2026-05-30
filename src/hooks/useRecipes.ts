import { useState, useEffect, useCallback } from 'react'
import { Recipe, sampleRecipes } from '../lib/sampleRecipes'

const STORAGE_KEY = 'mise.recipes.v1'

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          setRecipes(JSON.parse(stored))
        } else {
          setRecipes(sampleRecipes)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleRecipes))
        }
      } catch {
        setRecipes(sampleRecipes)
      }
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const addRecipe = useCallback((r: Omit<Recipe, 'id'>) => {
    setRecipes((prev) => {
      const next = [{ ...r, id: crypto.randomUUID() }, ...prev]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }, [])

  return { recipes, loading, addRecipe }
}
