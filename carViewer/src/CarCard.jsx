import React from 'react';

function CarCard({ url, description }) {
  return (
    <div className="car-card">
      <iframe src={url} title={description} loading="lazy" />
      <div className="details">
        <div className="description-container">
          <p>{description}</p>
          <button className="view-button" onClick={() => window.open(url, '_blank')}>
            View on Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
