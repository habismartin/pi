import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Pi from "./pages/phrases";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pi-wallet" element={<Pi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
