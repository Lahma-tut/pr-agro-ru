import prisma from './prisma'

// Данные для получение Ingredient и списка товаров в ней
export async function getIngredientUnique(id: string) {
  try {
    const ingredientUnique = await prisma.ingredient.findUnique({
      where: {
        slug: id
      },
      select: {
        title: true,
        product: true
      }
    })
    return { ingredientUnique }
  } catch (error) {
    return {error}
  }
}

// Данные для получение Metadata
export async function getIngredientMetadata(id: string){
  try {
    const ingredientMetadata = await prisma.ingredient.findUnique({
      where: {
        slug: id
      }
    })
    return { ingredientMetadata }
  } catch (error) {
    return {error}
  }
}
