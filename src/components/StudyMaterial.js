import React from "react";
import { Link } from "react-router-dom";

function StudyMaterial() {
  return (
    <div className="study-material main-page">
      <h2>Study Material</h2>
      <ul>
        <li>Subject 1: [Link to Material]</li>
        <li>Subject 2: [Link to Material]</li>
        <li>
          <Link to="/primeminsiter">Prime Minister of India</Link>
        </li>
        <li>
          <Link to="/presidents">Presidents of India</Link>
        </li>{" "}
        {/* New Link */}
      </ul>
    </div>
  );
}

export default StudyMaterial;
