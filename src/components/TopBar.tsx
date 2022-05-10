import profile from "../images/profile.jpg"
import { Button } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { HashLink as Link } from 'react-router-hash-link';

//<img src={profile} id='profileImg'/>
const TopBar: React.FC<{}> = () => {
    return(
        <div id = 'topBar'>
            <div id='titleText'>
                <h1>Jonathan Andersson</h1>
                <p>4th year M.Sc Student in Media Technology</p>
                <Button className="button" variant="contained" onClick={() => {}}>About me</Button>
                <Button className="button" variant="outlined" onClick={() => {}}>Project showroom</Button>
                <Button className="button" variant="outlined" onClick={() => {}}>Experience</Button>
            </div>
        </div>
    )
}

export default TopBar;