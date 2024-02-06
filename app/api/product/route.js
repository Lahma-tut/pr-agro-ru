import { prisma } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const product = await prisma.product.findMany({
      include: {
        tags: true,
        category: true
      }
    });

    return new NextResponse(JSON.stringify(product, { status: 200 }));
  } catch (error) {
    console.log(error)
    
    return new NextResponse(
      JSON.stringify({ message: "Ошибка Category" }, { status: 500 })
    );
  }
}