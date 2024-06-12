import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Menu from './pages/Menu.tsx'
import Contact from './pages/Contact.tsx'
import AboutUs from './pages/AboutUs.tsx'

import Header from './components/Main/Header.tsx'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/stylesheet.css'

const RedirectionReload = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if(sessionStorage.getItem('reloaded')) {
			sessionStorage.removeItem('reloaded')
			navigate('/')
		}
		window.addEventListener('beforeunload', () => {
			sessionStorage.setItem('reloaded', 'true')
		})
		return () => {
			window.removeEventListener('beforeunload', () => {
				sessionStorage.setItem('reloaded', 'true')
			})
		}
	}, [navigate])

	return null
}

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/menu' element={<Menu />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/about_us' element={<AboutUs />} />
						<Route path='*' element={<Home />} />
					</Routes>
					<RedirectionReload />
				</div>
			</BrowserRouter>
		</>
	)
}

export default App