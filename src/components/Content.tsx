import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";

interface Props {
    overlay: Overlay
}

const Content: React.FC<Props> = ({overlay}) => {
    return(
        <div id="content" className="chapter">
            <AboutMe/>
            <Projects overlay={overlay}/>
            <Experience/>
        </div>
    )
}

export default Content;