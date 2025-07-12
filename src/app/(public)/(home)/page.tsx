import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import Header from '@/components/header/header'
import HomeProducts from './component/HomeProducts'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <div >
      <Carousel/>
      <HomeProducts/>

      </div>
      <Footer/>
    </div>
  )
}
