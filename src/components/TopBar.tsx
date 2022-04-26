import profile from "../images/profile.jpg"
//<img src={profile} id='profileImg'/>
const TopBar: React.FC<{}> = () => {
    return(
        <div id = 'topBar'>
            <div id='titleText'>
                <h1>Jonathan Andersson</h1>
                <p>4th year M.Sc Student in Media Technology</p>
            </div>
        </div>
    )
}

export default TopBar;