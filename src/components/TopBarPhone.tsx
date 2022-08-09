import { Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close"
import "../styles/overlay.scss"

const TopBarPhone: React.FC<{}> = () => {

    // Hamburger menu displayed on top left on phones
    const [showMenu, setMenu] = useState(false);
    let menu: JSX.Element | undefined = undefined;

    if(showMenu) {
        menu = (
            <div className="background--phoneMenu" onClick={() => setMenu(false)}>
                <div className="foreground--phoneMenu">
                    <div className="overlayButtonContainer--phoneMenu">
                        <IconButton
                            onClick={() => setMenu(false)}
                            color="primary"
                            aria-label="Close menu"
                            component="label">
                                <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
        {menu}
            <nav className="topBar--phone">
                <div id="hyperButtons">
                    <IconButton
                        onClick={() => setMenu(prev => !prev)}
                        color="primary"
                        aria-label="Visit GitHub page"
                        component="label">
                            <MenuIcon/>
                    </IconButton>
                </div>
                <div className="titleText--phone">
                    <h1>Jonathan Andersson</h1>
                    <p>5th year M.Sc Student in Media Technology</p>
                </div>
            </nav>
        </div>
    )
}

export default TopBarPhone;