import { Route, Routes } from 'react-router-dom'
// import './styles/App.css'
import Nav from './Components/Nav/Nav';

import './App.css';

//! Components
import Landing from './Pages/Landing/Landing';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Connect from './Pages/Connect/Connect';
// import projects from './data/projects';

function App() {
  return (
    <>
        <Nav className='navBar' />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Connect' element={<Connect />} />
        </Routes>
      </>
  );
}

export default App;
