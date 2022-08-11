import globalIllumination_img from "../images/400samples.bmp"
import caps_img from "../images/caps.png"
import raid_img from "../images/table_raid.png"
import "../styles/images.scss"

import Experience from "./Experience"
import GlobalIllumination from "../projects/GlobalIllumination"
import TableRaid from "../projects/TableRaid"

interface Props {
    overlay: Overlay
}

const Projects: React.FC<Props> = ({overlay}) => {
    return(
        <div id="projects" className="chapter">
            <h1>PROJECT SHOWROOM</h1>
            <p>
                Below you will find some especially interesting projects from
                my study time. Have a look around!
            </p>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={raid_img}
                    alt="tableraid"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(TableRaid)}>
                        <p>TABLE RAID - A TURN BASED GAME IN VR</p>
                    </div>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={globalIllumination_img}
                    alt="global_illumination"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(GlobalIllumination)}>
                        <p>ADVANCED GLOBAL ILLUMINATION</p>
                    </div>
                </div>
                <div className="showcaseItem">
                    <img src={caps_img}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(Experience)}>
                        <p>IMAGE REPRODUCTION USING BOTTLECAPS</p>
                    </div>
                </div>
            </div>
            <h3>Click the images to learn more!</h3>
        </div>
    )
}

export default Projects;