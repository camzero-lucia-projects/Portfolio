import React, { useRef ,useContext} from 'react'
import styles from '../Aboutme_Component/AboutmeComponent.module.scss'
import styles2 from './Aboutme.module.scss'
import ProfileImg from '../../public/assets/portafolio.jpg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { IdxCtx, IContext } from '../../Store/context/index_context'


const AboutMe: React.FC = () => {

  const {refAbout} = useContext(IdxCtx) as IContext
  const router = useRouter()

  const handleClick =()=>{
    refAbout?.current?.scrollIntoView({behavior:'smooth'})
    }
  return (
    <>
      <div className={'Box_1_About '}>
        <div className={'Box_2_About '}>
          <h1 className={'text_title textBox'}>
            Hi Im Camilo Im a Computer Scientist.
          </h1>
          <button className={'buttonPrimary buttonAbout'} onClick={handleClick}>
            <div className='arrow-container'>
              <div className='arrow-img'></div>
            </div>
            <div className='text'>About Me</div>
          </button>
        </div>
      </div>

      <div className={'Box_1_AboutImg'} ref={refAbout}>
        <div className={'Box_2_Image '}>
          <Image
            src={ProfileImg}
            alt={'Image-Profile'}
            objectFit='contain'
            fill={true}
          />
        </div>
        <div className={'Box_2_Text'}>
          <div className={'line_Top'}/>
          <div className={'Box2_aboutMe'}>
            <h1>About Me</h1>

            <div className={'body2_text'}>
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
              className={`buttonSecondary ${'button1_text_container'}`}
              onClick={() => router.push('portafolio')}
            >
              <div className={`textButton ${'button1_text'}`}>
                Go To Portafolio
              </div>
            </button>
          </div>
          <div className={'line_Down'}></div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
