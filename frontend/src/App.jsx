// eslint-disable-next-line no-unused-vars
import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaulGPT from './pages/PaulGPT';
import './index.css';
import HireUs from './pages/HireUs';

function App() {
  return (
    <BrowserRouter>
      <div
        className='flex flex-col w-full h-full bg-inherit bg-space'
        // style={{ backgroundImage: `url(${landingPage})` }}
      >
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/paulGPT' element={<PaulGPT />} />
          <Route path='/developers' element={<HireUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
