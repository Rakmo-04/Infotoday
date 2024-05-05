// App.js
import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News  key="general" pageSize={8} country={"in"} category={"general"} />} />
            <Route path="/Buisness" element={<News key="buisness" pageSize={8} country={"in"} category={"business"} />} />
            <Route path="/Sports" element={<News  key="sports" pageSize={8} country={"in"} category={"sports"} />} />
            <Route path="/Science" element={<News key="science" pageSize={8} country={"in"} category={"science"} />} />
            <Route path="/Technology" element={<News key="technology" pageSize={8} country={"in"} category={"technology"} />} />
            <Route path="/Entertainment" element={<News key="entertainment" pageSize={8} country={"in"} category={"entertainment"} />} />
            <Route path="/Health" element={<News key="health" pageSize={8} country={"in"} category={"health"} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
