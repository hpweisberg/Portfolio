import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
// import './styles/App.css'
import Nav from './Components/Nav/Nav';

import './App.css';

//! Components
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
    </>
  );
}

export default App;
