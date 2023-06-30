import { Button, IconButton } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import GitIcon from "@mui/icons-material/GitHub"
import { LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";

interface Props {
    links: Links
}

// HashLink menu inspiration:
// https://github.com/mohdraqif/LA-16, 
// https://www.youtube.com/watch?v=d0c4aPO9PNg
const TopBarDesktop: React.FC<Props> = ({links}) => {
    const buttonMargin: number = 2;

    return(
        <nav className="topBar">
            <div className="hyperButtons">
                <a href={links.gitLink} target="_blank" rel="noreferrer">
                    <IconButton
                        color="primary"
                        aria-label="Visit GitHub page"
                        component="label">
                            <GitIcon/>
                    </IconButton>
                </a>
                <a href={links.linkedinLink} target="_blank" rel="noreferrer">
                    <IconButton
                        onClick={() => console.log("Linking to GitHub...")}
                        color="primary"
                        aria-label="Visit LinkedIn profile"
                        component="label">
                            <LinkedIn/>
                    </IconButton>
                </a>
            </div>
            <div className="titleText">
                <h1>Jonathan Andersson</h1>
                <p>Gameplay Programmer and Media Technology Engineer</p>
            </div>
            <div className="menuButtons">
                <Box display="flex" justifyContent="center">
                    <Box mr={buttonMargin}>
                        <Button className="button"
                            variant="contained"
                            component={HashLink}
                            smooth to="/#about">
                                About me
                        </Button>
                    </Box>
                    <Box mr={buttonMargin}>
                        <Button className="button"
                            variant="contained"
                            component={HashLink}
                            smooth to="/#projects">
                                Project showroom
                        </Button>
                    </Box>
                    <Box mr={0}>
                        <Button className="button"
                            variant="contained"
                            component={HashLink}
                            smooth to="/#experience">
                                Experience
                        </Button>
                    </Box>
                </Box>
            </div>
        </nav>
    )
}

export default TopBarDesktop;