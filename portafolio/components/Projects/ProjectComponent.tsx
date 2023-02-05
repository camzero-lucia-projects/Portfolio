import React, { useContext } from 'react'
import Project from '../../namespace/Project'
import Image from 'next/image'
import ImageProject1 from '../../public/assets/Project3_index.png'
import ImageProject2 from '../../public/assets/Project2_index.png'
import ImageProject3 from '../../public/assets/ProjectApp_index.png'

import ImageProject4 from '../../public/assets/Project1_index.png'
import { useRouter } from 'next/router'
import { IdxCtx, IContext } from '../../Store/context/index_context'

interface IProps {
  project: Project.Description
  number: number
}

const ProjectComponent: React.FC<IProps> = ({ number, project }) => {
  const imageArr = [ImageProject1, ImageProject2, ImageProject3, ImageProject4]
  const { refPortafolio} = useContext(IdxCtx) as IContext
  const router = useRouter()
  //Even Left
  return number % 2 === 0 ? (
    <div className={`Box1_Project_left project_${number}`} >
      <div className={'Box2_img'}>
        <Image
          src={imageArr[number]}
          alt={'Image-Index'}
          fill={true}
          objectFit='contain'
        />
      </div>
      <div className={'Box2_container_text'}  ref={refPortafolio}>
        <div className={'line_separator_top'} />
        <div className={'Box2_text'}>
          <h2>{project.nameProject}</h2>
          <p className='body_1 '>{project.textIndex}</p>
          <button
            className={`buttonSecondary ButtonProject`}
            onClick={() => {
              router.push(`portafolio/${number+1}`)
            }}
          >
            <div className={`textButton button1_text`}>View Project</div>
          </button>
        </div>
        <div className={'line_separator_down'} />
      </div>
    </div>
  ) : (
    //Odd Right
    <div className={`Box1_Project_right project_${number}`} >
      <div className={'Box2_img'}>
        <Image
          src={imageArr[number]}
          alt={'Image-Index'}
          fill={true}
          objectFit='contain'
        />
      </div>
      <div className={'Box2_container_text'}>
        <div className={'line_separator_top'} />
        <div className={'Box2_text'}>
          <h2>{project.nameProject}</h2>
          <p className='body_1 '>{project.textIndex}</p>
          <button
            className={`buttonSecondary ButtonProject`}
            onClick={() => {
              router.push(`portafolio/${number+1}`)
            }}
          >
            <div className={`textButton button1_text`}>View Project</div>
          </button>
        </div>
        <div className={'line_separator_down'} />
      </div>
    </div>
  )
}

export default ProjectComponent
