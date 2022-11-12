import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Cars from "./pages/Cars";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
