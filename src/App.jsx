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
import FloatingNavbar from './Pages/components/FloatingNavbar'

AOS.init({
  once:true
});
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="px-3 w-full h-full mt-12 md:mt-16 lg:mt-0 container font-sora">
      <ShootingStars
        starWidth='15'
        minDelay={'10'}
        maxSpeed='50'
        className="fixed inset-0 h-screen w-screen -z-10 dark:bg-black"/> 
      <StarsBackground 
        className="fixed inset-0 h-screen w-screen -z-10"
          />
      <div className="w-full pointer-events-none inset-0 lg:flex items-center justify-center dark:bg-black bg-white duration-500 dark:[mask-image:none] [mask-image:radial-gradient(ellipse_at_center,white,transparent_50%)] dark:bg-grid-transparent bg-grid-slate-400/[0.2]"></div>

      <NavbarComponent />
      {/* Tambahkan margin-left untuk memberi ruang pada konten agar tidak tertutup navbar */}
        <div className="max-w-7xl relative p-2 lg:px-8 lg:ml-[16rem] lg:py-12">
          <DynamicTitle/>
          <FloatingNavbar/>
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
