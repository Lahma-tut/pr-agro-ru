import { prisma } from '@/db/prisma';

export const fetchProducts = async () => {
    
  const data = await prisma.product.findMany();
  
  // const filteredProducts = data.filter((item) => 
  //     item.title.toLowerCase().includes(query.toLowerCase));
    
  // return [...fetchProducts];  

  return data.json()
};