import { prisma } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        product: true
      }
    });

    return new NextResponse(JSON.stringify(categories, { status: 200 }));

  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: "Ошибка Category" }, { status: 500 })
    );
  }
}