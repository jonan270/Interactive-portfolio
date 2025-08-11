import ConstructionIcon from '@mui/icons-material/Construction';

const TheAngler : React.FC<{}> = () => {
    const theAnglerLink: string =
        "https://cotwtheangler.com/";

    const theAnglerTrailerLink: string =
        "https://www.youtube.com/embed/19XZvgZrm08";

    const theAnglerNetLink: string =
        "https://youtu.be/k10-Gp99C5E?si=ShPw5I94dwfq8hp0&t=46";

    return(
        <div>
            <h1>CALL OF THE WILD: THE ANGLER</h1>
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
                When I first joined Avalanche, I got to join Expansive Worlds team working on their latest outdoor gaming experience
                named <a href={theAnglerLink} target="_blank" rel="noreferrer">
                        Call of the Wild: The Angler
                </a>. I stayed on this team for around 13 months and helped deliver several live
                service updates to the game. The game was released on PC, PS5, PS4, Xbox Series X/S and the Xbox One consoles.
            </p>
            <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={theAnglerTrailerLink} title="Contraband - Official Reveal Trailer 4K | E3 2021"></iframe>
                </div>
            </div>
            <p>
                Some of the features I developed includes:
            </p>
            <ul>
                <li><p>An overhauled catch animation system, featuring a <a href={theAnglerNetLink} target="_blank" rel="noreferrer">dynamic landing net</a>.</p></li>
                <li><p>Fast travel support for vehicles, so that you could for example fast travel back to the boat you left in your previous session.</p></li>
                <li><p>An interactive trophy photo mode that allowed you to take pictures of your catches.</p></li>
                <li><p>Vehicle storage access that could be accessed by interacting with the trunk of the vehicle.</p></li>
            </ul>

        </div>
    )
}

export default TheAngler;
