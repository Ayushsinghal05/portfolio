import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faClose,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="top-nav-bar">
      <div className="nav-container">
        <Link 
          className="logo"
          to="/"
          onClick={() => setShowNav(false)}>
          <img src={LogoS} alt="Logo" />
          <span className="logo-text">Ayush</span>
        </Link>
        
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <span>Home</span>
          </NavLink>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            <span>About</span>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="projects-link"
            to="/projects"
            onClick={() => setShowNav(false)}
          >
            <span>Projects</span>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="blog-link"
            to="/blog"
            onClick={() => setShowNav(false)}
          >
            <span>Blog</span>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <span>Contact</span>
          </NavLink>
          <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#d4855a"
            size="2x"
            className='close-icon' />
        </nav>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ayush-singhal-83b748229/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com/Ayushsinghal05"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icon"
            />
          </a>
          <a
            href="mailto: singhal.ayush230@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-icon"
            />
          </a>
        </div>

        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#d4855a"
            size="2x"
            className='hamburger-icon' />
      </div>
    </div>
  )
}

export default Sidebar