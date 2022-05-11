import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// components
import Header from "./components/Header";
import Menu from "./components/Menu";

import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
