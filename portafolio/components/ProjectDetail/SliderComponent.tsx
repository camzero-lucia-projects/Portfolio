import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { IdxCtx, IContext } from '../../Store/context/index_context'
import Link from 'next/link'

interface IPropsSlider {
  proj_number?: string | string[] | undefined
}
let nameProjects: any = []
const SliderComponent: React.FC<IPropsSlider> = ({ proj_number }) => {
  const { projects } = useContext(IdxCtx) as IContext
  const router = useRouter()
  const lengthProjects = projects?.length

  return projects && lengthProjects?(
    <div className={'Box_1_Slider'}>
      <div className={'line_separator_top'} />

      <div className={'box_prev'}>
        <Link className='arrow_left' href={`${
              Number(proj_number) === 1
                ? lengthProjects
                : Number(proj_number) - 1}
          `} />
        <div className={'box_prev_text'}>
          <div className={'title_prev'}>
            <h3>
              {Number(proj_number) === 1
                ? projects[lengthProjects - 1]?.nameProject
                : projects[Number(proj_number) - 2]?.nameProject}
            </h3>
          </div>
          <div className={'sub_title'}>
            <p className='body_2 text'>Previous Project</p>
          </div>
        </div>
      </div>
      <div className={'line_separator_middle'} />
      <div className={'box_next'}>
        <Link className='arrow_right' href={`${
              Number(proj_number) === lengthProjects 
                ? 1
                : Number(proj_number) + 1}
          `} 
          />
        <div className={'box_next_text'}>
          <div className={'title_prev'}>
            <h3>
              {Number(proj_number) === lengthProjects
                ? projects[0]?.nameProject
                : projects[Number(proj_number)]?.nameProject}
            </h3>
          </div>
          <div className={'sub_title'}>
            <p className='body_2 text'>Next Project</p>
          </div>
        </div>
      </div>
      <div className={'line_separator_down'} />
    </div>
  ):null
}

export default SliderComponent
