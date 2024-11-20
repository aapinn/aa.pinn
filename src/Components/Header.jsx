import TextDescription from "../Pages/components/TextDescription"
import TitleComponent from "../Pages/components/TitleComponent"


const Header =() => {
    return (
        <>
        <TitleComponent 
            title="Hi, I'm Software Engineer"
            job="Software Engineer"
            place="Based in Indonesia " />
        <TextDescription
            subtitle={'Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.'}
        />
        </>
    )
}
export default Header   