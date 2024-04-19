import Link from 'next/link'
import styles from './atributes.module.css'
import { Ingredient, Manufacturer, Packing } from '@prisma/client'

type AtributesProps = {
		ingredient: Ingredient[] | undefined
		manufacturer: Manufacturer[] | undefined
    packing: Packing[] | undefined
}

export default function Atributes({ingredient, manufacturer, packing}: AtributesProps) {

	return (
		<>
			<section className={styles.atributes}>
				<h6 className={styles.h6}>Состав:</h6>
				<ul className={styles.ingredient}>
					{
						ingredient?.map(({id, slug, title}) => (
							<li key={id}>
								<Link href={`/catalog/ingredient/${slug}`}>
									{ title }
								</Link>
							</li>
						))
					}
				</ul>
			</section>
			<section className={styles.atributes}>
				<h6 className={styles.h6}>Культура:</h6>
				<ul className={styles.culture}>
					<li><a href="#">Пшеница озимая,</a></li>
					<li><a href="#">Пшеница яровая,</a></li>
					<li><a href="#">Ячмень яровой</a></li>
				</ul>
			</section>
			<section className={styles.atributes}>
				<h6 className={styles.h6}>Вредный объект:</h6>
				<ul className={styles.harmful}>
					<li><a href="#">Метлица полевая,</a></li>
					<li><a href="#">Овсюг,</a></li>
					<li><a href="#">Однолетние злаковые сорняки,</a></li>
					<li><a href="#">Просо куриное,</a></li>
					<li><a href="#">Просо сорнополевое,</a></li>
					<li><a href="#">Щетинник</a></li>
				</ul>
			</section>
			<section className={styles.manufacturer}>
				<h6 className={styles.h6}>Производитель:</h6>
				<div className={styles.item}>
					<Link href="#">{manufacturer?.map(({title}) => (title))}</Link>
				</div>
			</section>
			<section className={styles.package}>
				<h6 className={styles.h6}>Упаковка:</h6>
				<div className={styles.item}>{packing?.map(({title}) => (title))}<span>л</span></div>
			</section>
		</>
	)
}