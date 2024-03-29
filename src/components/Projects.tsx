import larry_img from "../images/larry.png"
import blub_img from "../images/blubattack.png"
import globalIllumination_img from "../images/400samples.bmp"
import caps_img from "../images/caps_me.png"
import raid_img from "../images/table_raid.png"
import ux_img from "../images/ux.png"

import "../styles/images.scss"

import BottleCaps from "../projects/BottleCaps"
import TableRaid from "../projects/TableRaid"
import BotLarry from "../projects/BotLarry"
import BlubAttack from "../projects/BlubAttack"
import GlobalIllumination from "../projects/GlobalIllumination"
import MatPlan from "../projects/MatPlan"


interface Props {
    overlay: Overlay
}

const Projects: React.FC<Props> = ({overlay}) => {
    return(
        <div id="projects" className="chapter">
            <h1>PROJECT SHOWROOM</h1>
            <p>
                Below you will find some especially interesting projects from
                my spare time as well as study related projects. Have a look around!
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
                    <img src={larry_img}
                    alt="larry_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(BotLarry)}>
                        <p>BOT LARRY - A DISCORD BOT INSPIRED BY A FRIEND</p>
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
                    <img src={blub_img}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(BlubAttack)}>
                        <p>BLUB ATTACK - A TOWER DEFENSE GAME WITH AI PERSONALITIES</p>
                    </div>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={ux_img}
                    alt="ux_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(MatPlan)}>
                        <p>MATPLAN - A PURE UX PROJECT</p>
                    </div>
                </div>
            </div>
            <h3>Click the images to learn more!</h3>
        </div>
    )
}

export default Projects;