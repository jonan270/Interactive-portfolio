import React, { Component, useRef, useEffect } from "react";
import { Button } from '@mui/material';
import TopBar from './components/TopBar';
import Content from './components/Content';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Bright accent color
      main: '#E06C75',
      contrastText: "#282C34" // Dark button text
    },
    secondary: {
      main: '#282C34',
    }
  },
});

function App() {
  const testRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () => {
    if(testRef != null) {
      console.log(testRef.current);
      testRef.current!.scrollIntoView();
    }
  }

  const onButtonClick = () => {
    console.log("Click");
    executeScroll();
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopBar/>
        <Content/>
      </div>
    </ThemeProvider>
  );
}

export default App;
