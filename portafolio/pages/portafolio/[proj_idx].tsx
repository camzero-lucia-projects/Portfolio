import LayoutComponent from '../../components/Layout'
import { useRouter } from 'next/router'
import ProjectComponentDetail from '../../components/ProjectDetail/ProjectDetail'
import SliderComponent from '../../components/ProjectDetail/SliderComponent'
import IndexContextProvider from '../../Store/context/index_context'

export default function Home() {
  const router = useRouter()
  const { proj_idx } = router.query

  return (
    <IndexContextProvider>
      <div className='Container_pg3'>
        <LayoutComponent pg={'pg3'}>
          <ProjectComponentDetail proj_number={proj_idx} />
          <SliderComponent proj_number={proj_idx} />
        </LayoutComponent>
      </div>
    </IndexContextProvider>
  )
}
