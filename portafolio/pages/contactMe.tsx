import ProjectListComponent from '../components/Projects/ProjectListComponent'
import LayoutComponent from '../components/Layout'
import IndexContextProvider from '../Store/context/index_context'
import ContactMeFormComponent from '../components/ContactMe/ContactMeForm'

export default function ContactMe() {
  return (
    <IndexContextProvider>
        <LayoutComponent pg={'pg4'}>
        <ContactMeFormComponent/>

        </LayoutComponent>
    </IndexContextProvider>
  )
}
