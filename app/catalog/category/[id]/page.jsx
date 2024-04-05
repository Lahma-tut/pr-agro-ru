import { prisma } from '@/db/prisma'
import styles from '@/app/catalog/page.module.css'
import Filter from '@/components/aside/filter/Filter'
import { Suspense } from 'react'
import Products from '@/components/products/Products'
import Skeleton from '@/components/breadcrumbs/Skeleton'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import { LoadingServer } from './../../loading'
import H2 from '@/components/headling/H2'
import H1 from '@/components/headling/H1'

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
				<H2 category='Каталог' slug='' />
				<H1 title={category.title} slug={category.slug} />
			</Breadcrumbs>
			<div className={styles.container}>
				<aside className={styles.aside}>
					<Filter />
				</aside>
				<div className={styles.body}>
					<Suspense fallback={<LoadingServer />}>
						<Products products={category.product} />
					</Suspense>
				</div>
			</div>
		</>
	)
}