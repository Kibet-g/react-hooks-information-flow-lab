// src/components/Header.js
import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"} {/* Toggle between modes */}
      </button>
    </header>
  );
}

export default Header;
