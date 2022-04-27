import React from 'react';
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
  const onButtonClick = () => {
    console.log("Click");
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div id = 'topBar'>
          <div id='titleText'>
              <h1>Jonathan Andersson</h1>
              <p>4th year M.Sc Student in Media Technology</p>
              <Button className="button" variant="contained" onClick={() => onButtonClick}>About me</Button>
              <Button className="button" variant="outlined" onClick={() => onButtonClick}>Project showroom</Button>
              <Button className="button" variant="outlined" onClick={() => onButtonClick}>Experience</Button>
          </div>
        </div>
        <Content/>
      </div>
    </ThemeProvider>
  );
}

export default App;
