import {useState, useEffect} from 'react'
import {navLinks} from '../../Data/data'
import {Logo} from '../../assets'
import { IoIosMail } from "react-icons/io";
import './navbar.css'

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