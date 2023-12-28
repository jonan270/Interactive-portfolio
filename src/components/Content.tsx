import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import { Button, IconButton } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface Props {
    overlay: Overlay
}

const Content: React.FC<Props> = ({overlay}) => {
    return(
        <div id="content" className="chapter">
            <AboutMe/>
            <Projects overlay={overlay}/>
            <Experience/>
            <div id="rocketLaunchPad">
                <Button
                    startIcon={
                        <IconButton
                            size="large"
                            color="primary"
                            aria-label="TO THE TOP"
                            component="label">
                                <RocketLaunchIcon fontSize="large"/>
                        </IconButton>
                    }
                    variant="outlined"
                    size="large"
                    component={HashLink}
                    smooth to="/#about"
                >
                    To the top
                </Button>
            </div>
            <div id="bottomOfPage"></div>
        </div>
    )
}

export default Content;
