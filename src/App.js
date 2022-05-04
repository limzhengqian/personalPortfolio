import logo from './logo.svg';
import Header from './header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Module from './3Dmodel';
import Home from './Home';
import Project from './Project';
import Post from './Post';
import Footer from './footer';
import SingleProject from './singleProject';
function App() {
  return (
    <div>
      <Header />
      <Module />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/posts' element={<Post/>} />
        <Route path='/:name' element={<SingleProject/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
