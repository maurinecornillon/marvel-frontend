import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components
// import Header from "./components/Header";

//Import des icones
// import { library } from "@fortawesome/fontawesome-svg-core";

function App() {
  return (
    <Router>
      {/* <Header /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Offer />} />
        <Route path="/" element={<SignUp handleToken={handleToken} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
