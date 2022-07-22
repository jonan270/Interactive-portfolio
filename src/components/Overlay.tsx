import React from "react";

interface Props {
    overlay: Overlay
}

const Overlay: React.FC<Props> = ({overlay}) => {
    return(
        <div>
            {overlay.showOverlay ? <h1>Overlay</h1> : null}
        </div>
    )
}

export default Overlay;