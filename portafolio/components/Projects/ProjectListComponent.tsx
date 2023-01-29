import React, { useContext } from 'react'
import { IdxCtx, IContext } from '../../Store/context/index_context'
import ProjectComponent from './ProjectComponent'

const ProjectListComponent: React.FC = () => {
  const { projects } = useContext(IdxCtx) as IContext
  return (
    <div className={'Container_pg2'}>
      {projects?.map((project, idx) => (
        <ProjectComponent project={project} number={idx} />
      ))}
    </div>
  )
}

export default ProjectListComponent
