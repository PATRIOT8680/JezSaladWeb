import { useState } from 'react'
import { Link } from 'react-router-dom'

import ButtonMain from './Button'
import './styles/compiled-css/Header.css'

const Header = () => {
	const [menu, setMenu] = useState("home")

	return (
		<>
			<header>
				<a className='logo' href='/'>
					<span className='black'>JEZ</span>
					<span className='bold'>SALAD</span>
				</a>
				<ul className='nav-menu'>
					<Link to='/' onClick={() => {setMenu("home")}}>{menu==='home' ? <span>Home</span> : <>Home</>}</Link>
					<Link to='/menu' onClick={() => {setMenu("menu")}}>{menu==='menu' ? <span>Menu</span> : <>Menu</>}</Link>
					<Link to='/contact' onClick={() => {setMenu("contact")}}>{menu==='contact' ? <span>Contact</span> : <>Contact</>}</Link>
					<Link to='/about_us' onClick={() => {setMenu("about_us")}}>{menu==='about_us' ? <span>About Us</span> : <>About Us</>}</Link>
				</ul>
				<ButtonMain>Sign</ButtonMain>
			</header>
		</>
	)
}

export default Header
