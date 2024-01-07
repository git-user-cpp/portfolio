import Lottie from 'lottie-react'
import { C, ExperienceF, ExperienceS, Shield } from '../../assets'
import './about.css'

const About = () => {
  return (
    <div id='about' className='container'>
      <div className='about'>
        <div className='experience_left'>
          <Lottie animationData={ExperienceS}/>
        </div>
        <div className='experience_right'>
          <p className='text_exp'>
            5+ Years Working
          </p>
          <p className='description'>
            since 2019 to the present day, I am closely involved in <br/> web development and system programming
          </p>
          <p className='services'>
            <Lottie animationData={Shield} className='shield'/>
          </p>
          <p className='services'>
            <Lottie animationData={C} className='c'/>
          </p>
          <p className='services'>
            Ads
          </p>
          <p className='services'>
            Ads
          </p>
        </div>
      </div>
    </div>
  )
}

export default About