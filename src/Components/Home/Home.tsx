import { Portrait } from '../../assets';
import './home.css'
import { VscGithub } from "react-icons/vsc";

const Home = () => {
  return (
    <div id='home' className='home container'>
      <div className='left'>
        <a href="https://www.instagram.com/andy_insta_art" target='_blank'>
          <img src={Portrait} alt="portrait" className='portrait' />
        </a>
      </div>
      <div className='right'>
        <div className='right_items'>
          <div className='github_button'>
            <a href="https://github.com/git-user-cpp" target='_blank'>
              <VscGithub size={160}/>
            </a>
          </div>
          <div className='profession'>
            junior full stack developer
          </div>
          <div className='name'>
            Andrew Kushyk
          </div>
          <div className="stack">
            C, C++, Rust, Java, SQL, Spring, JavaScript, TypeScript, React, Tailwind CSS, Python
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home