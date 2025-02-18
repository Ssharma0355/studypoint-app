import React from "react";
import "./HomePage.css"; // Ensure you create and link the CSS file

function HomePage() {
  return (
    <div className="home main-page">
      <div className="hero-section">
        <h1>Welcome to the Indian Govt Exam Study App</h1>
        <p>
          Your one-stop solution for all exam-related study material, mock
          tests, and more!
        </p>
        <div className="cta">
          <button className="start-btn">Get Started</button>
        </div>
      </div>

      <div className="features">
        <h2>What We Offer</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Study Materials</h3>
            <p>
              Access a wide range of study materials to help you prepare for
              government exams.
            </p>
          </div>
          <div className="card">
            <h3>Mock Tests</h3>
            <p>
              Take mock tests to simulate the actual exam experience and improve
              your performance.
            </p>
          </div>
          <div className="card">
            <h3>Exam Updates</h3>
            <p>
              Stay updated with the latest news, exam dates, and notifications
              for government exams.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>Start your preparation today and achieve your dreams!</p>
      </div>
    </div>
  );
}

export default HomePage;
