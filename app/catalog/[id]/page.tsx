import styles from "./page.module.css";
import { Suspense } from "react";
import { prisma } from "@/lib/data";
import { Metadata, ResolvingMetadata } from "next";
import Analog from "@/components/aside/analog/Analog";
import Atributes from "@/components/card/item/Atributes";
import Price from "@/components/card/item/Price";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

// TS
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Получение Metadata
export async function generateMetadata(
  { params, searchParams }: Props, patern: ResolvingMetadata
  ): Promise<Metadata> {
    
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
const Card = ({ product }: any) => {
  return (
    <section className={styles.cart}>
      <div className={styles.features}>
         <div className={styles.image}>
          <Image src="/korsar-super-vrk-10l.jpeg" 
            alt="korsar-super-vrk-10l" 
            width={600} 
            height={600} />
         </div>
         <div className={styles.desc}>
          <div>{ product.description }</div>
          <Atributes 
            ingredient={ product.ingredient }
            packing={ product.packing }
            manufacturer={ product.manufacturer }
            />
          <Price />
          </div>
      </div>
      <div className={styles.benefits}>
        <p>
          Основной текст
        </p>
        </div>
    </section>
  )
};

// Cтраница товара
export default async function Page({ params }: Props) {
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
  console.log("Страница product:", product)

  return (
    <section className={styles.content}>
      <Breadcrumbs h1={ product.title } h2={ product.category[0].title }/>
      <div className={styles.container}>
      <div className={styles.body}>
        <Suspense fallback={"Loading..."}>
          <Card product={ product }/>
        </Suspense>
        </div>
      <aside className={styles.aside}>
        <Analog />
        </aside>
      </div>
    </section>
  )
};