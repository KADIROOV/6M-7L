// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const countries = [
  { id: 1, name: "Italy", category: "travel", type: "historical" },
  { id: 2, name: "Switzerland", category: "travel", type: "urban" },
  { id: 3, name: "Brazil", category: "adventure", type: "urban" },
  { id: 4, name: "Egypt", category: "travel", type: "historical" },
  { id: 5, name: "USA", category: "travel", type: "urban" },
];

const CountryCard = ({ country }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <h3>{country.name}</h3>
    <p>Category: {country.category}</p>
    <p>Type: {country.type}</p>
  </div>
);

const AllCountries = () => (
  <div>
    <h2>All Countries</h2>
    {countries.map((country) => (
      <CountryCard key={country.id} country={country} />
    ))}
  </div>
);

const CategoryFilter = () => {
  const filtered = countries.filter((c) => c.category === "travel");

  return (
    <div>
      <h2>Category: Travel</h2>
      {filtered.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

const TypeFilter = () => {
  const filtered = countries.filter((c) => c.type === "urban");

  return (
    <div>
      <h2>Type: Urban</h2>
      {filtered.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>🌍 Travel Explorer</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            <button>All</button>
          </Link>
          <Link to="/category" style={{ marginRight: "10px" }}>
            <button>Travel Category</button>
          </Link>
          <Link to="/type">
            <button>Urban Type</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/category" element={<CategoryFilter />} />
          <Route path="/type" element={<TypeFilter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
