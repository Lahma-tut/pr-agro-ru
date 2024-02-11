import { prisma } from "@/lib/data";
import styles from "@/app/catalog/page.module.css";
import Filter from "@/components/aside/filter/Filter";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

// Получение Metadata
export async function generateMetadata({ params, searchParams }) {
    const id = params.id;

    const ingredient  = await prisma.ingredient.findUnique({
      where: {
        slug: id
      }
    });

  return {
    title: ingredient.title,
  }
};

const CategoryProductsList = async ({ products }) => {
  return (
    <section > 
      {products.map(( product )=> (
      <Link 
        key={product.id}
        href={`/catalog/${product.slug}`}
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
 
export default async function Page({ params }) {

  const ingredient = await prisma.ingredient.findUnique({
    where: {
      slug: params.id
    },
    select: {
      title: true,
      product: true
    }
  })

  return (
    <section>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs h1={ ingredient.title } h2="Каталог" />
      </div>
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Filter />
      </aside>
    <div className={styles.body}>
      <Suspense fallback={"Loading..."}>
        <CategoryProductsList products={ ingredient.product }/>
      </Suspense>
    </div>
    </div>
  </section>
  )
};