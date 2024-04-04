import { prisma } from "@/db/prisma"
import { Suspense } from "react"
import styles from "./page.module.css"
import Analog from "@/components/aside/analog/Analog"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs"
import { Skeleton } from "@/components/breadcrumbs/Skeleton"
import Card from "@/components/card/Card"
import H1 from "@/components/headling/H1"
import H2 from "@/components/headling/H2"
import { LoadingServer } from "./../loading"


// Получение Metadata
export async function generateMetadata({ params }) {
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

export default async function Page({ params }) {
  const product = await prisma.product.findUnique({
    where: {
      slug: params.id
    },
    include: {
      manufacturer: true,
      packing: true,
      category: true,
      ingredient: true
    }
  })

  return (
    <>
      <Breadcrumbs>
        <H2 category={product.category[0].title}
          slug={product.category[0].slug} />
        <H1 title={product.title} />
      </Breadcrumbs>
      <div className={styles.container}>
        <div className={styles.body}>
          <Suspense fallback={<LoadingServer />}>
            <Card product={product} />
          </Suspense>
        </div>
        <aside className={styles.aside}>
          <Analog />
        </aside>
      </div>
    </>
  )
}