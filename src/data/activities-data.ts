import BoxingGlovesIcon from '@/components/assets/BoxingGlovesIcon.astro'
import CrossFitIcon from '@/components/assets/CrossFitIcon.astro'
import PilatesIcon from '@/components/assets/PilatesIcon.astro'
import NutritionIcon from '@/components/assets/NutritionIcon.astro'
import DirectedClassesIcon from '@/components/assets/DirectedClassesIcon.astro'
import FuncionalTrainingIcon from '@/components/assets/FuncionalTrainingIcon.astro'

export const activities = [
  { title: 'Crossfit', icon: CrossFitIcon, price: 30 },
  { title: 'Boxeo', icon: BoxingGlovesIcon, price: 25 },
  { title: 'Entrenamiento Funcional', icon: FuncionalTrainingIcon, price: 25 },
  { title: 'Clases dirigidas', icon: DirectedClassesIcon, price: 25 },
  { title: 'Pilates', icon: PilatesIcon, price: 25 },
  { title: 'Nutrición', icon: NutritionIcon, price: 25 },
]
