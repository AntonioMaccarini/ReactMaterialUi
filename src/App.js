import Sidebar from './components/NewComponents/Sidebar';
import Rightbar from './components/NewComponents/Rightbar';
import Feed from './components/NewComponents/Feed';
import { Box } from '@mui/system';
import { createTheme, Stack } from '@mui/material';
import Navbar from './components/NewComponents/Navbar';
import Add from './components/NewComponents/Add';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
      mode: mode,
    }
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"black"} color={"white"}>
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>    
    </ThemeProvider>
  );
}

export default App;
