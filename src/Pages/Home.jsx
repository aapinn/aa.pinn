import Header from "../Components/Header"
import Content from "../Components/Content"
import { itemCards } from '../data';
import { FaServicestack } from "react-icons/fa6";
import { TbArticle } from "react-icons/tb";
import BentoGridComponent from "./components/BentoGridComponent";



const Home = () => {

    return(
        <div data-aos='fade-down' data-aos-duration='1000'>
        <Header/>
        <Content
            icon={<TbArticle/>}
            text={'Latest Articles'}
            subtitle={'Latest Article from dev.to'}
            item={[itemCards]}
            className={"border-y mt-5 py-4"}
            />
        <Content
            className={'border-none'}
            icon={<FaServicestack />}
            text={'Services'}
            subtitle={'I can deliver the following services'}
            showCards={false}
            />
        <BentoGridComponent/>
        </div>
        

    )
}

export default Home

