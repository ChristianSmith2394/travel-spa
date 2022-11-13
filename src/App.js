import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Map from "./pages/Map";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
