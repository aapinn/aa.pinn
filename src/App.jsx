import { Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import NavbarComponent from './Components/NavbarComponent'
import AOS from 'aos'
import { useEffect } from 'react'
import Blog from './Pages/Blog'
import Projects from './Pages/Projects'
import Roadmap from './Pages/Roadmap'
import Dashboard from './Pages/Dashboard'
import NotFound from './Pages/NotFound'
import CatatanBelanja from './Pages/Home/CatatanBelanja'
import PortfolioV2 from './Pages/Home/PortfolioV2'
import DynamicTitle from './Pages/components/DynamicTitle'
import { ShootingStars } from '../src/Components/ui/shooting-stars'
import { StarsBackground } from '../src/Components/ui/stars-background'
import GiantProfile from './Pages/About/GiantProfile'

AOS.init({
  once:true
});
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (    
    <div className="px-3 duration-500 font-sora dark:bg-black bg-white dark:bg-none bg-grid-slate-400/[0.1]">
     
      <div className="absolute w-full pointer-events-none inset-0 lg:flex items-center justify-center dark:bg-black bg-white duration-500 [mask-image:radial-gradient(ellipse_at_center,white,transparent_50%)]"></div>
      <ShootingStars
        starWidth='15'
        minDelay={'10'}
        maxSpeed='50'
        className='h-full'/>
      <StarsBackground 
        className='h-full'
          />
      <NavbarComponent />
      {/* Tambahkan margin-left untuk memberi ruang pada konten agar tidak tertutup navbar */}
        <div className=" relative p-2 lg:px-8 lg:ml-[16rem] lg:py-12">
          <DynamicTitle/>
          <Routes key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/latestArticle/CatatanBelanja" element={<CatatanBelanja/>}/>
            <Route path="/latestArticle/PortfolioV2" element={<PortfolioV2/>}/>
            <Route path="/about/Giant" element={<GiantProfile/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </div>
  );
}

export default App
