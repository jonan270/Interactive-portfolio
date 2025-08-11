import larry_img from "../images/larry.png"
import blub_img from "../images/blubattack.png"
import globalIllumination_img from "../images/400samples.bmp"
import caps_img from "../images/caps_me.png"
import raid_img from "../images/table_raid.png"
import contraband_img from "../images/contraband.png"
import theangler_img from "../images/theangler.jpg"

import "../styles/images.scss"

import Contraband from "../projects/Contraband"
import TheAngler from "../projects/TheAngler"
import BottleCaps from "../projects/BottleCaps"
import TableRaid from "../projects/TableRaid"
import BotLarry from "../projects/BotLarry"
import BlubAttack from "../projects/BlubAttack"
import GlobalIllumination from "../projects/GlobalIllumination"

interface Props {
    overlay: Overlay
}

const Projects: React.FC<Props> = ({overlay}) => {
    return(
        <div id="projects" className="chapter">
            <h1>PROJECT SHOWROOM</h1>
            <p>
                Below you will find a mix of projects I have worked on. Click the images for more detailed information!
            </p>
            <br />
            <h1>PROFESSIONAL PROJECTS</h1>
            <hr />
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={contraband_img}
                    alt="tableraid"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(Contraband)}>
                        <p>CONTRABAND - AN UNRELEASED XBOX TITLE</p>
                    </div>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={theangler_img}
                    alt="tableraid"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(TheAngler)}>
                        <p>CALL OF THE WILD: THE ANGLER</p>
                    </div>
                </div>
            </div>
            <br />
            <h1>PASSION PROJECTS</h1>
            <hr />
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
                    <img src={blub_img}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(BlubAttack)}>
                        <p>BLUB ATTACK - A TOWER DEFENSE GAME WITH AI PERSONALITIES</p>
                    </div>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={caps_img}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(BottleCaps)}>
                        <p>IMAGE REPRODUCTION USING BOTTLECAPS</p>
                    </div>
                </div>
                <div className="showcaseItem">
                    <img src={larry_img}
                    alt="larry_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => overlay.triggerOverlay(BotLarry)}>
                        <p>BOT LARRY - A DISCORD BOT INSPIRED BY A FRIEND</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
