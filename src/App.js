import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// components
import Header from "./components/Header";
import Menu from "./components/Menu";

// pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Cards from "./pages/Cards";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

//Import des icones
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faAngleRight, faAngleLeft);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token) {
      console.log("Création d'un cookie");
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      console.log("Suppression d'un cookie");
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header handleToken={handleToken} userToken={userToken} />
      <Menu />

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<Cards />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route path="/login" element={<LogIn handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
