import TitleDescription from '../components/Home/TitleDescription'
import ButtonMain from '../components/Main/Button'

import './styles/compiled-css/Home.css'

const Home = () => {
  return (
		<>
			<div className='home'>
				<div className='left_container'>
					<span className='recommended_title'>#1 Best Healthy Salad</span>
					<span className='firstTitle'>
						<span>Skip</span> The Diet, Just Eat Healthy With Jez Salad
					</span>
					<TitleDescription>
						Imagine you don't need a diet because we provide healthy and
						delicious food for you!
					</TitleDescription>
					<ButtonMain>Order Food</ButtonMain>
				</div>
			</div>
		</>
	)
}

export default Home