import React from 'react'
import styles from './AboutmeComponent.module.scss'
import homeImage from '../../public/assets/image-homepage-hero.jpg'
import ProfileImg from '../../public/assets/portafolio.jpg'
import { useRouter } from 'next/router'
import Image
from 'next/image'

const AboutMeComponent: React.FC = () => {

  const router = useRouter()

  return (
    <div className={styles.Box_1}>
      <div className={styles.Box_2_Image}>
          <Image
            src={ProfileImg}
            alt={'Image-Hero'}
            objectFit='contain'
            fill={true}
          />

      </div>
      <div className={styles.Box_2_Text}>
        <div className={styles.line_Top}></div>
        <div className={styles.Box2_aboutMe}>
          <h1>About Me</h1>

          <div className={styles.body2_text}>
            <p className={'body_1'}>
              I'm a Computer Science student at my senior year, I'm
              looking for new role in Software Development in an exciting
              company. I focus on writing mantainable and readable code in
              different lenguages and using multiple frameworks that I had learn
              across my university experience. Im a enthusiastic person with depp
              passion to learning new things, I adapt very quickly to new
              challenges and like to solve problems daily. I'm looking for an
              intership for the next summer (2023). I'd love you check out my work.
            </p>
          </div>
          <button
            className={`buttonSecondary ${styles.button1_text_container}`}
            onClick={()=>router.push('portafolio')}
          >
            <div className={`textButton ${styles.button1_text}`}>
              Go To Portafolio
            </div>
          </button>
        </div>
        <div className={styles.line_Down}></div>
      </div>
    </div>
  )
}

export default AboutMeComponent
