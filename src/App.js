import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Meal from './pages/Meal'
import MealList from './pages/MealList'
import Recipe from './pages/Recipe'

export default function App() {
	return (
		<>
			<Header />
			<main className='container content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/category/:name' component={MealList} />
					<Route path='/meal/:id' component={Meal} />
					<Route path='/recipe/:id' component={Recipe} />
					<Route component={ErrorPage} />
				</Switch>
			</main>
			<Footer />
		</>
	)
}
