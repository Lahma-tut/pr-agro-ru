import prisma from './prisma'

// Данные для вывода списка всех категорий
export async function getCategory() {
  try {
    const category = await prisma.category.findMany();
    return { category }
  } catch (error) {
    return { error }
  }
}

// Данные для вывода одной категории со списком товара
export async function getCategoryUnique(id: string) {
  try {
    const categoryUnique = await prisma.category.findUnique({
      where: {
        slug: id
      },
      select: {
        title: true,
        product: true
      }
    })
    return { categoryUnique }
  } catch (error) {
    return {error}
  }
}

// Данные для Metadata
export async function getCategoryMetadata(id: string) {
  try {
    const categoryMetadata = await prisma.category.findUnique({
      where: {
        slug: id
      }
    })
    return { categoryMetadata }
  } catch (error) {
    return {error}
  }
}