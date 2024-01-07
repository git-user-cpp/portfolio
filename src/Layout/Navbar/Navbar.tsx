import {useState, useEffect} from 'react'
import {navLinks} from '../../Data/data'
import {Logo} from '../../assets'
import { IoIosMail } from "react-icons/io";
import './navbar.css'

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

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop-1;
          const sectionBottom = sectionTop + section.clientHeight-1;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActive(nav.title);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='logo_div'>
        <img src={Logo} alt='logotype' className='logo' />
      </div>

      <ul className='menu'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`sec ${ active === nav.title ? "sec_active" : "sec_unactive" }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div>
        <a href='mailto:akushyk799@gmail.com' className='email'>
          <IoIosMail className='email_el'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar