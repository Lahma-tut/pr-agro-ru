import styles from './page.module.css'
import Slider from '@/components/slider/Slider'
import Catalog from '@/components/catalog/Catalog'
import About from '@/components/about/About'
import  Partners from '@/components/partners/Partners'
import Link from 'next/link'


function Home() {
  return (
    <>
      <div className={styles.home}>
          <Slider />
          
          <div className={styles.title}>
            <Link 
              className={styles.link}
              href='/catalog'
              >
              <h2>Каталог</h2>
            </Link>
            <span className={styles.arrow}> &#5125;</span>
          </div>
          <Catalog />
          <About />
          <Partners />
      </div>
    </>
  )
}

export default Home;