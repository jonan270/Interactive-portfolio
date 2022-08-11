import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import InfoIcon from '@mui/icons-material/Info';
const Experience: React.FC<{}> = () => {
    return(
        <div id="experience" className="chapter">
            <h1>EXPERIENCE</h1>
            <p>
                Below you will find some information about my proffesional
                experience.
            </p>
            <br />
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
                Most of my time at MTEK has been spent as a summer intern,
                but I did some remote work at the beginning of my fourth
                year at university.
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>

            <ul>
                <li><p>Machine learning in Python using PyTorch.</p></li>
                <li><p>Implementing pre-trained neural network models using C#.</p></li>
                <li><p>CI/CD in GitLab using Docker.</p></li>
                <li><p>Unit testing.</p></li>
            </ul>
            <br />
            <h2>Tekniksprånget</h2>
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
                employers in Sweden offer 4 month internships to youth
                with the goal of making more young people pursue higher
                education. I did my internship at Sandvikenhus AB which
                is a public housing company.
            </p>
            <h3>
                Some of my duties and learning experiences:
            </h3>

            <ul>
                <li><p>Look into environmental effects of solar panels.</p></li>
                <li><p>Investigate effects of individual billing for water and electricity.</p></li>
                <li><p>Learning about teamwork in an office environment.</p></li>
            </ul>
        </div>
    )
}

export default Experience;