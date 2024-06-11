import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Pi from "./pages/phrases";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pi-wallet" element={<Pi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
