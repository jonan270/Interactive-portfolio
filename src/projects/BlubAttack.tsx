import report from "../reports/blub_attack.pdf"

const BlubAttack: React.FC<{}> = () => {
    const sourceLink: string = 
        "https://youtube.com/embed/34j1xTd0obg";

    return(
        <div>
            <h1>BLUB ATTACK - A TOWER DEFENSE GAME WITH AI PERSONALITIES</h1>
            <p>
                Tower defense games have been around for a long time. Me and my
                friend Tilda decided to combine two courses to not only make a
                fun game, but also try to represent different personalities for
                mobs in the game. This was achieved using the A* algorithm, which
                is a common method for optimization but is also commonly used for
                AI in games.
            </p>
            <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={sourceLink} title="Table Raid - a turn based game in VR"></iframe>
                </div>
            </div>
            <a href={report} target="_blank" rel="noreferrer">
                Click here to read the full report
            </a>
        </div>
    )
}

export default BlubAttack;
