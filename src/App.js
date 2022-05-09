import React from "react";
import Basic from "./pages/basic";
import Login from "./pages/login";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Basic />} />
          <Route path="login/*" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
