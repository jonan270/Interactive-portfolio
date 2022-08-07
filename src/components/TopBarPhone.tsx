import { Button, IconButton } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import GitIcon from "@mui/icons-material/GitHub"
import { LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';

// HashLink menu inspiration:
// https://github.com/mohdraqif/LA-16, 
// https://www.youtube.com/watch?v=d0c4aPO9PNg
const TopBarPhone: React.FC<{}> = () => {
    const buttonMargin: number = 2;

    const link_linkedin: string = 
        "https://www.linkedin.com/in/jonathan-andersson-43488a209";

    const link_git: string =
        "https://github.com/jonan270";

    return(
        <nav className="topBar--phone">
            <div id="hyperButtons">
                <a href={link_git} target="_blank" rel="noreferrer">
                    <IconButton
                        color="primary"
                        aria-label="Visit GitHub page"
                        component="label">
                            <MenuIcon/>
                    </IconButton>
                </a>
            </div>
        </nav>
    )
}

export default TopBarPhone;