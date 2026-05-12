import ConstructionIcon from '@mui/icons-material/Construction';

const TheHunter : React.FC<{}> = () => {
    const sourceLink: string = 
        "https://www.youtube.com/embed/q7MQrILNQc4";

    return(
        <div>
            <h1>THE HUNTER: CALL OF THE WILD</h1>
            <div className="iconTextRow">
                <ConstructionIcon color="primary"/>
                <a
                className="iconTextOverlay"
                href="https://avalanchestudios.com/"
                target="_blank" rel="noreferrer"
                >
                    Avalanche Studios Group
                </a>
            </div>
            <p>
                Since the end of 2025, I have been working on theHunter: Call of the Wild
                which is a self published AA title that has been a live game since 2017.
            </p>
           <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={sourceLink} title="theHunter: Call of the Wild | Announcement Trailer"></iframe>
                </div>
            </div>
            <p>
                A lot of my work on this project has been focused around updating legacy code and reducing tech debt.
                Another important part of this is re-implementing systems in a way that makes them easier to work with for designers
                and artists.
            </p>
        </div>
    )
}

export default TheHunter;
