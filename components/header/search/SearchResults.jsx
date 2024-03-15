"use client"
import Link from "next/link"
import styles from "./search.module.css"
import { useSearch } from "@/services/fetcher"


export default function SearchResults({ query, handleReset }) {
  
  const { products, isLoading, error } = useSearch(query)

  return (
    <>
      <ul className={styles.results_list}>

        {isLoading && 
          <p className={styles.results_list_item}>поиск...</p>}

        {!isLoading && products.length > 0 && products.map((item) => (
          <li key={item.id} className={styles.results_list_item}>
            <Link onClick={handleReset} href={`/catalog/${item.slug}`}>
              {item.title}
            </Link>
          </li>))
        }

        {!isLoading && products.length === 0 && 
          <p className={styles.results_list_item}>ничего не нашлось...</p>}

        {error && 
          <p className={styles.results_list_item}>{error}</p>}

      </ul>
    </>
  )
};