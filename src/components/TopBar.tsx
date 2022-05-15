import { Button } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { isBreakStatement } from 'typescript';

// HashLink menu inspiration: https://github.com/mohdraqif/LA-16, https://www.youtube.com/watch?v=d0c4aPO9PNg
const TopBar: React.FC<{}> = () => {
    const buttonMargin : number = 2;
    const about : string = "about";
    const projects : string = "projects";
    const experience : string = "experience";
    let currentState = about;

    const [pos, setPos] = useState(currentState);

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled : number = document.scrollingElement!.scrollTop;
            if(scrolled < 200) {console.log("About");} else
            if(scrolled < 400) {console.log("Projects");} else
            if(scrolled < 600) {console.log("Experience");}
        })
    },[]);

    return(
        <nav className="topBar">
            <div id="titleText">
                <h1>Jonathan Andersson</h1>
                <p>4th year M.Sc Student in Media Technology</p>
            </div>
            <div id="menuButtons">
                <Box display="flex" justifyContent="center">
                    <Box mr={buttonMargin}>
                        <Button className="button" variant="contained"
                         component={Link} smooth to={"/#" + about}>About me</Button>
                    </Box>
                    <Box mr={buttonMargin}>
                        <Button className="button" variant="contained"
                         component={Link} smooth to={"/#" + projects}>Project showroom</Button>
                    </Box>
                    <Box mr={buttonMargin}>
                        <Button className="button" variant="contained"
                         component={Link} smooth to={"/#" + experience}>Experience</Button>
                    </Box>
                </Box>
            </div>
        </nav>
    )
}

export default TopBar;