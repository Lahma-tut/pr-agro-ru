// export const getProducts = async () => {
//   const response = await fetch('http://localhost:3000/api/product');
  
//   if (!response) throw new Error('Ошибка fetch')
  
//   return response.json()
// };


// export const getDataAxios = async () => {
//   try {
//       const { data } = await axios.get('http://localhost:3000/api/product');
//   } catch (error) {
//       console.log(error.message);
//   }
// }


// import { prisma } from '@/db/prisma';
// import { NextResponse } from 'next/server';

// export async function GET(request, response) {
//   try {
// // создаем пагинацию, лимиит, поиск, категорию-производитель
//     const page = parseInt(request.query.page) -1 || 0;
//     const limit = parseInt(request.query.limit) || 5;
//     const search = request.query.search || '';
//     const manufacturer = request.query.manufacturer || 'ALL';

// // получаем всех производителей 
//     const manufacturerOptions = await prisma.manufacturer.findMany();
//     manufacturer === 'ALL' 
//       ? (manufacturer = [...manufacturerOptions])
//       : (manufacturerOptions = request.query.manufacturer.split(','));
//       request.query.sort ? (sort = request.query.sort.split(',')) : (sort = [sort]);
    
//     let sortBy = {};
//     if(sort[1]) {
//       sortBy[sort[0]] = [sort[1]];
//     } else {
//       sortBy[sort[0]] = 'asc';
//     }

//     const Products = await prisma.product.findMany();
//     const product = await Products.find({ name: {$regex: search, options: 'i'}})
//       .where(manufacturer)
//       .in([...manufacturer])
//       .sort(sortBy)
//       .skip(page * limit)
//       .limit(limit);

//     const total = await Products.countDocuments({
//       manufacturer: {$in: [...manufacturer]},
//       title: {$regex: search, $options: 'i'},
//     });

//     const response = {
//       error: false,
//       total,
//       page: page + 1,
//       manufacturer: manufacturerOptions,
//       movies,
//     }

//     response.status(200).NextResponse.json(response)

//   } catch (err) {
//     console.log(err);
//     response.status(500).json({error: true, message: "Internal Server Error"});
//   }
// }






// // Основной рабочий код
// // import { prisma } from '@/db/prisma';
// // import { NextResponse } from 'next/server';

// // export async function GET(request, response) {
// //     const data = await prisma.product.findMany();

// //   return NextResponse.json(data);
// // }