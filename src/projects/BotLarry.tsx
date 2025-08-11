import larry_larry from "../images/larry_larry.png"
import larry_citat from "../images/larry_citat.png"
import larry_karta from "../images/larry_karta.png"
import larry_crosshair from "../images/larry_crosshair.png"
import larry_s1mple from "../images/larry_s1mple.png"

const BotLarry: React.FC<{}> = () => {
    return(
        <div>
            <h1>BOT LARRY - A DISCORD BOT INSPIRED BY A FRIEND</h1>
            <p>
                Bot Larry is a hobby project inspired by a dear friend
                who is known for his creative, sometimes confusing
                sayings. Bot Larry exists in Discord and can repeat
                famous quotes said by the real Larry, come up with suggestions
                for what Counter Strike maps to play, randomly generate
                crosshairs for the game and more.
            </p>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={larry_citat}
                    alt="!citat_img"
                    className="showcaseImage"
                />
                </div>
            </div>
            <h3>
                !citat can be used in the chat to add new quotes for BOT Larry to use.
            </h3>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={larry_larry}
                    alt="command_img1"
                    className="showcaseImage"
                />
                </div>
            </div>
            <h3>
                !larry prompts BOT Larry to repeat one of the many famous quotes.
            </h3>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={larry_crosshair}
                    alt="!crosshair_img"
                    className="showcaseImage"
                />
                </div>
            </div>

            <h3>
                !crosshair generates a random crosshair to be used when playing Counter Strike.
            </h3>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={larry_s1mple}
                    alt="!crosshair_s1mple_img"
                    className="showcaseImage"
                />
                </div>
            </div>
            <h3>
                !crosshair followed by a pofessional players name prints the crosshair they use.
            </h3>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={larry_karta}
                    alt="!karta_img"
                    className="showcaseImage"
                />
                </div>
            </div>
            <h3>
                !karta suggests a map at random.
            </h3>
        </div>
    )
}

export default BotLarry;
