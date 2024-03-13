import { prisma } from "./db";

export async function getIngredient() {
  try {
    const ingredient = await prisma.ingredient.findMany();
      return { ingredient }
  } catch (error) {
      return { error }
  }
};