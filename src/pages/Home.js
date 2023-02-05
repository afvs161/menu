import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { getCategoryNames } from '../api'
import Loader from '../components/Loader'
import Search from '../components/Search'
import CatalogList from './CatalogList'

export default function Home() {
	const [catalog, setCatalog] = useState([])
	const [filteredCatalog, setFilteredCatalog] = useState([])
	const { pathname, search } = useLocation()
	const { push } = useHistory()

	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		)
		push({
			pathname,
			search: `?s=${str}`,
		})
	}

	useEffect(() => {
		getCategoryNames().then((data) => {
			setCatalog(data.categories)
			setFilteredCatalog(
				search
					? data.categories.filter((item) =>
							item.strCategory
								.toLowerCase()
								.includes(search.split('=')[1].toLowerCase())
					  )
					: data.categories
			)
		})
	}, [search])

	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? <Loader /> : <CatalogList catalog={filteredCatalog} />}
		</>
	)
}
