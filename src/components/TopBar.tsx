import { useMediaQuery } from 'react-responsive';
import TopBarDesktop from './TopBarDesktop';
import TopBarPhone from './TopBarPhone';

const TopBar: React.FC<{}> = () => {
    const isDesktopOrLaptop: boolean = useMediaQuery({
        query: '(min-width: 720px)'
    })
    return isDesktopOrLaptop ? <TopBarDesktop/> : <TopBarPhone/>;
}

export default TopBar;