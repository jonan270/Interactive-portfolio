import { useMediaQuery } from 'react-responsive';
import TopBarDesktop from './TopBarDesktop';
import TopBarPhone from './TopBarPhone';

const TopBar: React.FC<{}> = () => {
    const isDesktop: boolean = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    const links: Links = {
        gitLink: "https://github.com/jonan270",
        linkedinLink: "https://www.linkedin.com/in/jonathan-andersson-43488a209"
    }

    // Render different top bar depending on screen width
    return isDesktop ? <TopBarDesktop links={links}/> : <TopBarPhone links={links}/>;
}

export default TopBar;