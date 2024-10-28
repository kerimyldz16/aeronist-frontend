import React from "react";

function Header() {
  return (
    <header
      className="bg-cover bg-center h-96 text-center flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-placeholder.jpg')" }}
    >
      <h2 className="text-4xl font-bold text-white">
        Explore the Skies with Aeronist Aerospace
      </h2>
    </header>
  );
}

export default Header;
