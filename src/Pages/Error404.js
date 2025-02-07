import React from "react";
import "../styles/Error404.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Error: 404</h1>
      <pre className="error-code">
        <span className="keyword">function</span> <span className="function-name">PageNotFound</span>() {"{"} <br />
        &nbsp;&nbsp;<span className="keyword">return</span> (
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="element">div</span>{">"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Oops! The page you're looking for doesn't exist."</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"</"}<span className="element">div</span>{">"}
        <br />
        &nbsp;&nbsp;);
        <br />
        {"}"}
      </pre>
      <button className="back-button" onClick={() => window.location.href = "/"}>Return Home</button>
    </div>
  );
};

export default Error404;
