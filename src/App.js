import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Box id='skills' sx={{ backgroundColor: '#e0e0e0' }} >
        <Skills />
      </Box>
      <Box id='projects' sx={{ backgroundColor: '#9c27b0' }}>
        <Projects />
      </Box>
      <Box id='contact' sx={{ backgroundColor: '#e0e0e0' }}>
        <Contact />
      </Box>
      <Footer />


    </div >
  );
}

export default App;
