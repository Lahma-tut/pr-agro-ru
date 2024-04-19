import styles from './page.module.css'
import Analog from '@/components/aside/analog/Analog'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import { H1 } from '@/components/headling/H1'
import { H2 } from '@/components/headling/H2'
import { getProductMetadata, getProductUnique } from '@/db/product'
import Image from 'next/image'
import Atributes from '@/components/card/Atributes'
import Price from '@/components/card/Price'

type Props = {
  params: {
    id: string
  }
}

// Получение Metadata
export async function generateMetadata({ params: { id } }: Props) {
  const { productMetadata } = await getProductMetadata(id)
  return {
    title: productMetadata?.title
  }
}

export default async function Page({ params: { id } }: Props) {
  const { productUnique } = await getProductUnique(id)

  return (
    <>
      <Breadcrumb>
        <H2 category={productUnique?.category[0].title}
          slug={productUnique?.category[0].slug} />
        <H1 title={productUnique?.title} />
      </Breadcrumb>
      <div className={styles.container}>
        <div className={styles.body}>
          <article className={styles.card}>
            <div className={styles.features}>
              <div className={styles.image}>
                <Image src="/korsar-super-vrk-10l.jpeg"
                  alt="korsar-super-vrk-10l"
                  width={600}
                  height={600}
                />
              </div>
              <div className={styles.desc}>
                <div>{productUnique?.description}</div>

                <Atributes
                  ingredient={productUnique?.ingredient}
                  packing={productUnique?.packing}
                  manufacturer={productUnique?.manufacturer}
                />
                <Price
                />
              </div>
            </div>
            <div className={styles.benefits}>
              <p>
                Здесь будет основной текст!
              </p>
            </div>
          </article>
        </div>
        <aside className={styles.aside}>
          <Analog />
        </aside>
      </div>
    </>
  )
}