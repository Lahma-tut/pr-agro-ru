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

// попробовать поиск на основе Prisma