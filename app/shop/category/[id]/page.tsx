import { prisma } from "@/lib/data";
import styles from "@/app/shop/page.module.css";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Filter from "@/components/aside/filter/Filter";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: any) {
  return {
    title: params.id,
  }
};

const CardList = async ({product}: any) => {
  return (
    <section > 
      {product.map((product: any)=> (
      <Link 
        key={product.id}
        href={`/shop/${product.slug}`}
        className={styles.container}>
        <div className={styles.image}>
          <Image src="/korsar-super-vrk-10l.jpeg" alt="" width={80} height={80}/>
          </div>
        <div className={styles.content}>
          <h3 className={styles.h3}>{product.title}</h3>
          <div className={styles.desc}>
            {product.description}  
          </div>
        </div>
        <div className={styles.price}>
          {product.price}
        </div>
      </Link>
      ))}
    </section>
  )
};

const Content = async ({id}: {id: string}) => {
  const data = await prisma.category.findUnique({
    where: {
      catSlug: id
    },
    select: {
      title: true,
      product: true
    }
  })

  console.log(data)

  return (
    <section>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs h1={ data.title } h2="Shop" />
      </div>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <Filter />
        </aside>
      <div className={styles.body}>
        <Suspense fallback={"Loading..."}>
          <CardList product={data.product} />
        </Suspense>
      </div>
      </div>
    </section>
  )
};

export default function Page({ params }: {params:{ id: string }}) {
  return <Content id={ params.id } />
};