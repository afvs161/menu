import { Link } from 'react-router-dom'
import sliceWithThreeDots from '../slice'

export default function CatalogItem({
	idCategory,
	strCategory,
	strCategoryThumb,
	strCategoryDescription,
}) {
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={strCategoryThumb} />
				<h4 className='deep-orange lighten-1 white-text'>{strCategory}</h4>
				<Link
					to={`/category/${strCategory}`}
					className='btn-floating halfway-fab waves-effect waves-light red'
				>
					<i className='material-icons'>add</i>
				</Link>
			</div>
			<div className='card-content'>
				<p>{sliceWithThreeDots(strCategoryDescription)}</p>
			</div>
		</div>
	)
}
