import React, { useRef } from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import AboutMeComponent from '../components/Aboutme_Component/AboutmeComponent'
import ContactMeComponent from '../components/ContactMe/ContactMeComponent'
import ProjectListComponent from '../components/Projects/ProjectListComponent'
import LayoutComponent from '../components/Layout'
import IndexContextProvider from '../Store/context/index_context'

export default function Home() {
  return (
    <IndexContextProvider>
      <div className='container'>
        <LayoutComponent pg={'pg1'}>
          <AboutMe />
        </LayoutComponent>
      </div>
    </IndexContextProvider>
  )
}
