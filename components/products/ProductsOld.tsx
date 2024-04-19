import Image from 'next/image'
import Link from 'next/link'
import styles from './products.module.css'

type Props = {
	products: {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: number;
	} [] | undefined
}

export default function Products({ products }: Props) {
	return (
		<>
			{products?.map((product) => (
				<Link
					key={product.id}
					href={`/catalog/${product.slug}`}
					className={styles.list}>
					
					<div className={styles.image}>
						<Image 
							src="/korsar-super-vrk-10l.jpeg" 
							alt="Изображение товара" 
							width={80} 
							height={80} 
							/>
					</div>

					<div className={styles.content}>
						<h3 className={styles.h3}>
							
							{ product.title }

							</h3>
						<div className={styles.content_row}>
							<div className={styles.desc}>
								
								{ product.description }

							</div>
							<div className={styles.price}>
								
								{ product.price }

								<span className={styles['rub']}>₽</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}