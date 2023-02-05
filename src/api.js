const { API_URL } = require('./config')

const getMealById = async (mealId) => {
	const response = await fetch(API_URL + '/lookup.php?i=' + mealId)
	return await response.json()
}

const getCategoryNames = async () => {
	const response = await fetch(API_URL + '/categories.php')
	return await response.json()
}

const filterByCategory = async (filterId) => {
	const response = await fetch(API_URL + '/filter.php?c=' + filterId)
	return await response.json()
}

export { getMealById, getCategoryNames, filterByCategory }
