import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
const Content: React.FC<{}> = () => {
    return(
        <div id="content" className="chapter">
            <AboutMe/>
            <Projects/>
            <Experience/>
        </div>
    )
}

export default Content;