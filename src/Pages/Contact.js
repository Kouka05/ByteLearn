import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have any questions or need support? Feel free to reach out to us! We are always happy to help.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="5" placeholder="Type your message here..."></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
