import { prisma } from "@/db/prisma";
import styles from "@/app/catalog/page.module.css";
import Filter from "@/components/aside/filter/Filter";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

// Получение Metadata
export async function generateMetadata({ params, searchParams }) {
	const id = params.id;

	const category = await prisma.category.findUnique({
		where: {
			slug: id
		}
	});

	return {
		title: category.title,
	}
};


// Вывод категории с товаром
const ProductsList = async ({ products }) => {
	return (
		<>
			{products.map((product) => (
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


// Страница категорий
export default async function Page({ params }) {
	const category = await prisma.category.findUnique({
		where: {
			slug: params.id
		},
		select: {
			title: true,
			product: true
		}
	})

	return (
		<>
			<Breadcrumbs>
				<h2 className={styles.h2}>
					<Link href="/catalog">Каталог</Link>
				</h2>
				<h1 className={styles.h1}>{ category.title }</h1>
			</Breadcrumbs>
			<div className={styles.container}>
				<aside className={styles.aside}>
					<Filter />
				</aside>
				<div className={styles.body}>
					<Suspense fallback={<p>Suspense...</p>}>
						<ProductsList products={category.product} />
					</Suspense>
				</div>
			</div>
		</>
	)
};