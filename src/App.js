import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact";
import ManagementTeam from "./pages/ManagementTeam.js";
import Team from "./pages/Team.js";
import NotFound from "./pages/NotFoundPage.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/tarihcemiz" element={<History />} />
        <Route path="/yonetim-kurulu" element={<ManagementTeam />} />
        <Route path="/projelerimiz" element={<Projects />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/ekiplerimiz" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
