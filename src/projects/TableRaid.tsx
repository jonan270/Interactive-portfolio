import report from "../reports/tableraid.pdf"
const TableRaid: React.FC<{}> = () => {
    const sourceLink: string = 
        "https://drive.google.com/file/d/19eAZHAqzz1t3bfOx_TBcUYAMynzqjgE5/preview";

    return(
        <div>
            <h1>Table Raid - a turn based game in VR</h1>
            <p>
                After a few years of engineering studies, it was time for the
                Bachelor's project. A large project which would consume most study
                time for me and my group of five.
            </p>
            <div className="iframeWrapper">
                <div className="iframeContainer">
                    <iframe src={sourceLink} title="Table Raid - a turn based game in VR"></iframe>
                </div>
            </div>
            <p>
                The project combined a number of techniques that were new and exciting to us:
            </p>
            <ul>
                <li><p>Head mounted virtual reality in Unity using SteamVR.</p></li>
                <li><p>Online multiplayer using Photon.</p></li>
                <li><p>Gesture tracking.</p></li>
                <li><p>Turn based combat on an environment based map.</p></li>
            </ul>
            <a href={report}>Click here to read the full report</a>
        </div>
    )
}

export default TableRaid;