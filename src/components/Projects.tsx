import globalIllumination_img from "../images/400samples.bmp"
import caps_img from "../images/caps_me.png"
import raid_img from "../images/table_raid.png"
import ux_img from "../images/ux.png"

import "../styles/images.scss"

import BottleCaps from "../projects/BottleCaps"
import TableRaid from "../projects/TableRaid"
import GlobalIllumination from "../projects/GlobalIllumination"


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
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(BottleCaps)}>
                        <p>IMAGE REPRODUCTION USING BOTTLECAPS</p>
                    </div>
                </div>
            </div>
            <h3>Click the images for more information!</h3>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={ux_img}
                    alt="ux_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(TableRaid)}>
                        <p>MATPLAN - A PURE UX PROJECT</p>
                    </div>
                </div>
            </div>
            <h3>Click the images to learn more!</h3>
        </div>
    )
}

export default Projects;