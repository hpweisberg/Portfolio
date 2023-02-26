import { Route, Routes } from 'react-router-dom'
// import './styles/App.css'
import Nav from './Components/Nav/Nav';

import './App.css';

//! Components
import Landing from './Pages/Landing/Landing';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Connect from './Pages/Connect/Connect';
import Stack from './Components/Stack/Stack';
// import projects from './data/projects';

function App() {
  return (
    <div>
        <Nav className='navBar' />
        <Routes>
          <Route path='/' element={<Landing />} title='landing' />
          <Route path='/About' element={<About Stack={Stack}/>} title='about' />
          <Route path='/Projects' element={<Projects />} title='projects'/>
          <Route path='/Connect' element={<Connect />} title='connect'/>
        </Routes>
      </div>
  );
}

export default App;
