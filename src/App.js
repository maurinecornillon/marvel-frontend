import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// components
import Header from "./components/Header";
import Menu from "./components/Menu";

import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Cards from "./pages/Cards";

//Import des icones
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
