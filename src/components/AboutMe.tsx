import profile from "../images/profile.jpg"
import "../styles/images.scss"
import EmailIcon from '@mui/icons-material/Email';
import { PhoneAndroid as Phone } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const AboutMe: React.FC<{}> = () => {
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
                A 24 year old social nerd who loves video games and guitars.
                Currently I am mostly looking at options for my master thesis 
                but feel free to reach out about anything!
            </p>

            <div className="iconTextRow">
                <TerminalIcon color="primary"/>
                <p className="iconText">Favorite programming languages:</p>
            </div>
            <p className="iconText--nextLine">C++, C#, Java, Python, GLSL</p>

            <div className="iconTextRow">
                <HomeRepairServiceIcon color="primary"/>
                <p className="iconText">Other skills:</p>
            </div>
            <p className="iconText--nextLine">Unity, Git, Linux, Scrum, maths and engineering</p>

        </div>
    )
}

export default AboutMe;