import Image from 'next/image'
import styles from './partners.module.css'
import { partnersList } from './data'


function PartnersLists() {
  return (
    <ul className={styles.row}>
      {
        partnersList.map(item => <li key={item.id}>
          <Image
            src={item.url}
            alt={item.alt}
            width={80}
            height={80}
          />
        </li>
        )
      }
    </ul>
  )
}


export default function Partners() {
  return (
    <div className={styles.partners}>
      <div className={styles.title}>
        <h2>Реализуем</h2>
      </div>
      <div className={styles.partners_body}>
        <PartnersLists />
      </div>
    </div>
  )
}