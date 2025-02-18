import React from 'react'
import primeminister from "../data/primeminister";
import "./Presidents.css";
function PrimeMinisters() {
  return (
    <div className="presidents-page main-page">
      <h2>Prime Ministers of India</h2>
      <div className="card-grid">
        {primeminister.map((primeminister, index) => (
          <div className="card" key={index}>
            <h3>{primeminister.name}</h3>
            <p>
              <strong>Term:</strong>
              {primeminister.term}
            </p>
            <p>
              <strong>Details:</strong>
              {primeminister.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrimeMinisters
