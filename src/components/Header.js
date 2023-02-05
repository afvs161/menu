import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<nav>
			<div className='nav-wrapper'>
				<Link to='/' className='brand-logo'>
					Recipes
				</Link>
				<ul className='right'>
					<li>
						<Link to='/beef'>error page</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
