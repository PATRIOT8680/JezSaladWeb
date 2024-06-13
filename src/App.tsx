import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Menu from './pages/Menu.tsx'
import Contact from './pages/Contact.tsx'
import AboutUs from './pages/AboutUs.tsx'
import PageNotFound from './pages/PageNotFound.tsx'

import PageReload from './hooks/PageReload.ts'
import HideHeader from './hooks/HideHeader.tsx'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/stylesheet.css'


const App = () => {
	return (
		<>
			<BrowserRouter>
				<PageReload />
				<div className='container'>
					<HideHeader />
					<div className='containers-page'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/menu' element={<Menu />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/about_us' element={<AboutUs />} />
							<Route path='/404' element={<PageNotFound />} />
							<Route path='*' element={<Navigate to='/404' replace />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App