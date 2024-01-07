import { IoIosMail } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import './footer.css'

/*
MIT License

Copyright (c) 2024 Andrew Kushyk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const FooterSocials = () => {
  return (
    <footer className='footer_socials'>
        <a href="mailto:akushyk799@gmail.com" target="_blank"><IoIosMail /></a>
        <a href="https://github.com/git-user-cpp" target="_blank"><BsGithub/></a>
        <a href="https://t.me/andy_insta_art" target="_blank"><BsTelegram/></a>
        <a href="https://www.instagram.com/andy_insta_art" target="_blank"><PiInstagramLogoFill /></a>
        <a href="https://youtube.com/@andy_insta_art" target="_blank"><FaYoutube/></a>
    </footer>
  )
}

export default FooterSocials