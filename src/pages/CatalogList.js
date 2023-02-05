import CatalogItem from './CatalogItem'

export default function CatalogList({ catalog = [] }) {
	return (
		<div className='row my-row'>
			{catalog.length ?
				catalog.map((el) => (
				<CatalogItem key={el.idCategory} {...el} />
			)) : <h3>Nothing found</h3>}
		</div>
	)
}
