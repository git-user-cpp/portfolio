import './home.css'
import {PiPlayCircleThin} from 'react-icons/pi'

const Home = () => {
  return (
    <div id='home' className='container'>
      <div className='home'>
        <div className='play_button'>
          <a href="#">
            <PiPlayCircleThin size={160}/>
          </a>
        </div>
        <div className='profession'>
          senior
        </div>
        <div className='name'>
          Andrew<br/>Kushyk
        </div>
        <div className='stack'>
          full stack developer
        </div>
      </div>
    </div>
  )
}

export default Home