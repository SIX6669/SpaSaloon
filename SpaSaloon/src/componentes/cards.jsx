import React from 'react';
import '../styles/cards.css';

const Card = ({ title, imageSrc }) => {
  return (
    <div className="section-card">
      {imageSrc && (
        <div className="section-card-image-container">
          <img src={"https://plus.unsplash.com/premium_photo-1683134294916-473fc738750b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={title} className="section-card-image" />
          <div className="section-card-overlay"></div>
        </div>
      )}
      <h3 className="section-title">{title}</h3>
    </div>
  );
}

export default Card;