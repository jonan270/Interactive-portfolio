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
                mobs in the game using the A* algorithm which is a common method
                for optimisation.
            </p>
            <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={sourceLink} title="Table Raid - a turn based game in VR"></iframe>
                </div>
            </div>
        </div>
    )
}

export default BlubAttack;