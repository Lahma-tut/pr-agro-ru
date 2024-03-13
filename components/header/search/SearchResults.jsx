import Link from "next/link";
import styles from "./search.module.css";
import { useSearch } from "@/services/fetcher";

export default function SearchResults({ query }) {
  const { products, isLoading, error } = useSearch(query);

  console.log('SearchResults isLoading: ', isLoading);
  console.log('SearchResults products: ', products);
  console.log('SearchResults error: ', error);

  return (
    <>
      <ul className={styles.results_list}>

        {isLoading && 
          <p className={styles.results_list_item}>поиск...</p>}

        {!isLoading && products.length === 0 && 
          <p className={styles.results_list_item}>ничего не нашлось...</p>}

        {!isLoading && products.length > 0 && 
          products.map((item) => (
          <li key={item.id} className={styles.results_list_item}>
            <Link href={`/catalog/${item.slug}`}>
              {item.title}
            </Link>
          </li>))
        }

        {error && 
          <p className={styles.results_list_item}>{error}</p>}

      </ul>
    </>
  )
};