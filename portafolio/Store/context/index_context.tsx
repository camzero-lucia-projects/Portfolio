import { createContext,useState} from 'react'
import Project from '../../namespace/Project'
import projects from '../../utils/projectSet'

interface IProps {
  children?: React.ReactNode
}
export interface IContext {
  projects?: Project.Description[]; 
  setProjects?:React.Dispatch<React.SetStateAction<Project.Description[]>>;

}

export const IdxCtx = createContext<IContext | null>(null)

const IndexContextProvider: React.FC<IProps> = ({ children }) => {
  const [projectsArr, setProjects] = useState<Project.Description[]>(projects)

  const value={
    projects:projectsArr,
    setProjects:setProjects,
  }

  return <IdxCtx.Provider value={value} >{children}</IdxCtx.Provider>
}

export default IndexContextProvider
