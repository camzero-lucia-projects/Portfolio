import { useRouter } from 'next/router'
import React from 'react'
import styles from './ContactMeComponent.module.scss'

interface IProps{
    pg?:string
  }

const ContactMeComponent: React.FC<IProps> = ({pg}) => {
  const router = useRouter()

  return (
    <div className={`Box_1_ContactMe contactMe_${pg}`}>
      <div className={`Box_2_Text`}>
        <h2>Interested in doing a project together?</h2>
      </div>
      <div className={`line_separator`}></div>
      <button className={`buttonSecondary button1_text_container`} onClick={()=> router.push('contactMe')}>
        <div className={`textButton button1_text`}>Contact Me</div>
      </button>
    </div>
  )
}

export default ContactMeComponent; 

