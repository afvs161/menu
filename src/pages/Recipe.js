import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getMealById } from '../api'
import Loader from '../components/Loader'

export default function Recipe() {
	const { id } = useParams()
	const [meal, setMeal] = useState({})
	const { goBack } = useHistory()
	const [toggleRecipe, setToggleRecipe] = useState(false)

	useEffect(() => {
		getMealById(id).then((data) => setMeal(data.meals[0]))
	}, [id])

	return (
		<div>
			{!meal.idMeal ? (
				<Loader />
			) : (
				<div className='recipe'>
					<button className='btn' onClick={goBack}>
						Go Back
					</button>
					<h2>{meal.strMeal}</h2>
					<img
						className='recipe-img'
						src={meal.strMealThumb}
						alt={meal.strMeal}
					/>
					<h6>
						Category: <b>{meal.strCategory}</b>
					</h6>
					{meal.strArea && (
						<h6>
							Area: <b>{meal.strArea}</b>
						</h6>
					)}
					<p>{meal.strInstructions}</p>
					<button
						className='btn'
						onClick={() => setToggleRecipe(!toggleRecipe)}
					>
						{toggleRecipe ? 'Hide' : 'Show'} Recipe
					</button>
					{toggleRecipe && (
						<table>
							<thead>
								<tr>
									<th>Ingredient</th>
									<th>Measure</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(meal).map((key) => {
									if (key.includes('Ingredient') && meal[key]) {
										return (
											<tr>
												<td>{meal[key]}</td>
												<td>{meal[`strMeasure${key.slice(13)}`]}</td>
											</tr>
										)
									}
								})}
							</tbody>
						</table>
					)}
					{meal.strYoutube && (
						<iframe
							width='853'
							height='480'
							src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
								-11
							)}`}
							title={meal.strMeal}
								allowFullScreen
								frameBorder='0'
								style={{marginTop: '1rem'}}
						></iframe>
					)}
				</div>
			)}
		</div>
	)
}
