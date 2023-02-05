import { createContext, useState, useRef, useEffect } from 'react'
import Project from '../../namespace/Project'
import projects from '../../utils/projectSet'

interface IProps {
  children?: React.ReactNode
}
export interface IContext {
  projects?: Project.Description[]
  setProjects?: React.Dispatch<React.SetStateAction<Project.Description[]>>
  refAbout?: React.MutableRefObject<HTMLDivElement|null>
  refPortafolio?: React.MutableRefObject<HTMLDivElement|null>
  refProjects?: React.MutableRefObject<HTMLDivElement|null>
  refContactMe?: React.MutableRefObject<HTMLDivElement|null>
}
export const IdxCtx = createContext<IContext|null>(null)

const IndexContextProvider: React.FC<IProps> = ({ children }) => {

  const [projectsArr, setProjects] = useState<Project.Description[]>(projects)
  //About Refs
  const refAbout = useRef<HTMLDivElement|null>(null)
  //Portafolio Refs
  const refPortafolio = useRef<HTMLDivElement|null>(null)
  //Portafolio Projects
  const refProjects = useRef<HTMLDivElement|null>(null)
  //ContactProjects
  const refContactMe= useRef<HTMLDivElement|null>(null)

  const value = {
    projects: projectsArr,
    setProjects: setProjects,
    refAbout: refAbout,
    refPortafolio: refPortafolio,
    refProjects: refProjects,
    refContactMe:refContactMe,
  }


  return <IdxCtx.Provider value={value}>{children}</IdxCtx.Provider>
}

export default IndexContextProvider
