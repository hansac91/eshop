import React from 'react';
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>}></Route>
          <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
          <Route path="/home" element={<Home />}></Route> 
          <Route path="/login" element={<Login />}></Route> 
        </Routes>
      </Router>
   
    
    </div>
  );
}

export default App;
