import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function handleShorten(e) {
    e.preventDefault();

    if (longUrl.trim() === "") {
      alert("Please enter a long URL");
      return;
    }

    const code =
      shortCode.trim() !== ""
        ? shortCode.trim()
        : Math.random().toString(36).substring(2, 8);

    setShortUrl(`https://cpt405.co/${code}`);
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Link Shrinker</h1>

        <form onSubmit={handleShorten}>
          <label>Long URL:</label>
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter long URL"
          />

          <label>Enter short code:</label>
          <input
            type="text"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
            placeholder="example: react101"
          />

          <button type="submit">Shorten</button>
        </form>

        <h3>Short URL</h3>
        <div className="result">{shortUrl}</div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <div className="card">
        <h1>About Us</h1>
        <p>
          Link Shrinker is a simple React app to shorten URLs with custom codes.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}