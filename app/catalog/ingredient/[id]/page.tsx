import styles from '@/app/catalog/page.module.css'
import Filter from '@/components/aside/filter/Filter'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import { H2 } from '@/components/headling/H2'
import { H1 } from '@/components/headling/H1'
import { Metadata } from 'next'
import { getIngredientUnique, getIngredientMetadata } from '@/db/ingredient'
import { ProductItem } from '@/components/products/ProductItem'

type Props = {
	params: {
		id: string
	}
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {  
  const { ingredientMetadata } = await getIngredientMetadata(id)
  return {
    title: ingredientMetadata?.title
  }
}

export default async function Page({ params: {id} }: Props) {
  const { ingredientUnique } = await getIngredientUnique(id)

  return (
    <>
      <Breadcrumb>
        <H2 category='Каталог' slug='' />
        <H1 title={ingredientUnique?.title} />
      </Breadcrumb>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <Filter />
        </aside>
        <div className={styles.body}>
          {ingredientUnique?.product.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}