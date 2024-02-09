import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import styles from "./page.module.css"
import Filter from "@/components/aside/filter/Filter";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { prisma } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop | Next App",
  description: "Generated by create next app",
};

type CategoryType = {
  id: string; 
  slug: string; 
  title: string;
}

async function CategoryList() {
  const categories = await prisma.category.findMany();


  console.log("Страница catalog:", categories)

  return (
    <ul>
      { categories.map((category: any) => (
        <li key={category.id}>
          <Link 
                className={styles.link} 
                href={`/catalog/category/${category.slug}`}>
                { category.title }
            </Link>
        </li>
      ))}
    </ul>
  )
};

export default function Shop() {
  
  return (
    <section>
      <Breadcrumbs h1="Каталог" />
      <div className={styles.container}>
        <aside className={styles.aside}>
          <Filter />
          </aside>
        <div className={styles.body}>
          <Suspense fallback={"Loading..."}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </section>
  );
};