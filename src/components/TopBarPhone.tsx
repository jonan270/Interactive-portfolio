import { Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close"
import "../styles/overlay.scss"

import { HashLink } from "react-router-hash-link";
import GitIcon from "@mui/icons-material/GitHub"
import { LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";

interface Props {
    links: Links
}

const TopBarPhone: React.FC<Props> = ({links}) => {
    const buttonMargin: number = 2;

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
                    <div className="menuButtons--phoneMenu">
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center">
                                <Box mb={buttonMargin}>
                                    <a href={links.gitLink} target="_blank" rel="noreferrer">
                                        <IconButton
                                            color="primary"
                                            aria-label="Visit GitHub page"
                                            component="label">
                                                <GitIcon/>
                                        </IconButton>
                                    </a>
                                </Box>
                                <Box mb={buttonMargin}>
                                    <a href={links.linkedinLink} target="_blank" rel="noreferrer">
                                        <IconButton
                                            onClick={() => console.log("Linking to GitHub...")}
                                            color="primary"
                                            aria-label="Visit LinkedIn profile"
                                            component="label">
                                                <LinkedIn/>
                                        </IconButton>
                                    </a>
                                </Box>
                            </Box>
                            <Box mb={buttonMargin}>
                                <Button className="button"
                                variant="contained"
                                component={HashLink}
                                smooth to="/#about">
                                    About me
                                </Button>
                            </Box>
                            <Box mb={buttonMargin}>
                                <Button className="button"
                                variant="contained"
                                component={HashLink}
                                smooth to="/#projects">
                                    Project showroom
                                </Button>
                            </Box>
                            <Box mb={buttonMargin}>
                                <Button className="button"
                                    variant="contained"
                                    component={HashLink}
                                    smooth to="/#experience">
                                        Experience
                                </Button>
                            </Box>
                        </Box> 
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
        {menu} {/* Either menu JSX element above or nothing */}
            <nav className="topBar--phone">
                <div className="hyperButtons">
                    <IconButton
                        onClick={() => setMenu(prev => !prev)}
                        color="primary"
                        aria-label="Menu"
                        component="label">
                            <MenuIcon/>
                    </IconButton>
                </div>
                <div className="titleText--phone">
                    <h1>Jonathan Andersson</h1>
                    <p>Gameplay Programmer and Media Technology Engineer</p>
                </div>
            </nav>
        </div>
    )
}

export default TopBarPhone;