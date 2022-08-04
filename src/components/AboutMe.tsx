import profile from "../images/profile.jpg"
import "../styles/images.scss"
import "../styles/about.scss"
import EmailIcon from '@mui/icons-material/Email';
import { PhoneAndroid as Phone } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";

const AboutMe: React.FC<{}> = () => {
    return(
        <div id = "about" className="chapter">
            <img src={profile} alt="profile_image" id='profileImg'/>
            <h1>About me</h1>
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
                href="https://studieinfo.liu.se/en/program/6CMEN"
                target="_blank" rel="noreferrer"
                >
                    5th year M.Sc Student in Media Technology
                </a>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nisl
                sed lacus gravida vehicula. Nunc nec erat ut leo eleifend accumsan. Aenean
                eget nisi ac dui imperdiet cursus. Sed sit amet mattis ex.
                
                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero.
                
                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero.

                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero.

                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero.

                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero.

                Aliquam erat volutpat. Nullam finibus vel augue nec placerat. Aliquam vitae
                risus ac elit semper imperdiet nec vel augue. Mauris et suscipit ipsum.
                Donec pellentesque in sapien eu tincidunt. Nam ac eros non libero tempus blandit.
                Praesent non felis ac lorem consequat vulputate.
                Aenean at tristique justo, et efficitur libero.
                </p>
        </div>
    )
}

export default AboutMe;