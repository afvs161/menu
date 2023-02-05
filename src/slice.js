export default function sliceWithThreeDots(str) {
	if (str.length >= 90) {
		return str.slice(0, 90) + '...'
	} else {
		return str.slice(0, 90)
	}
}
