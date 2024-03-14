import { prisma } from "@/db/prisma"
import styles from "./page.module.css"
import { Suspense } from "react"
import Analog from "@/components/aside/analog/Analog"
import Atributes from "@/components/card/Atributes"
import Price from "@/components/card/Price"
import Image from "next/image"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs"
import { Loading } from "@/components/loading/Loading"


// Получение Metadata
export async function generateMetadata({ params}) {
    const id = params.id;
    const product = await prisma.product.findUnique({
      where: {
        slug: id
      }
    });

  return {
    title: product.title,
  }
}

// Отображение данных о товаре
const Card = ({ product }) => {

  return (
    <section className={styles.card}>
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
          Здесь будет основной текст!
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
  })

  return (
    <section className={styles.content}>

        <Breadcrumbs h1={ product.title } h2={ product.category[0].title }/>

      <div className={styles.container}>
      <div className={styles.body}>
        <Suspense fallback={<Loading />}>
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