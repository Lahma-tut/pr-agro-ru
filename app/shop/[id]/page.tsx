import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import styles from "./page.module.css";
import { Suspense } from "react";
import Analog from "@/components/aside/analog/Analog";
import { prisma } from "@/lib/data";
import { Card } from "@/components/card/Card";


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
