import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import InfoIcon from '@mui/icons-material/Info';

import team_photo from "../images/cs.png"

const Experience: React.FC<{}> = () => {

    const siggraphDenverTalk: string =
        "https://dl.acm.org/doi/10.1145/3641233.3665166"

    // MTEK
    const koenigseggLink: string = 
        "https://www.koenigsegg.com/"
    const cakeLink: string = 
        "https://ridecake.com"
    const swegonLink: string = 
        "https://www.swegon.com"

    // LiU Thesis
    const thesisLink: string =
        "https://drive.google.com/file/d/1_XwvjHs3-z0roUmikAgThhkCk-2FtZXV/view?usp=sharing"
        
    return(
        <div id="experience" className="chapter">
            <h1>EXPERIENCE</h1>
            <p>
                Below you will find some information about my previous
                experience.
            </p>
            <br />
            <h1>PROFESSIONAL EXPERIENCES</h1>
            <hr />
            <h2>GAMEPLAY PROGRAMMER AT AVALANCHE STUDIOS GROUP</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">2023-08-09 / current</p>
            </div>
            <div className="iconTextRow">
                <InfoIcon color="primary"/>
                <a
                    className="iconText"
                    href="https://avalanchestudios.com/"
                    target="_blank" rel="noreferrer"
                >
                    Read more about Avalanche Studios Group here
                </a>
            </div>
            <p>
                Avalanche Studios Group consists of more than 500 passionate people
                spread accross Liverpool, Malmö and Stockholm
                where I am based. Avalanche games are made using the proprietary
                Apex Engine and are typically shipped to a number of platforms.
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>
            <ul>
                <li>
                    <p>
                    Primarily C++ based programming for implementing gameplay features
                    and bug fixes.
                    </p>
                </li>
                <li><p>Working with multiple platforms including Playstation 4, Playstation 5, Xbox One and Xbox Series X/S.</p></li>
                <li><p>Version handling using Perforce.</p></li>
            </ul>
            <hr />
            <h2>MASTER THESIS AT GOODBYE KANSAS STUDIOS</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">2023-01 / 2023-06</p>
            </div>
            <div className="iconTextRow">
                <InfoIcon color="primary"/>
                <a
                    className="iconText"
                    href="https://goodbyekansasstudios.com/"
                    target="_blank" rel="noreferrer"
                >
                    Read more about Goodbye Kansas Studios here
                </a>
            </div>
            <p>
                Goodbye Kansas is a VFX studio in Stockholm that works with film,
                TV-series, games, gametrailers and commercials. My thesis work was focused
                around procedurally generating pores and wrinkles for facial
                3D models. This was implemented through a custom written Houdini
                SOP with the goal of improving the level of detail for meshes
                obtained through 3D-scanning. The thesis report
                (along with some neat rendered results) can be
                found <a href={thesisLink} target="_blank" rel="noreferrer">here</a>.
            </p>
            <p>
                The project has
                since seen continued development by the Goodbye Kansas R&amp;D team and was presented
                as a 20 minute talk titled:
                "An Artist-friendly Method for Procedural Skin Generation and Visualization in Houdini"
                at <a href={siggraphDenverTalk} target="_blank" rel="noreferrer">
                    Siggraph 2024 in Denver, US.
                </a>
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>
            <ul>
                <li><p>Researching procedural methods for texture generation.</p></li>
                <li><p>Creating interactive operators for Houdini using C++.</p></li>
                <li><p>Debugging of running processes with gdb.</p></li>
            </ul>
            <hr />
            <h2>MTEK</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">Summers of 2021 and 2022</p>
            </div>
            <div className="iconTextRow">
                <InfoIcon color="primary"/>
                <a
                    className="iconText"
                    href="https://mtek.se/"
                    target="_blank" rel="noreferrer"
                >
                    Read more about MTEK here
                </a>
            </div>
            <p>
                I came to MTEK as a summer intern during 2021 and
                when they reached out and asked if I wanted to return
                for 2022 I gladly agreed. I also did some remote work
                for MTEK during the beginning of the fall semester 2021.
                MTEK provides software for optimizing production in industry
                environments. Their software is used by <a href={koenigseggLink} target="_blank" rel="noreferrer">
                Koenigsegg</a>, <a href={swegonLink} target="_blank" rel="noreferrer">
                Swegon</a>, <a href={cakeLink} target="_blank" rel="noreferrer">
                Cake</a> and others.
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>

            <ul>
                <li><p>Machine learning in Python using PyTorch.</p></li>
                <li><p>Implementing pre-trained neural network models using C#.</p></li>
                <li><p>CI/CD in GitLab using Docker images.</p></li>
                <li><p>Unit testing.</p></li>
            </ul>
            <hr />
            <br />
            <h1>EXTRACURRICULAR EXPERIENCES</h1>
            <hr />
            <h2>FINALIST IN THE TINGENT COMPETITIVE CS2 TOURNAMENT</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">2024-02</p>
            </div>
            <p>
                In 2024, I got the chance to represent Avalanche in a CS2 tournament hosted by
                Tingent. During the tournament, we got to compete against other gaming companies like Embark,
                Mojang and Starbreeze. In the end we, managed to make it to the finals, where sadly our journey ended in second place.
            </p>
            <br />
            <div className="showcaseRow">
                <div className="showcaseItem--single">
                    <img src={team_photo}
                    alt="zoomed_img"
                    className="showcaseImage--single"
                    />
                </div>
            </div>
            <br />
            <hr />
            <h2>CHIEF OF ALUMNI AND INDUSTRY CONTACTS</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">2021-07 / 2022-06</p>
            </div>
            <div className="iconTextRow">
                <InfoIcon color="primary"/>
                <a
                    className="iconText"
                    href="https://medieteknik.nu/"
                    target="_blank" rel="noreferrer"
                >
                    Read more about MT-sektionen here
                </a>
            </div>
            <p>
                During my fourth year at university I was part of the student
                association Medietekniksektionen who manage most events
                and other things directly related to our specific degree. 
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>
            <ul>
                <li><p>Multinational communication with people from different industry sectors.</p></li>
                <li><p>Planning big events and attending regular meetings.</p></li>
                <li><p>Learning about different industry sectors from alumni.</p></li>
            </ul>
            <hr />
            <h2>PEER STUDENT AT MEDIETEKNIK</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">2020-08 and 2021-08</p>
            </div>
            <div className="iconTextRow">
                <InfoIcon color="primary"/>
                <a
                    className="iconText"
                    href="https://www.student.liu.se/studentstod/studenthalsan/fadder?l=sv"
                    target="_blank" rel="noreferrer"
                >
                    Read more about the work as a peer student here
                </a>
            </div>
            <p>
                All student receptions at Linköping University are carefully planned
                to make sure that the new students feel included and welcome at the
                start of their education. A peer student is an older student who has
                volunteered to help guide the younger students through the first
                weeks of university.
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>
            <ul>
                <li><p>Help solving logistical issues.</p></li>
                <li><p>Encourage and stimulate social interactions among the new students.</p></li>
                <li><p>Offering guidance and answering questions about life at university in general.</p></li>
            </ul>
            <hr />
        </div>
    )
}

export default Experience;
