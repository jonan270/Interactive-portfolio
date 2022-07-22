import globalIllumination from "../images/global_illumination.bmp"
import caps from "../images/caps.png"
import raid from "../images/table_raid.png"
import Overlay from "./Overlay"
import "../styles/images.scss"
import { useState } from "react"

const Projects: React.FC<{}> = () => {
    const [showOverlay, setOverlay] = useState(false);
    
    const overlayProps: Overlay = {
        showOverlay: showOverlay,
        setOverlay: setOverlay
    }
    const showCaseClick = () => {
        console.log("Image clicked");
        setOverlay(prev => !prev);
    }

    // let overlayProps: Overlay = () => {
    //     show
    // }
    return(
        <div id="projects" className="chapter">
            <h1>Project showroom</h1>
            <p>
                Below you will find some especially interesting projects from
                my study time. Have a look around!
            </p>
            <Overlay overlay={overlayProps}/>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={globalIllumination}
                    alt="global_illumination"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={showCaseClick}>
                        <p>Advanced Global Illumination</p>
                    </div>
                </div>
                <div className="showcaseItem">
                    <img src={caps}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={showCaseClick}>
                        <p>Image reproduction using bottlecaps</p>
                    </div>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={raid}
                    alt="tableraid"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={showCaseClick}>
                        <p>Table Raid - a turn based game in VR</p>
                    </div>
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