import React from "react";
import presidentData from "../data/presidents.json"; // Import data
import "./Presidents.css";


function Presidents() {
  return (
    <div className="presidents-page">
      <h2>Presidents of India</h2>
      <div className="card-grid">
        {presidentData.map((president, index) => (
          <div className="card" key={index}>
            <h3>{president.name}</h3>
            <p>
              <strong>Term:</strong> {president.term}
            </p>
            <p>
              <strong>Details:</strong> {president.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Presidents;
