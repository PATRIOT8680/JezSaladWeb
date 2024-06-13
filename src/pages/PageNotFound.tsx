import { useNavigate } from 'react-router-dom'
import Caesar from '../assets/img/Caesar.png'

import './styles/compiled-css/PageNotFound.css'

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleClickBtn = () => {
    navigate('/')
  }

  return (
		<>
			<div className='page_not_found'>
				<div className='top_block'>
					<div className='title'>
						<span id='one'>4</span>
						<img src={Caesar} id='two' />
						<span id='three'>4</span>
					</div>
          <span className="warning">Page not found</span>
				</div>
				<button onClick={handleClickBtn} className='back'>Back to home</button>
			</div>
		</>
	)
}

export default PageNotFound