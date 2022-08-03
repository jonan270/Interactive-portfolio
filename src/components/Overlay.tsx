import React from "react";
import "../styles/overlay.scss"
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import GitIcon from "@mui/icons-material/GitHub"

interface Props {
    overlay: Overlay
}

const Overlay: React.FC<Props> = ({overlay}) => {
    return(
        <div>
            {overlay.showOverlay ? 
            <div className="background" onClick={() => overlay.setOverlay(false)}>
                <div className="foreground" onClick={(event)=>{event.stopPropagation()}}>
                    <div className="overlayButtonContainer">
                        <IconButton
                        onClick={() => console.log("Linking to GitHub...")}
                        color="primary"
                        aria-label="upload picture"
                        component="label">
                            <GitIcon/>
                        </IconButton>
                        <IconButton
                        onClick={() => overlay.setOverlay(false)}
                        color="primary"
                        aria-label="Close project information"
                        component="label">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    {<overlay.childComponent/>}
                </div>
            </div>
            : null}
        </div>
    )
}

export default Overlay;