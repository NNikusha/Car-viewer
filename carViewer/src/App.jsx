import React, { useEffect, useState } from 'react';
import './App.css';
import DateSection from './DataSection';

function App() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch('/links.json')
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Copart and IAAI Car Viewer</h1>
      {carData.map((section, index) => (
        <DateSection key={index} date={section.date} cars={section.cars} />
      ))}
    </div>
  );
}

export default App;
