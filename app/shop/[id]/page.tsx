import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import styles from "./page.module.css";
import { Suspense } from "react";
import Analog from "@/components/aside/analog/Analog";
import { prisma } from "@/lib/data";
import Atributes from "@/components/card/item/Atributes";
import Price from "@/components/card/item/Price";
import Image from "next/image";

export const Card = ({ data }: any) => {
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
          <div>{ data.description }</div>
          <Atributes />
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

const Content = async ({id}: {id: string}) => {
  const data = await prisma.product.findUnique({
    where: { slug: id },
    include: {
      category: {
        select: {
          title: true
        }
      }
    }
  });
  
  console.log(data)

  return (
    <section className={styles.content}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs h1={ data.title } h2={ data.category[0].title } />
        </div>
      <div className={styles.container}>
      <div className={styles.body}>
        <Suspense fallback={"Loading..."}>
         <Card data={ data }/>
        </Suspense>
        </div>
      <aside className={styles.aside}>
        <Analog />
        </aside>
      </div>
    </section>
  )
};

export default async function Page({ params }: {params:{ id: string }}) {
  return <Content id={ params.id } />
};
