import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact";
import Team from "./pages/Team.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarihcemiz" element={<History />} />
        <Route path="/kadromuz" element={<Team />} />
        <Route path="/projelerimiz" element={<Projects />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
