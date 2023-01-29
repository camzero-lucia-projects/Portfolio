import React from 'react'
import Navbar from './Navbar/Navbar'
import BottomNavbarComponent from './BottomNavbar/BottomNavbarComponent'
import ContactMeComponent from './ContactMe/ContactMeComponent'
interface IProps {
  children?: React.ReactNode
  pg?: string
}

const LayoutComponent: React.FC<IProps> = ({ children, pg }) => {
  return (
    <>
      <Navbar />
      {children}
      {pg !== 'pg4'  ? (
        <>
          <ContactMeComponent pg={pg} />
          <BottomNavbarComponent pg={pg} />
        </>
      ) : (
        <BottomNavbarComponent pg={pg} />
      )}
    </>
  )
}

export default LayoutComponent
