import logo from './logo.svg';
import Header from './header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Module from './3Dmodel';
function App() {
  return (
    <div>
      <Header />
      <Module />
    </div>
  );
}

export default App;
