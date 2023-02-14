
import './App.css';
import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">

      <h1>React Route</h1>

      <BrowserRouter>
      {/* 2 - Links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
