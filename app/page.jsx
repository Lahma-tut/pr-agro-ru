import styles from './page.module.css'
import Slider from '@/components/slider/Slider'
import Catalog from '@/components/catalog/Catalog'
import About from '@/components/about/About'
import Partners from '@/components/partners/Partners'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Slider />
        <div className={styles.body}>
          <h2 className={styles.home_h2}>
            <Link href='/catalog'>
              Каталог
            </Link>
            <span className={styles.arrow}> &#5125;</span>
          </h2>
        </div>
        <Catalog />
        {/* <About />
          <Partners /> */}
      </div>
    </>
  )
}