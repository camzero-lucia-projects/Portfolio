import React from 'react'
import styles from './Navbar.module.scss'
import Head from 'next/head'

const Navbar = () => {
  const navLinks = ['Home', 'Portafolio', 'Contact Me']

  return (
    <div className={'header'} >
      <div className={'Nav_container'}>
        <div className={'logo'}>
          <h3>Logo</h3>
        </div>
        <ul className={'nav-links'}>
          {navLinks.map((navLink, index) => {
            return (<li key={index}> 
              <a href={`${navLink}`}>{navLink}</a>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
