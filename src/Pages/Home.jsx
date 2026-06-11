import { Helmet } from 'react-helmet-async'
import Header from "../Components/Header"
import Content from "../Components/Content"
import { itemCards } from '../data';
import { FaServicestack } from "react-icons/fa6";
import { TbArticle } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { BsLightning } from "react-icons/bs";
import BentoGridComponent from "./components/BentoGridComponent";
import ProjectShowcase from "../Components/ProjectShowcase"
import StatsCounter from "./components/StatsCounter";
import GitHubProjects from "./components/GitHubProjects";

const Home = () => {
    return(
        <div data-aos='fade-down' data-aos-duration='1000'>
          <Helmet>
            <title>Arif Rahman Hidayat | Software Engineer & Frontend Developer</title>
            <meta name="description" content="Portfolio pribadi Arif Rahman Hidayat - Software Engineer, Frontend Developer, dan UI/UX Designer. Lihat proyek, layanan, dan pengalaman kerja saya." />
            <meta property="og:title" content="Arif Rahman Hidayat | Software Engineer & Frontend Developer" />
            <meta property="og:description" content="Portfolio pribadi Arif Rahman Hidayat - Software Engineer, Frontend Developer, dan UI/UX Designer dari Bekasi, Indonesia." />
            <meta property="og:url" content="https://aapinn.vercel.app" />
          </Helmet>
          <Header/>

          <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/10 border border-purple-200 dark:border-purple-800/30">
            <div className="flex items-center gap-2 mb-2">
              <BsLightning className="text-purple-500" />
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Quick Snapshot</h3>
            </div>
            <StatsCounter />
          </div>

          <Content
            icon={<TbArticle/>}
            text={'Latest Articles'}
            subtitle={'My latest projects and case studies'}
            item={[itemCards]}
            className={"border-t mt-5 py-4"}
            showCards={false}
          />
          <ProjectShowcase/>

          <div className="my-8 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30">
            <div className="flex items-center gap-2 mb-2">
              <VscGithub className="text-xl text-neutral-700 dark:text-neutral-300" />
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Open Source</h3>
            </div>
            <GitHubProjects />
          </div>

          <Content
            className={'border-none'}
            icon={<FaServicestack />}
            text={'Services'}
            subtitle={'What I can do for you'}
            showCards={false}
          />
          <BentoGridComponent/>
        </div>
    )
}

export default Home
