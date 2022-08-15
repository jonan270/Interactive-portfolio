import report from "../reports/bottlecaps.pdf"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import caps_me from "../images/caps_me.png"
import original_me from "../images/original_me.jpg"

import caps_landscape from "../images/caps_landscape.png"
import original_landscape from "../images/original_landscape.jpg"

import caps_closeup from "../images/caps_closeup.png"

const BottleCaps: React.FC<{}> = () => {
    return(
        <div>
            <h1>IMAGE REPRODUCTION USING BOTTLECAPS</h1>
            <p>
                Mosaics are often made using beautiful square tiles.
                But why not make mosaics using dirty and dented
                semi-round bottle caps instead? Also, why not automate
                the process? This is what I set out to do with this project.
            </p>
            <div className="showcaseRow">
                <div className="showcaseItem--single">
                    <img src={caps_closeup}
                    alt="Zoomed in image from a reproduction"
                    className="showcaseImage--single"
                    />
                    <h3>
                        Zoomed in part of a reproduced image.
                    </h3>
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={original_me}
                    alt="Original image of me"
                    className="showcaseImage"
                    />
                </div>
                <div className="showcaseIcon">
                <ArrowForwardRoundedIcon color="primary" fontSize="large"/>
                </div>
                <div className="showcaseItem">
                    <img src={caps_me}
                    alt="Reproduced image of me"
                    className="showcaseImage"
                    />
                </div>
            </div>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={original_landscape}
                    alt="Original image of landscape"
                    className="showcaseImage"
                    />
                </div>
                <div className="showcaseIcon">
                <ArrowForwardRoundedIcon color="primary" fontSize="large"/>
                </div>
                <div className="showcaseItem">
                    <img src={caps_landscape}
                    alt="Reproduced image of landscape"
                    className="showcaseImage"
                    />
                </div>
            </div>
            <h3>
                A couple of example reproductions that the algorithm produced.
                Zoom in!
            </h3>
            <p>
                The project is implemented using MATLAB and reduces
                the total number of different caps used to a pre-selected amount
                using a couple of different methods. It also provides an objective
                reproduction quality measurement in the form of a number.
            </p>
            <p>
                Credits for some of the bottle caps used by the software:
            </p>
            <ul>
                <li>
                    <a
                    href="https://www.flickr.com/photos/ludvigvonconrad/4503472101/"
                    target="_blank" rel="noreferrer">
                        Image by Eric Conrad
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.flickr.com/photos/erix/51017006285/"
                    target="_blank" rel="noreferrer">
                        Image by Erich Ferdinand
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.flickr.com/photos/57412095@N05/51443664437/"
                    target="_blank" rel="noreferrer">
                        Image by A Yee
                    </a>
                </li>
            </ul>
            <a href={report} target="_blank" rel="noreferrer">
                Click here to read the full report
            </a>
        </div>
    )
}

export default BottleCaps;