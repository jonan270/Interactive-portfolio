import ConstructionIcon from '@mui/icons-material/Construction';

const Contraband : React.FC<{}> = () => {
    const sourceLink: string = 
        "https://www.youtube.com/embed/t5qlGpqHggw";

    return(
        <div>
            <h1>CONTRABAND - AN UNRELEASED XBOX TITLE</h1>
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
                Due to the nature of unfinished externally published games like this, I unfortunately cannot say very much about this project because of my NDA. What I can say is that it was meant to be a AAA project described by XBOX as: "A co-op smuggler's paradise set in the fictional world of 1970s Bayan."
            </p>
           <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={sourceLink} title="Contraband - Official Reveal Trailer 4K | E3 2021"></iframe>
                </div>
            </div>
            <p>
                I worked as part of the "player ingredients team" with things focused around the 3Cs (Character, Camera, Controls)
                as well as other things related to the player character. Some of the more project agnostic things included things like
                camera code, weapons, grenades and player abilities. A lot of the work required close collaboration with game designers and animators.
            </p>
        </div>
    )
}

export default Contraband;
