'use client'

import Link from 'next/link'
import styles from './search.module.css'
import { useSearchSWR } from '@/services/fetcher'

export default function SearchResults({ query, handleReset }) {
  const { products, isLoading, error } = useSearchSWR(query)

  return (
    <>
      <ul className={styles.results_list}>
        {isLoading &&
          <p className={styles.results_list_item}>поиск...</p>}

        {!isLoading && products.length > 0 && 
          products.map(item => 
            <Link 
              key={item.id} 
              onClick={handleReset} 
              href={`/catalog/${item.slug}`}
              >
              <li className={styles.results_list_item}>
                { item.title }
              </li>
          </Link>)
        }

        {!isLoading && products.length === 0 &&
          <p className={styles.results_list_item}>ничего не нашлось...</p>}

        {error &&
          <p className={styles.results_list_item}>{ error }</p>}
      </ul>
    </>
  )
}