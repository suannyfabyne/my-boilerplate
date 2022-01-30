import React from 'react';
import About from 'pages/About';
import Home from 'pages/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './style';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
