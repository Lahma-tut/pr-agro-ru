import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import s from "./page.module.css"
import Filter from "@/components/aside/filter/Filter";
import Loading from "@/components/loading/Loading";
import { Suspense } from "react";
import Link from "next/link";
import { prisma } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  title: "Shop | Next App",
  description: "Generated by create next app",
};


async function CategoryList() {
  const categories = await prisma.category.findMany();

  return (
    <section>
      <div>
        <div className={s.category_img}>
          <div className={s.category_info}>
            <h3>Пестициды</h3>
            <Link className={s.all_link} href="#">Смотреть все <span className={s.all_icon}>&#5125;</span></Link>
          </div>
          <Image src="/pesticides-juk.jpeg" 
              alt="pesticides-juk" 
              width={400} 
              height={200} />
          </div>
          <div className={s.category_list}>
              <ul>
              { categories.map((category) => (
                <li key={category.id}>
                  <Link className={s.category_link} 
                        href={`/catalog/category/${category.slug}`}>
                        { category.title }
                    </Link>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </section>
  )
};


export default function Shop() {
  
  return (
    <section>
      <Breadcrumbs h1="Каталог" />
      <div className={s.container}>
        <aside className={s.aside}>
          <Filter />
          </aside>
        <div className={s.body}>
          <Suspense fallback={<Loading />}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </section>
  );
};




