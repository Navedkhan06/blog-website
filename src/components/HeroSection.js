import React, { useState } from 'react';
import "./HeroSection.css";

export default function HeroSection() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search functionality here
    console.log("Searching for:", searchText);
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Blog</h1>
          <p className="hero-tagline">
            Discover amazing stories, tips, and reviews
          </p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
