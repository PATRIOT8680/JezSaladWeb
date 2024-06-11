import { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/compiled-css/Header.css'

function Header() {
	const [menu, setMenu] = useState("home")

	return (
		<>
			<header>
				<div className='logo'>
					<span className='black'>JEZ</span>
					<span className='bold'>SALAD</span>
				</div>
				<ul className='nav-menu'>
					<Link to='/' onClick={() => {setMenu("home")}}>{menu==='home' ? <span>Home</span> : <>Home</>}</Link>
					<Link to='/' onClick={() => {setMenu("menu")}}>{menu==='menu' ? <span>Menu</span> : <>Menu</>}</Link>
					<Link to='/' onClick={() => {setMenu("contact")}}>{menu==='contact' ? <span>Contact</span> : <>Contact</>}</Link>
					<Link to='/' onClick={() => {setMenu("about_us")}}>{menu==='about_us' ? <span>About Us</span> : <>About Us</>}</Link>
				</ul>
			</header>
		</>
	)
}

export default Header
