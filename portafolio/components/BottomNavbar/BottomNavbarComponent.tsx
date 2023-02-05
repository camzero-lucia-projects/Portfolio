import React, { useContext } from 'react'
import styles from './BottomNavbarComponent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { IdxCtx, IContext } from '../../Store/context/index_context'

interface IProps {
  pg?: string
}

const BottomNavbarComponent: React.FC<IProps> = ({ pg }) => {
  const navLinks = ['Home', 'Portafolio', 'Contact Me']

  const { refAbout, refPortafolio, refProjects , refContactMe} = useContext(
    IdxCtx
  ) as IContext

  const handleClick = () => {
    if (pg == 'pg1') {
      refAbout?.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (pg == 'pg2') {
      refPortafolio?.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (pg == 'pg3') {
      refProjects?.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (pg == 'pg4') {
      refContactMe?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`Box_1 bottom_bar_${pg}`}>
      <div className={`arrow_container_navbar`}>
        <button className={`triangle_left`} onClick={handleClick}>
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ fontSize: 30, color: '#FFFFFF' }}
          />
        </button>
        <button
          className={`triangle_right`}
          onClick={() => {
            console.log('Button Down press')
          }}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ fontSize: 30, color: '#FFFFFF' }}
          />
        </button>
      </div>
      <ul className={`nav_links`}>
        <li>
          <a href={'/'}>Home</a>
        </li>
        <li>
          <a href={'/portafolio'}>Portafolio</a>
        </li>
        <li>
          <a href={'/contactMe'}>contact me</a>
        </li>
      <div className={'logos_tw_cell'}>
        <div className={'git'} />
        <div className={'tw'} />
        <div className={'link'} />
      </div>
      </ul>
    </div>
  )
}

export default BottomNavbarComponent
