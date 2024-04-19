import styles from '@/app/catalog/page.module.css'
import Filter from '@/components/aside/filter/Filter'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import { H2 } from '@/components/headling/H2'
import { H1 } from '@/components/headling/H1'
import { Metadata } from 'next'
import { getCategoryMetadata, getCategoryUnique } from '@/db/category'
import { ProductItem } from '@/components/products/ProductItem'

type Props = {
	params: {
		id: string
	}
}

export async function generateMetadata({ params: {id} }: Props): Promise<Metadata> {
	const { categoryMetadata } = await getCategoryMetadata(id)
	return {
		title: categoryMetadata?.title
	}
}

export default async function Page({ params: {id} }: Props) {
	const { categoryUnique } = await getCategoryUnique(id)

  console.table(categoryUnique)

	return (
		<>
			<Breadcrumb>
				<H2 category='Каталог' />
				<H1 title={categoryUnique?.title} />
			</Breadcrumb>
			<div className={styles.container}>
				<aside className={styles.aside}>
					<Filter />
				</aside>
				<div className={styles.body}>
					
					{categoryUnique?.product.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}

				</div>
			</div>
		</>
	)
}