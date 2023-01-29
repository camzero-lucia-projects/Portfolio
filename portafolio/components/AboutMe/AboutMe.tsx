import React, { useRef } from 'react'
import styles from '../Aboutme_Component/AboutmeComponent.module.scss'
import styles2 from './Aboutme.module.scss'
import ProfileImg from '../../public/assets/portafolio.jpg'
import { useRouter } from 'next/router'
import Image from 'next/image'

const AboutMe: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const handleClick =()=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
    }

  return (
    <>
      <div className={styles2.Box_1}>
        <div className={styles2.Box_2}>
          <h1 style={{ textAlign: 'center' }}>
            Hi Im Camilo Im a Computer Scientist and a Full Stack Developer.
          </h1>
          <button className={'buttonPrimary'} onClick={handleClick}>
            <div className='arrow-container'>
              <div className='arrow-img'></div>
            </div>
            <div className='text'>About Me</div>
          </button>
        </div>
      </div>

      <div className={styles.Box_1} ref={ref}>
        <div className={styles.Box_2_Image}>
          <Image
            src={ProfileImg}
            alt={'Image-Profile'}
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
                I'm a Computer Science student at my senior year, I'm looking
                for new role in Software Development in an exciting company. I
                focus on writing mantainable and readable code in different
                lenguages and using multiple frameworks that I had learn across
                my university experience. Im a enthusiastic person with depp
                passion to learning new things, I adapt very quickly to new
                challenges and like to solve problems daily. I'm looking for an
                intership for the next summer (2023). I'd love you check out my
                work.
              </p>
            </div>
            <button
              className={`buttonSecondary ${styles.button1_text_container}`}
              onClick={() => router.push('portafolio')}
            >
              <div className={`textButton ${styles.button1_text}`}>
                Go To Portafolio
              </div>
            </button>
          </div>
          <div className={styles.line_Down}></div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
