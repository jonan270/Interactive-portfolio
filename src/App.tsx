import TopBar from "./components/TopBar";
import Content from "./components/Content";
import {HashRouter as Router} from "react-router-dom";
import React, { useState } from "react"
import GlobalIllumination from "./projects/GlobalIllumination";

import Overlay from "./components/Overlay";
import "./styles/overlay.scss";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#E06C75",        // Bright accent color
      contrastText: "#282C34" // Dark button text
    },
    secondary: {
      main: "#282C34",
    }
  },
});

function App() {
  // State to handle wheter overlay should be displayed or not
  const [showOverlay, setOverlay] = useState(false);

  // Trigger the overlay with the provided child component
  const triggerOverlay = (component: React.FC<{}>) => {
    console.log("Image clicked");
    setOverlayContent({
        showOverlay: showOverlay,
        setOverlay: setOverlay,
        childComponent: component,
        triggerOverlay: triggerOverlay
    });
    setOverlay(prev => !prev);
  }

  // State to handle the childcomponent of overlay
  const [overlayContent, setOverlayContent] = useState({
      showOverlay: showOverlay,
      setOverlay: setOverlay,
      childComponent: GlobalIllumination,
      triggerOverlay: triggerOverlay
  });
  overlayContent.showOverlay = showOverlay;
  overlayContent.setOverlay = setOverlay;
  overlayContent.triggerOverlay = triggerOverlay;

  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Overlay overlay={overlayContent}/>
          <TopBar/>
          <Content overlay={overlayContent}/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
