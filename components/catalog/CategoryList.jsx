import { prisma } from '@/db/prisma'
import Link from 'next/link'
import styles from './catalog.module.css'


export default async function CategoryList() {
  const category = await prisma.category.findMany()

	return (
		<ul>
			{category.map((category) => (
				<li key={category.id}>
					<Link className={styles.category_link}
						href={`/catalog/category/${category.slug}`}>
						{category.title}
					</Link>
				</li>
			))}
		</ul>
	)
}