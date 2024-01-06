import {TbMailForward} from 'react-icons/tb'
import {SiUpwork} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import './header.css'
import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='mailto:akushyk799@gmail.com' target='_blank'><TbMailForward /></a>
        <a href='https://www.upwork.com/freelancers/~01d3287990779d1fbe' target='_blank'><SiUpwork /></a>
        <a href='https://www.instagram.com/andy_insta_art' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials