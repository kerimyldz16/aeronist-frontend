import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <Link to="/" className="notfound-button">
        Anasayfaya Dön
      </Link>
    </div>
  );
}

export default NotFound;
