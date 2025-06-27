import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
