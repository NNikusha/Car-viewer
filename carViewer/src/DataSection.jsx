import React from 'react';
import CarCard from './CarCard';

function DateSection({ date, cars }) {
  return (
    <div className="date-section">
      <h2 className="date-header">{date}</h2>
      <div className="car-container">
        {cars.map((car, index) => (
          <CarCard key={index} url={car.url} description={car.description} />
        ))}
      </div>
    </div>
  );
}

export default DateSection;
