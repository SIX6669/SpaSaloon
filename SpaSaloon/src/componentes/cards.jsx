import React from 'react';
import '../styles/cards.css';

const Card = ({ title, imageSrc }) => {
  return (
    <div className="section-card">
      {imageSrc && (
        <div className="section-card-image-container">
          <img src={"https://media.istockphoto.com/id/469916170/es/foto/mujer-joven-relajante-en-back-sesi%C3%B3n-de-masajes-en-el-spa.jpg?s=612x612&w=0&k=20&c=iAfOX5R3KqhcnFVDuu0WG41FyyBKtQV_3hepUqMZvkY="} alt={title} className="section-card-image" />
          <div className="section-card-overlay"></div>
        </div>
      )}
      <h3 className="section-title">{title}</h3>
    </div>
  );
}

export default Card;