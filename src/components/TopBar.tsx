import { Button, IconButton } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import GitIcon from "@mui/icons-material/GitHub"
import { LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";


// HashLink menu inspiration:
// https://github.com/mohdraqif/LA-16, 
// https://www.youtube.com/watch?v=d0c4aPO9PNg
const TopBar: React.FC<{}> = () => {
    const buttonMargin: number = 2;

    const link_linkedin: string = 
        "https://www.linkedin.com/in/jonathan-andersson-43488a209";

    const link_git: string =
        "https://github.com/jonan270";

    return(
        <nav className="topBar">
            <div id="hyperButtons">
                <a href={link_git} target="_blank" rel="noreferrer">
                    <IconButton
                        color="primary"
                        aria-label="Visit GitHub page"
                        component="label">
                            <GitIcon/>
                    </IconButton>
                </a>
                <a href={link_linkedin} target="_blank" rel="noreferrer">
                    <IconButton
                        onClick={() => console.log("Linking to GitHub...")}
                        color="primary"
                        aria-label="Visit LinkedIn profile"
                        component="label">
                            <LinkedIn/>
                    </IconButton>
                </a>
            </div>
            <div id="titleText">
                <h1>Jonathan Andersson</h1>
                <p>5th year M.Sc Student in Media Technology</p>
            </div>
            <div id="menuButtons">
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
                    <Box mr={buttonMargin}>
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

export default TopBar;