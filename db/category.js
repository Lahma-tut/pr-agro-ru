import prisma from './prisma'

export default async function getCategory() {
  try {
    const category = await prisma.category.findMany();
    return { category }
  } catch (error) {
    return { error }
  }
};