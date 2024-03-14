'use client'
import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import { IoCloseSharp } from "react-icons/io5"
import styles from "./search.module.css"
import SearchResult from "./SearchResults"


export default function Search() {
	const [query, setQuery] = useState('')

	const handleReset = () => {
		setQuery('')
	};

	return (
		<>
			<div className={styles.search_container}>
				<input
					onChange={e => setQuery(e.target.value)}
					className={styles.input}
					autocomplete="off"
					placeholder="поиск по товарам"
					type="text"
					name="q"
					value={query}
				/>

				<IoSearch className={styles.IoSearch} />


				{query && <button onClick={handleReset}>
					<IoCloseSharp className={styles.IoCloseSharp} /></button>}

			{query.length > 1 && <SearchResult query={query} handleReset={handleReset}/>}

		</div >
		</>
	)
}