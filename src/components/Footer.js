import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='page-footer'>
			<div className='footer-copyright'>
				<div className='container'>
					©{new Date().getFullYear()} Copyright Text
					<Link to='/' href='#' className='grey-text text-lighten-4 right'>
						Repo
					</Link>
				</div>
			</div>
		</footer>
	)
}
