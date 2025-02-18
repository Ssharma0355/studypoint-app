import React from "react";
import { Link } from "react-router-dom";
import "./StudyMaterial.css"; // Link to the CSS file for styling
import pdf from "../assets/ppf.pdf"; // Import the PDF file correctly

function StudyMaterial() {
  const downloadPdf = (filePath, fileName) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="study-material main-page">
      <div className="material-links">
        <ul>
          <li>
            <Link className="material-link" to="/primeminister">
              Prime Minister of India
            </Link>
            <button onClick={() => downloadPdf(pdf, "Prime_Minister.pdf")}>
              Download PDF
            </button>
          </li>
          <li>
            <Link className="material-link" to="/presidents">
              Presidents of India
            </Link>
            <button
              onClick={() =>
                downloadPdf("/pdfs/presidents.pdf", "Presidents.pdf")
              }
            >
              Download PDF
            </button>
          </li>
          <li>
            <Link className="material-link" to="/emperors">
              Emperors of India
            </Link>
            <button
              onClick={() => downloadPdf("/pdfs/emperors.pdf", "Emperors.pdf")}
            >
              Download PDF
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudyMaterial;
