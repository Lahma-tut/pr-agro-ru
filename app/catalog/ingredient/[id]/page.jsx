import { prisma } from "@/db/prisma";
import styles from "@/app/catalog/page.module.css";
import Filter from "@/components/aside/filter/Filter";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import H2 from "@/components/headling/H2";
import H1 from "@/components/headling/H1";
import Products from "@/components/products/Products";

// Получение Metadata

export async function generateMetadata({ params, searchParams }) {
  const id = params.id;

  const ingredient = await prisma.ingredient.findUnique({
    where: {
      slug: id
    }
  });

  return {
    title: ingredient.title,
  }
};

// Страница Ingredient

export default async function Page({ params }) {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      slug: params.id
    },
    select: {
      title: true,
      product: true
    }
  }, {
    next: {
      revalidate: 3600
    }
  })

  return (
    <>
      <Breadcrumbs>
        <H2 category="Каталог" slug="" />
        <H1 title={ingredient.title} />
      </Breadcrumbs>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <Filter />
        </aside>
        <div className={styles.body}>
          <Suspense fallback={<p>Loading ⟲</p>}>
            <Products products={ingredient.product} />
          </Suspense>
        </div>
      </div>
    </>
  )
};