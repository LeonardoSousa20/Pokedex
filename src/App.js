import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentPage from './Components/CurrentPage';
import Header from './Components/Header';

import Home from './Components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon:offset" element={<CurrentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
