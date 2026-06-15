import { Helmet } from 'react-helmet-async'
import Header from "../Components/Header"
import Content from "../Components/Content"
import { itemCards } from '../data';
import { FaServicestack } from "react-icons/fa6";
import { TbArticle } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import BentoGridComponent from "./components/BentoGridComponent";
import ProjectShowcase from "../Components/ProjectShowcase"
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

          <Content
            icon={<TbArticle/>}
            text={'Latest Articles'}
            subtitle={'My latest projects and case studies'}
            item={[itemCards]}
            className={"border-t border-dashed border-slate-300 mt-5 py-4"}
            showCards={false}
          />
          <ProjectShowcase/>

          <div className="my-8 p-4 rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30">
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
