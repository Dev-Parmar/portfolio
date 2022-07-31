import { Container, Box, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Header />
      </Box>
      <Box id='skills' sx={{ backgroundColor: '#9c27b0' }} >
        <Skills />
      </Box>
      <Box id='projects'>
        <Projects />
      </Box>
      <Box id='contact'>
        <Contact />
      </Box>


    </div>
  );
}

export default App;
