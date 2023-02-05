import React, { useContext, useRef, useState } from 'react'
import styles from './Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faArrowDown,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { IdxCtx, IContext } from '../../Store/context/index_context'

interface IProps {
  pg: string
}

const Navbar: React.FC<IProps> = ({ pg }) => {
  const { refAbout, refProjects, refPortafolio, refContactMe } = useContext(
    IdxCtx
  ) as IContext
  const [open, setOpenMenu] = useState(false)

  const handleClickMenu = () => {
    setOpenMenu(true)
  }
  const handleClickMenuClose = () => {
    setOpenMenu(false)
  }
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
    <div className={'Nav_container'}>
      <div className={'logo'}>
        <button className={'triangle_left'}>
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ fontSize: 30, color: '#33323D' }}
          />
        </button>
        <button className={'triangle_right'} onClick={handleClick}>
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ fontSize: 30, color: '#33323D' }}
          />
        </button>
      </div>

      <button
        className={open ? 'hamburgerClose' : 'hamburger'}
        onClick={handleClickMenu}
      >
        <FontAwesomeIcon className={'hamburgerIcon'} icon={faBars} />
      </button>
      <button
        className={open ? 'close' : 'closedStyle'}
        onClick={handleClickMenuClose}
      >
        <FontAwesomeIcon className={'closeIcon'} icon={faXmark} />
      </button>

      <ul className={open ? 'box_menu' : 'nav_links'}>
        <li>
          <a href={'/'}>Home</a>
        </li>
        <li>
          <a href={'/portafolio'}>Portafolio</a>
        </li>
        <li>
          <a href={'/contactMe'}>contact me</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
