import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { IdxCtx, IContext } from '../../Store/context/index_context'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'

interface IPropsSlider {
  proj_number?: string | string[] | undefined
}
let nameProjects: any = []
const SliderComponent: React.FC<IPropsSlider> = ({ proj_number }) => {
  const { projects } = useContext(IdxCtx) as IContext
  const router = useRouter()
  const lengthProjects = projects?.length

  return projects && lengthProjects ? (
    <div className={'Box_1_Slider'}>
      <div className={'line_separator_top'} />

      <div className={'box_prev'}>

        <FontAwesomeIcon  className={'arrow_left'} icon={faChevronLeft} />
        <Link
          className='box_prev_text'
          href={`${
            Number(proj_number) === 1 ? lengthProjects : Number(proj_number) - 1
          }
          `}
        >
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
        </Link>
      </div>

      <div className={'line_separator_middle'} />

      <div className={'box_next'}>
        <FontAwesomeIcon  className={'arrow_right'} icon={faChevronRight} />
        <Link
          className='box_next_text'
          href={`${
            Number(proj_number) === lengthProjects ? 1 : Number(proj_number) + 1
          }
          `}
        >
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
        </Link>
      </div>
      <div className={'line_separator_down'} />
    </div>
  ) : null
}

export default SliderComponent
