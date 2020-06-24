import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/portfolio' exact component={Portfolio}></Route>
        <Route path='/blog' exact component={Blog}></Route>
      </Router>
    </div>
  );
}

export default App;
