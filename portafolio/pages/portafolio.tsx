import ProjectListComponent from '../components/Projects/ProjectListComponent'
import LayoutComponent from '../components/Layout'
import projects from '../utils/projectSet'
import IndexContextProvider from '../Store/context/index_context'

export default function Portafolio() {
  return (
    <IndexContextProvider>
        <LayoutComponent pg={'pg2'}>
          <ProjectListComponent />
        </LayoutComponent>
    </IndexContextProvider>
  )
}
