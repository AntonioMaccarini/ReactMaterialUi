import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Route, Switch, } from 'react-router-dom';
import ChosenColor from './ChosenColor';
import Car2 from './Car2';
import Sidebar from './components/NewComponents/Sidebar';
import Rightbar from './components/NewComponents/Rightbar';
import Feed from './components/NewComponents/Feed';
import { Box, Container } from '@mui/system';
import { Stack } from '@mui/material';
import Navbar from './components/NewComponents/Navbar';

function App() {
  
  return (

    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
