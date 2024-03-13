import { prisma } from "@/db/prisma";

// export const dataProducts = async () => {
//   const response = await prisma.product.findMany();
    
//   if (!response) throw new Error('Ошибка dataProducts');
    
//   return response;
// };


// export default async function dataProducts () {
//   const response = await prisma.product.findMany();
//   return response.json()
// } 

// import { prisma } from "@/db/prisma";

// export const dataProducts = async (searchTerm) => {
//   const response = await prisma.product.findMany({
//     where: {
//       title: {
//         endsWith: searchTerm,
//       }
//     }
//   });
    
//   if (!response) throw new Error('Ошибка dataProducts');
    
//   return response;
// };