'use client';
import styles from "./search.module.css";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import SearchResult from "./SearchResults";


export default function Search() {
	const [query, setQuery] = useState('');
	console.log('Search: ', query);
	
	const handleChange = async (e) => {
		setQuery(e.target.value);
	};

	const handleReset = () => {
		setQuery('');
	};

	return (
		<>
			<div className={styles.search_container}>
				<form className={styles.form}>
					<input
						className={styles.input}
						placeholder="поиск по товарам"
						type="text"
						name="q"
						value={query}
						onChange={handleChange}
					/>

					<IoSearch className={styles.IoSearch} />

					{query && <button onClick={handleReset}>
						<IoCloseSharp className={styles.IoCloseSharp} /></button>}
						
				</form>
					
					{query.length > 1 && <SearchResult query={query} />}
					
			</div>
		</>
	)
};