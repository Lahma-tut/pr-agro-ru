import s from "./page.module.css";
import { Suspense } from "react";
import { prisma } from "@/lib/data";
import Analog from "@/components/aside/analog/Analog";
import Atributes from "@/components/card/item/Atributes";
import Price from "@/components/card/item/Price";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

// Получение Metadata
export async function generateMetadata({ params, searchParams }) {
    const id = params.id;

    const product  = await prisma.product.findUnique({
      where: {
        slug: id
      }
    });

  return {
    title: product.title,
  }
};


// Отображение данных о товаре
const Card = ({ product }) => {
  return (
    <section className={s.cart}>
      <div className={s.features}>
         <div className={s.image}>
          <Image src="/korsar-super-vrk-10l.jpeg" 
            alt="korsar-super-vrk-10l" 
            width={600} 
            height={600} />
         </div>
         <div className={s.desc}>
          <div>{ product.description }</div>
          <Atributes 
            ingredient={ product.ingredient }
            packing={ product.packing }
            manufacturer={ product.manufacturer }
            />
          <Price />
          </div>
      </div>
      <div className={s.benefits}>
        <p>
          Основной текст
        </p>
        </div>
    </section>
  )
};

// Cтраница товара

export default async function Page({ params }) {
  const product = await prisma.product.findUnique({
    where: { 
      slug: params.id 
    },
    include: {
      manufacturer: true,
      packing:      true,
      category:     true,
      ingredient:   true
    }
  });

  return (
    <section className={s.content}>
      <Breadcrumbs h1={ product.title } h2={ product.category[0].title }/>
      <div className={s.container}>
      <div className={s.body}>
        <Suspense fallback={"Loading..."}>
          <Card product={ product }/>
        </Suspense>
        </div>
      <aside className={s.aside}>
        <Analog />
        </aside>
      </div>
    </section>
  )
};