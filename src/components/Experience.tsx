import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import InfoIcon from '@mui/icons-material/Info';
const Experience: React.FC<{}> = () => {
    // Avalanche
    const theAnglerLink: string =
        "https://cotwtheangler.com/"
    const theAnglerTrailerLink: string =
        "https://cdn.akamai.steamstatic.com/steam/apps/257030005/movie480_vp9.webm?t=1718701253"

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
            <p>
                As a gameplay programmer at Avalanche Studios Group, I am part of
                the Expansive Worlds team working on <a href={theAnglerLink} target="_blank" rel="noreferrer">
                        Call of the Wild: The Angler
                </a>.
            </p>
            <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={theAnglerTrailerLink} title="Table Raid - a turn based game in VR"></iframe>
                </div>
            </div>
            <h3>
                Some of my duties and learning experiences:
            </h3>
            <ul>
                <li>
                    <p>
                    Primarily C++ based programming for implementing gameplay features
                    and bug fixing inside The Angler.
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
                obtained through 3D-scanning. The report for the thesis
                (along with some neat rendered results) can be
                found <a href={thesisLink} target="_blank" rel="noreferrer">here</a>.
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
            <h2>TEKNIKSPRÅNGET</h2>
            <div className="iconTextRow">
                <AccessTimeFilledIcon color="primary"/>
                <p className="iconText">2018-02 / 2018-06</p>
            </div>
            <div className="iconTextRow">
                <InfoIcon color="primary"/>
                <a
                    className="iconText"
                    href="https://teknikspranget.se/om-teknikspranget/"
                    target="_blank" rel="noreferrer"
                >
                    Read more about Tekniksprånget here
                </a>
            </div>
            <p>
                Tekniksprånget is a national project where different
                employers in Sweden offer a four month internship for youth
                with the goal of making more young people pursue higher
                education. I did my internship at Sandvikenhus AB, which
                is a public housing company.
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>
            <ul>
                <li><p>Look into the environmental effects of solar panels.</p></li>
                <li><p>Investigate effects of individual billing for water and electricity.</p></li>
                <li><p>Learning about teamwork in an office environment.</p></li>
            </ul>
            <hr />
            <br />
            <h1>EXTRACURRICULAR EXPERIENCES</h1>
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
                volunteered to help guide the newer students through the beginning 
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
