import React from "react";
import "../Styles/Navbar.css";

function Navbar({ search, setSearch, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <h2 className="logo">📝 Sticky Notes</h2>

      <input
        type="text"
        className="search"
        placeholder="Search Notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-buttons">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Theme ☀️" : "Theme 🌙"}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;