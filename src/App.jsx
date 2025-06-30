import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import NotFound from './Components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
