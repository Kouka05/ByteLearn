import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left: Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to <span className="highlight">ByteLearn</span></h1>
        <p>Start learning today with our wide range of courses.</p>
      </div>

      {/* Right: Themed Card with Slogan */}
      <div className="slogan-card">
        <div className="card-header">
          <span className="circle red"></span>
          <span className="circle yellow"></span>
          <span className="circle green"></span>
        </div>
        <div className="card-content">
          <p><span className="syntax-keyword">Learning</span> <span className="syntax-variable">Byte</span> by <span className="syntax-variable">Byte</span>;</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
