// import { prisma } from "@/lib/data";
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);

//   const query = searchParams.get("q");

//   let currentProduct = await prisma.product.findMany()

//   if (query) {
//     currentProduct = await prisma.product.findMany()
//                             .map((product: any) => product.title.toLowerCase()
//                             .includes(query.toLowerCase))
//   };

//   return NextResponse.json(currentProduct);
// }