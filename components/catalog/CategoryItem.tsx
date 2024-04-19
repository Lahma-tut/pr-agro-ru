import styles from './catalog.module.css'
import Link from 'next/link'
import { Category } from '@prisma/client'

type CategoryItemProps = {
	category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {

	return (
		<li key={category.id}>
			<Link className={styles.category_link}
				href={`/catalog/category/${category.slug}`}>
				
				{ category.title }

			</Link>
		</li>
	)
}