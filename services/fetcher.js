// применяется для поиска, search
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useSearchSWR(query) {
  const { data, isLoading, error} = useSWR(
    `/api/product?q=${query}`, 
    fetcher
    );
 
  return {
    products: data,
    isLoading,
    isError: error
  }
}