import React from 'react'
import styles from './BottomNavbarComponent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

interface IProps{
    pg?:string;
  }

const BottomNavbarComponent: React.FC<IProps> = ({pg}) => {
  const navLinks = ['Home', 'Portafolio', 'Contact Me']
  return (
    <div className={`Box_1 bottom_bar_${pg}`}>
      <div className={`arrow_container_navbar`}>
        <button className={`triangle_left`}>
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ fontSize: 30, color: '#FFFFFF' }}
          />
        </button>
        <button className={`triangle_right`} onClick={()=>{console.log('Button Down press')}}>
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ fontSize: 30, color: '#FFFFFF' }}
          />
        </button>
      </div>
      <ul className={`nav_links`}>
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <a href={`${navLink}`}>{navLink}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BottomNavbarComponent
