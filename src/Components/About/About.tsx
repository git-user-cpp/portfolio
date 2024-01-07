import Lottie from 'lottie-react'
import { C, Check, Client, ExperienceS, Shield } from '../../assets'
import './about.css'

const About = () => {
  return (
    <div id='about' className='container'>
      <div className='about'>
        <div className='experience_left'>
          <div className='exp'>
          <Lottie animationData={ExperienceS}/>
          </div>
        </div>
        <div className='experience_right'>
          <p className='text_exp'>
            4+ Years Working
          </p>
          <p className='description'>
            since 2020 to the present day, I am closely involved in <br/> web development and system programming
          </p>
          <p className='services'>
            <Lottie animationData={Shield} className='avatar'/>Responsible Development
          </p>
          <p className='services'>
            <Lottie animationData={Check} className='avatar'/>Front End Development
          </p>
          <p className='services'>
            <Lottie animationData={Client} className='avatar'/>Back End Development
          </p>
          <p className='services'>
            <Lottie animationData={C} className='avatar'/>System Development
          </p>
        </div>
      </div>
    </div>
  )
}

export default About