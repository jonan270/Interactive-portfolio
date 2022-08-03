import globalIllumination_img from "../images/global_illumination.bmp"
import caps_img from "../images/caps.png"
import raid_img from "../images/table_raid.png"
import Overlay from "./Overlay"
import "../styles/images.scss"
import React, { useState } from "react"
import Experience from "./Experience"
import AboutMe from "./AboutMe"

const Projects: React.FC<{}> = () => {
    // State to handle wheter overlay should be displayed or not
    const [showOverlay, setOverlay] = useState(false);

    // Props to be handled by the overlay component
    const overlayProps: Overlay = {
        showOverlay: showOverlay,
        setOverlay: setOverlay,
        childComponent: Experience
    }

    // State to handle the childcomponent of overlay
    const [content, setContent] = useState({...overlayProps});
    content.showOverlay = showOverlay;
    content.setOverlay = setOverlay;

    const showCaseClick = (component: React.FC<{}>) => {
        console.log("Image clicked");
        overlayProps.childComponent = component;
        setContent(overlayProps);
        console.log(overlayProps.childComponent.name);
        setOverlay(prev => !prev);
    }

    return(
        <div id="projects" className="chapter">
            <h1>Project showroom</h1>
            <p>
                Below you will find some especially interesting projects from
                my study time. Have a look around!
            </p>
            <Overlay overlay={content}/>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={globalIllumination_img}
                    alt="global_illumination"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => showCaseClick(Experience)}>
                        <p>Advanced Global Illumination</p>
                    </div>
                </div>
                <div className="showcaseItem">
                    <img src={caps_img}
                    alt="bottlecap_image"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => showCaseClick(Experience)}>
                        <p>Image reproduction using bottlecaps</p>
                    </div>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem--large">
                    <img src={raid_img}
                    alt="tableraid"
                    className="showcaseImage"/>
                    <div className="showcaseOverlay" onClick={() => showCaseClick(AboutMe)}>
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