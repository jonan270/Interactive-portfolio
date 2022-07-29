import React from "react";
import "../styles/overlay.scss"
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

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
                    <IconButton  onClick={() => overlay.setOverlay(false)} color="primary" aria-label="upload picture" component="label">
                        <CloseIcon/>
                    </IconButton>
                </div>
                    <h1>{overlay.content.title}</h1>
                    <div className="description"><p>{overlay.content.description}</p></div>
                </div>
            </div>
            : null}
        </div>
    )
}

export default Overlay;