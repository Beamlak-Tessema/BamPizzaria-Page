/*
//rafce 
import { useState} from "react";
import React from 'react';
import Message from './Message';
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';


function App() {
    return (
      <div className="App">
        
       // <Router> 
         // <Message/>
          <p>Hello world!</p>
          <Navbar />
         // <Switch>
          //  <Route path="/" exact component= {Home} />
         // </Switch>
         // </Router>
        
    );
}

export default App;

import React from 'react';
import Message from './Message';
import Navbar from './component/Navbar'; // Ensure the path is correct
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";

function App() {
    return (
      //<div className="App">
        <Router> 
          <Message/>
          
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
          </Routes>
          <p>Hello customers!</p>
        </Router>
     // </div>
    );
}

export default App;



*/
import React from 'react';
import Message from './Message';
import Navbar from './component/Navbar'; 
import Footer from './component/Footer'; 
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
///import Contact from './Pages/Contact';

function App() {
    return (
        <Router> 
          <Message />
          <Navbar />
          <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />


          </Routes>
          <p>Hello customers!</p>
          <Footer/>
        </Router>
    );
}

export default App;
