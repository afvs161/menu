import { Link } from 'react-router-dom'

export default function Meal(props) {
	const { strMeal, strMealThumb, idMeal } = props

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={strMealThumb} />
			</div>
			<div className='card-content'>
				<h5>{strMeal}</h5>
			</div>
			<div className='card-action'>
				<Link to={`/recipe/${idMeal}`}>Read More</Link>
			</div>
		</div>
	)
}
