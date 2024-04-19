import styles from './catalog.module.css'
import CatalogCard from './CatalogCard'

export default function Catalog() {
  return (
    <div className={styles.category_row}>
      <CatalogCard
        title='Пестициды'
        image='/pesticides-juk.jpeg' 
        />
      <CatalogCard
        title='Удобрения'
        image='/fertilizers-1011.jpeg' 
        />
      <CatalogCard
        title='Биопрепараты'
        image='/bio-preparaty-1011.jpeg' 
        />
      <CatalogCard
        title='Вспомогательные препараты'
        image='/vspomogatelnye-preparaty-1011.jpeg' 
        />
      <CatalogCard
        title='Для почвы'
        image='/substraty-1011.jpeg' 
        />
      <CatalogCard
        title='Ловушки'
        image='/lovushki-1011.jpeg' 
        />
    </div>
  )
}