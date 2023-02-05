import { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { filterByCategory } from '../api'
import Loader from '../components/Loader'
import Search from '../components/Search'
import Meal from './Meal'

export default function MealList() {
	const { name } = useParams()
	const { goBack } = useHistory()
	const [meals, setMeals] = useState([])
	const [filteredMeals, setFilteredMeals] = useState([])
	const { pathname, search } = useLocation()
	const { push } = useHistory()

	const handleSearch = (str) => {
		setFilteredMeals(
			meals.filter((item) =>
				item.strMeal.toLowerCase().includes(str.toLowerCase())
			)
		)
		push({
			pathname,
			search: `?s=${str}`,
		})
	}

	useEffect(() => {
		filterByCategory(name)
			.then((data) => {
				setMeals(data.meals)
				setFilteredMeals(
					search
						? data.meals.filter((item) =>
								item.strMeal
									.toLowerCase()
									.includes(search.split('=')[1].toLowerCase())
						  )
						: data.meals
				)
			})
		
	}, [name])

	return (
		<>
			<Search cb={handleSearch} />
			<h1>{name} meals</h1>
			<button className='btn' onClick={goBack}>
				back
			</button>
			<div className='cardWrapper'>
				{!filteredMeals.length ? (
					<Loader />
				) : (
					filteredMeals.map((el) => <Meal key={el.idMeal} {...el} />)
				)}
			</div>
		</>
	)
}
