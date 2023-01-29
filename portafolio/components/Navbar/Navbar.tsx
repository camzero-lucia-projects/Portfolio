import React from 'react'
import styles from './Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Navbar:React.FC = () => {
  const navLinks = ['Home', 'Portafolio', 'Contact Me']
  const linkPages =['/','portafolio','contactMe']

  return (
      <div className={'Nav_container'}>
        <div className={'logo'}>
        <button className={'triangle_left'}>
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ fontSize: 30, color: '#33323D' }}
          />
        </button>
        <button className={'triangle_right'} onClick={()=>{console.log('Button Down press')}}>
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ fontSize: 30, color: '#33323D' }}
          />
        </button>
        </div>
        <ul className={'nav_links'}>

            <li > 
              <a href={'/'}>Home</a>
            </li>
            <li > 
              <a href={'/portafolio'}>Portafolio</a>
            </li>
            <li > 
              <a href={'/contactMe'}>contact me</a>
            </li>

        </ul>
      </div>
  )
}

export default Navbar
