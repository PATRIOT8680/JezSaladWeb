import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Menu from './pages/Menu.tsx'

import './assets/fonts/stylesheet.css'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='menu' element={<Menu />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App