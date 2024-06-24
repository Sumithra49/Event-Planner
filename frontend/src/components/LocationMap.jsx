// src/components/LocationMap.js
import React from 'react';
import './LocationMap.css';

const LocationMap = ({ latitude, longitude }) => {
  // Your map integration logic here
  return (
    <div className="location-map">
      {/* Display map using latitude and longitude */}
      <p>Map here (latitude: {latitude}, longitude: {longitude})</p>
    </div>
  );
};

export default LocationMap;
