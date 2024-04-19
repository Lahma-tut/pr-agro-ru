import styles from './catalog.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { CategoryItem } from './CategoryItem'
import { getCategory } from '@/db/category'

type Props = {
	title: string
	image: string
}

export default async function CatalogCard({image, title}: Props) {
	const { category } = await getCategory()

	console.table(category)

  return (
		<div className={styles.category_items}>
			<div className={styles.category_img}>
				
				<div className={styles.category_info}>
					<h3>{ title }</h3>
					<Link className={styles.all_link} href='#'>
						Смотреть все<span className={styles.all_icon}> &#5125;</span>
					</Link>
				</div>
		
				<Image
					className={styles.image_category}
					src={image}
					alt='Изображение категории'
					width={400}
					height={200}
          />
			</div>

			<div className={styles.category_list}>
				<ul>
					{category?.map((category) => (
						<CategoryItem key={category.id} category={category}/>
					))}
				</ul>
			</div>
		</div>
	)
}