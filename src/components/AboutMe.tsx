import profile from "../images/profile_2024.jpg"
import "../styles/images.scss"
import EmailIcon from '@mui/icons-material/Email';
import { PhoneAndroid as Phone } from "@mui/icons-material";
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from '@mui/icons-material/Terminal';

const AboutMe: React.FC<{}> = () => {
    const contrabandLink: string =
        "https://www.xbox.com/en-US/games/contraband"

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
                <ConstructionIcon color="primary"/>
                <a
                className="iconText"
                href="https://avalanchestudios.com/"
                target="_blank" rel="noreferrer"
                >
                    Avalanche Studios Group
                </a>
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
            <div className="iconTextRow">
                <TerminalIcon color="primary"/>
                <p className="iconText">Favorite programming languages:</p>
            </div>
            <p className="iconText--nextLine">C++, C, C#, Python</p>
            <hr/>
            <h2>INTRODUCTION</h2>
            <p>
                Hello to whoever you may be and welcome to my small corner of the internet!
                I am a 27 year old social nerd who loves video games and guitars.
                Right now, I work as a Gameplay Programmer at Avalanche Studios Group
                where I work on an unreleased co-op game named&nbsp;
                <a href={contrabandLink} target="_blank" rel="noreferrer">
                        Contraband
                </a>.
            </p>
        </div>
    )
}

export default AboutMe;
