import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar.js';
import Advice from './components/Advice.js';
import Trivia from './components/Trivia.js';
import Jokes from './components/Jokes.js';
import Poetry from './components/Poetry.js';
import Pun from './components/Pun.js';
import Riddles from './components/Riddles.js';
import Home from './components/Home.js';
import "./App.css";

function App() {
  
  

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/pun" element={<Pun />} />
            <Route path="/riddles" element={<Riddles />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
