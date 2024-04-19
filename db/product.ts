import prisma from './prisma'

// Данные для получаем ProductUnique и всех атрибутов
export async function getProductUnique(id: string) {
  try {
    const productUnique = await prisma.product.findUnique({
      where: {
        slug: id
      },
      include: {
        manufacturer: true,
        packing: true,
        category: true,
        ingredient: true
      }
    })
    return { productUnique }
  } catch (error) {
    return {error}
  }
}

// получаем metadata
export async function getProductMetadata(id: string) {
  try {
    const productMetadata = await prisma.product.findUnique({
      where: {
        slug: id
      }
    })
    return { productMetadata }
  } catch (error) {
    return {error}
  }
}

