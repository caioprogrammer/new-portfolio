import React from "react";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome" id="loading">
      <div className="container-reveal">
        <div style={{display: 'block'}}>
          <div className="reveal">
            <div className="reveal__content">Destrave todo o potencial</div>
          </div>
        </div>
        <div style={{display: 'block'}}>
          <div className="reveal">
            <div className="reveal__content">Do seu</div>
          </div>
          <div className="reveal">
            <div className="reveal__content">E-commerce</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
