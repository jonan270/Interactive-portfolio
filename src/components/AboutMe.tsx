import profile from "../images/profile.jpg"
import "../styles/images.scss"
import EmailIcon from '@mui/icons-material/Email';
import { PhoneAndroid as Phone } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from '@mui/icons-material/Terminal';

const AboutMe: React.FC<{}> = () => {
    const theAnglerLink: string =
        "https://cotwtheangler.com/"

    return(
        <div id = "about" className="chapter">
            <img src={profile} alt="profile_image" id='profileImg'/>
            <h1>ABOUT ME</h1>
            <div className="iconTextRow">
                <Phone color="primary"/>
                <p className="iconText">+46703107498</p>
            </div>
            <div className="iconTextRow">
                <EmailIcon color="primary"/>
                <p className="iconText">cg.jonathan.andersson@gmail.com</p>
            </div>
            <div className="iconTextRow">
                <SchoolIcon color="primary"/>
                <a
                className="iconText"
                href="https://liu.se/utbildning/program/6cmen"
                target="_blank" rel="noreferrer"
                >
                    M.Sc in Media Technology
                </a>
            </div>
            <hr/>
            <p>
                A 25 year old social nerd who loves video games and guitars.
                Right now, I work as a Gameplay Programmer at Avalanche Studios Group
                where I work on our latest outdoor gaming experience:&nbsp;
                <a href={theAnglerLink} target="_blank" rel="noreferrer">
                        Call of the Wild: The Angler
                </a>.
            </p>

            <div className="iconTextRow">
                <TerminalIcon color="primary"/>
                <p className="iconText">Favorite programming languages:</p>
            </div>
            <p className="iconText--nextLine">C++, C, C#, Python</p>
        </div>
    )
}

export default AboutMe;
