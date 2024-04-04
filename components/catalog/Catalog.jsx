import ImgPesticides from '@/public/pesticides-juk.jpeg'
import ImgFertilizers from '@/public/fertilizers-1011.jpeg'
import ImgBiopreparaty from '@/public/bio-preparaty-1011.jpeg'
import ImgVspomogatelnye from '@/public/vspomogatelnye-preparaty-1011.jpeg'
import ImgSubstraty from '@/public/substraty-1011.jpeg'
import ImgLovushki from '@/public/lovushki-1011.jpeg'
import CatalogCard from './CatalogCard'
import styles from './catalog.module.css'


export default function Catalog() {
  return (
    <div className={styles.category_row}>
      <CatalogCard
        title='Пестициды'
        image={ImgPesticides} />
      <CatalogCard
        title='Удобрения'
        image={ImgFertilizers} />
      <CatalogCard
        title='Биопрепараты'
        image={ImgBiopreparaty} />
      <CatalogCard
        title='Вспомогательные препараты'
        image={ImgVspomogatelnye} />
      <CatalogCard
        title='Для почвы'
        image={ImgSubstraty} />
      <CatalogCard
        title='Ловушки'
        image={ImgLovushki} />
    </div>
  )
}