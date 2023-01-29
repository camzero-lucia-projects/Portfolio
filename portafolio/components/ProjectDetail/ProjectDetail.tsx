import Image from 'next/image'
import Link from 'next/link'
import Project from '../../namespace/Project'
import React, { useContext, useState } from 'react'
import { IdxCtx, IContext } from '../../Store/context/index_context'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Static Images
//Project 1
import ImgHero1 from '../../public/assets/Project3_Hero.png'
import Img1_Prev1 from '../../public/assets/Project3_prev_1.jpg'
import Img1_Prev2 from '../../public/assets/QRCode.png'
//Project 2
import ImgHero2 from '../../public/assets/Project2_Hero.png'
import Img2_Prev1 from '../../public/assets/Project2_prev_1.jpg'
import Img2_Prev2 from '../../public/assets/Restaurant_prev_2.jpg'
//Project 3
import ImgHero3 from '../../public/assets/React-icon.svg'
import Img3_Prev1 from '../../public/assets/App_Prev_1.jpg'
import Img3_Prev2 from '../../public/assets/App_prev_2.jpg'
//Project 4
import ImgHero4 from '../../public/assets/Project4_Hero.png'
import Img4_Prev1 from '../../public/assets/Project4_prev1.png'
import Img4_Prev2 from '../../public/assets/Project4_prev2.jpg'

interface IProps {
  proj_number?: string | string[] | undefined
}

const ProjectComponentDetail: React.FC<IProps> = ({ proj_number }) => {
  const proj_1_Img = {
    imgHero: ImgHero1,
    imgPrev1: Img1_Prev1,
    ImgPrev2: Img1_Prev2,
  }
  const proj_2_Img = {
    imgHero: ImgHero2,
    imgPrev1: Img2_Prev1,
    ImgPrev2: Img2_Prev2,
  }
  const proj_3_Img = {
    imgHero: ImgHero3,
    imgPrev1: Img3_Prev1,
    ImgPrev2: Img3_Prev2,
  }
  const proj_4_Img = {
    imgHero: ImgHero4,
    imgPrev1: Img4_Prev1,
    ImgPrev2: Img4_Prev2,
  }

  const { projects } = useContext(IdxCtx) as IContext
  const imageArr = [proj_1_Img, proj_2_Img, proj_3_Img, proj_4_Img]
  const URLGithub = ['https://github.com/camzero94/CHATBOT-LINE_RESTAURANT','https://github.com/camzero94/Restaurant_FullStack','https://github.com/camzero94/Restaurant-App-ReactNative','https://github.com/camzero94/COMPILER_2022']

  return projects?(

    <>
      <div className={`Box1_project`}>
        {proj_number === undefined ? (
            <Skeleton  borderRadius={30} width={1110} height={500} />
        ) : (
          <Image
            src={imageArr[Number(proj_number) - 1]?.imgHero}
            alt={'Image-Hero'}
            objectFit='contain'
            fill={true}
          />
        )}
      </div>
      <div className={`Box2_project`}>
        <div className={'line_separator'} />
        <div className={`Box2_text_project`}>
          <div className={`title`}>
            <h2>{
              projects[Number(proj_number) - 1]?.nameProject
              }</h2>
          </div>
          <div className={'text'}>
            <p className='body_1 '>
              {projects[Number(proj_number) - 1]?.textIndex}
            </p>
          </div>
          <p className='body_1 types'>
            {projects[Number(proj_number) - 1]?.type}
          </p>
          <p className='body_1 lenguages'>
            {projects[Number(proj_number) - 1]?.lenguages}
          </p>
          <Link className={`buttonSecondary ButtonProject`} href={`${URLGithub[Number(proj_number)-1]}`}>
            <div className={`textButton button2_text`}>Go To Project</div>
          </Link>
        </div>
        <div className={'line_separator_down'} />
        <div className={`Box2_back`}>
          <div className={`project_description_container `}>
            <h2 className='title1'>Project Background</h2>
            <div className={`text`}>
              <p className='body_2'>
                {projects[Number(proj_number) - 1]?.textBackground}
              </p>
            </div>
          </div>
          <div className={`static_prev_container  `}>
            <h3 className='title2'>Static Previews</h3>
            <div className={'img_1 '}>
        {proj_number === undefined ? (
            <Skeleton  borderRadius={30} width={635} height={400} />
        ) : (
              <Image
                src={imageArr[Number(proj_number) - 1]?.imgPrev1}
                alt={'Image-Prev1'}
                fill={true}
                objectFit='contain'
              />
        )}
            </div>
            <div className={'img_2 '}>
        {proj_number === undefined ? (
            <Skeleton  borderRadius={30} width={635} height={400} />
        ) : (
              <Image
                src={imageArr[Number(proj_number) - 1]?.ImgPrev2}
                alt={'Image-Prev2'}
                fill={true}
                objectFit='contain'
              />
        )}
            </div>
          </div>
        </div>
      </div>
    </>
  ):null
}

export default ProjectComponentDetail
