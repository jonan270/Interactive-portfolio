import AboutMe from "./AboutMe";
import Projects from "./Projects";
const Content: React.FC<{}> = () => {
    return(
        <div id = 'content'>
            <AboutMe/>
            <Projects/>
        </div>
    )
}

export default Content;