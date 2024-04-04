import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import CategoryList from './CategoryList';
import styles from './catalog.module.css'


export default function CatalogCard({ image, title }) {
  return (
		<div className={styles.category_items}>
			<div className={styles.category_img}>
				<div className={styles.category_info}>
					<h3>{title}</h3>
					<Link className={styles.all_link} href='#'>
						Смотреть все<span className={styles.all_icon}> &#5125;</span>
					</Link>
				</div>
				<Image
					className={styles.image_category}
					src={image}
					alt='Изображение'
					width={400}
					height={200}
          />
			</div>
			<div className={styles.category_list}>
				<Suspense fallback={<p>Suspense...</p>}>
					<CategoryList />
				</Suspense>
			</div>
		</div>
	)
}