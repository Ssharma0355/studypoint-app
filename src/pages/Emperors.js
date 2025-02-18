import React from 'react'
import EmperorsData from "../data/emperors.json"
import "./Presidents.css";

function Emperors() {
  return (
    <div className="presidents-page main-page">
      <h2>Emperors of India</h2>
      <div className="card-grid">
        {EmperorsData.map((emperor, index) => (
          <div className="card" key={index}>
            <h3>{emperor.name}</h3>
            <p>
              <strong>Dynasty:</strong> {emperor.dynasty}
            </p>
            <p>
              <strong>Reign:</strong> {emperor.reign}
            </p>
            <p>
              <strong>Details:</strong> {emperor.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emperors
