import globalIllumination from "../images/global_illumination.bmp"
import caps from "../images/caps.png"
import raid from "../images/table_raid.png"
import "../styles/images.scss"

const Projects: React.FC<{}> = () => {
    const showCaseClick = () => {
        console.log("Image clicked");
    }

    return(
        <div id="projects" className="chapter">
            <h1>Project showroom</h1>
            <p>
                Below you will find some especially interesting projects from
                my study time. Have a look around!
            </p>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={globalIllumination}
                    alt="global_illumination"
                    onClick={showCaseClick}
                    className="showcaseImage"/>
                    <div className="showcaseOverlay">
                        <p>test</p>
                    </div>
                </div>
                <div className="showcaseItem">
                    <img src={caps}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={raid}
                    alt="tableraid"
                    className="showcaseImage"/>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nisl
                sed lacus gravida vehicula. Nunc nec erat ut leo eleifend accumsan. Aenean
                eget nisi ac dui imperdiet cursus. Sed sit amet mattis ex.
                
                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero. </p>
        </div>
    )
}

export default Projects;