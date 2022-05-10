import React, { useRef } from "react";
import TopBar from './components/TopBar';
import Content from './components/Content';
import {BrowserRouter as Router} from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E06C75',        // Bright accent color
      contrastText: "#282C34" // Dark button text
    },
    secondary: {
      main: '#282C34',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
        <TopBar/>
        <Content/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
