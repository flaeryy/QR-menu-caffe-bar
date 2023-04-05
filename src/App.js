import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useParams, Link, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/drinks" />} />
          <Route path="/:category" element={<Home />} />
          <Route path="/:category/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
