import { useRouter } from 'next/router'
import React, {useContext} from 'react'
import Link from 'next/link'

interface IProps {
  pg?: string
}

const ContactMeComponent: React.FC<IProps> = ({ pg }) => {
  const router = useRouter()


  return (
    <div className={`Box_1_ContactMe contactMe_${pg}`}>
      <div className={`Box_2_Text`}>
        <h2>Interested in doing a project together?</h2>
      </div>
      <div className={`line_separator`}></div>
      <Link href={'/contactMe'}>
        <button
          className={`buttonSecondary button1_text_container`}
        >
          <div className={`textButton button1_text`}>Contact Me</div>
        </button>
      </Link>
    </div>
  )
}

export default ContactMeComponent
