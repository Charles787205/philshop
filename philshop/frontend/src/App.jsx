import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./css/style.css";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import { redirect } from "react-router-dom";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashBoard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
