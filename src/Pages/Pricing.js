import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2>Choose Your Learning Plan</h2>
      <div className="pricing-cards">
        
        {/* Free Plan */}
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$0 <span>/month</span></p>
          <ul>
            <li>✔ Access to free courses</li>
            <li>✖ No course certificates</li>
            <li>✖ Limited video quality</li>
          </ul>
          <button>Start Learning</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card pro">
          <h3>Pro</h3>
          <p className="price">$15 <span>/month</span></p>
          <ul>
            <li>✔ Unlimited access to all courses</li>
            <li>✔ High-definition video streaming</li>
            <li>✔ Course completion certificates</li>
          </ul>
          <button className="upgrade-button">Upgrade Now</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <h3>Mentorship</h3>
          <p className="price">$50 <span>/month</span></p>
          <ul>
            <li>✔ One-on-one mentorship</li>
            <li>✔ Personalized study plans</li>
            <li>✔ Early access to new courses</li>
          </ul>
          <button>Join Now</button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
