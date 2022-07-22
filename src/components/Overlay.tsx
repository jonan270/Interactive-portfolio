import React from "react";

interface Props {
    showOverlay: boolean,
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay: React.FC<Props> = (props: Props) => {
    return(
        <div>
            {props.showOverlay ? <h1>Overlay</h1> : null}
        </div>
    )
}

export default Overlay;