export interface Recipe {
  id: string
  title: string
  description: string
  image: string
  prepMinutes: number
  cookMinutes: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  tags: string[]
}

export const sampleRecipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Lemon Ricotta Pancakes',
    description: 'Fluffy, tangy pancakes folded with fresh ricotta and finished with a bright lemon-honey drizzle.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    prepMinutes: 10,
    cookMinutes: 15,
    difficulty: 'Easy',
    tags: ['Breakfast', 'Brunch'],
  },
  {
    id: 'r2',
    title: 'Tuscan White Bean Stew',
    description: 'A cozy one-pot stew with cannellini beans, rosemary, kale and a salty parmesan rind for depth.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    prepMinutes: 15,
    cookMinutes: 45,
    difficulty: 'Easy',
    tags: ['Vegetarian', 'Soup', 'Dinner'],
  },
  {
    id: 'r3',
    title: 'Miso-Glazed Salmon',
    description: 'Caramelized salmon brushed with a sweet-savory miso glaze, served over steamed jasmine rice.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    prepMinutes: 20,
    cookMinutes: 18,
    difficulty: 'Medium',
    tags: ['Seafood', 'Weeknight'],
  },
  {
    id: 'r4',
    title: 'Roasted Tomato Galette',
    description: 'A rustic free-form tart with blistered tomatoes, herbed goat cheese and a flaky butter crust.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    prepMinutes: 30,
    cookMinutes: 40,
    difficulty: 'Medium',
    tags: ['Vegetarian', 'Baking'],
  },
  {
    id: 'r5',
    title: 'Slow-Braised Short Ribs',
    description: 'Fork-tender beef short ribs braised in red wine with carrots, thyme and a deep, glossy sauce.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    prepMinutes: 25,
    cookMinutes: 180,
    difficulty: 'Hard',
    tags: ['Beef', 'Comfort', 'Sunday'],
  },
  {
    id: 'r6',
    title: 'Dark Chocolate Olive Oil Cake',
    description: 'A deeply fudgy single-layer cake made with good olive oil, finished with flaky sea salt.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    prepMinutes: 15,
    cookMinutes: 40,
    difficulty: 'Easy',
    tags: ['Dessert', 'Baking'],
  },
]
