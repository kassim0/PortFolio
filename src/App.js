import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route exact path="/about/:projectId" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
