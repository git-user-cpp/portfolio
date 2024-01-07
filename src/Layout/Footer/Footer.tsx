import { IoIosMail } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import './footer.css'

const FooterSocials = () => {
  return (
    <footer className='footer_socials'>
        <a href='mailto:akushyk799@gmail.com' target='_blank'><IoIosMail /></a>
        <a href="https://github.com/git-user-cpp" target="_blank"><BsGithub/></a>
        <a href="https://t.me/andy_insta_art" target='_blank'><BsTelegram/></a>
        <a href='https://www.instagram.com/andy_insta_art' target='_blank'><PiInstagramLogoFill /></a>
        <a href="https://youtube.com/@andy_insta_art" target='_blank'><FaYoutube/></a>
    </footer>
  )
}

export default FooterSocials