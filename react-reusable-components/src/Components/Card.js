import React, { useState } from "react";
import "../styles/notes.css";

const Card = () => {
  return (
    <>
      <div style={{ margin: "5rem" }}>
        <div className="card-item">
          <img src="logo192.png" alt="" />
          <div className="card-content">
            <h2>Hello this is title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              totam! Placeat, vero? A iusto minus eveniet adipisci tempore animi
              laboriosam?
            </p>
          </div>
          <div className="cart-btn">
            <button size="small">Share</button>
            <button size="small">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
