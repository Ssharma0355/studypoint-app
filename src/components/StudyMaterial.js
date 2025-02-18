import React from "react";
import { Link } from "react-router-dom";

function StudyMaterial() {
  return (
    <div className="study-material">
      <h2>Study Material</h2>
      <ul>
        <li>Subject 1: [Link to Material]</li>
        <li>Subject 2: [Link to Material]</li>
        <li>Subject 3: [Link to Material]</li>
        <li>
          <Link to="/presidents">Presidents of India</Link>
        </li>{" "}
        {/* New Link */}
      </ul>
    </div>
  );
}

export default StudyMaterial;
