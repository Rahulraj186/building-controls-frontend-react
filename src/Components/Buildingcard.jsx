import React from "react";

const Buildingcard = ({ building, onTemperatureChange }) => {
  return (
    <div className="building-card">
      <h2>Building Details</h2>
      <p>Requested Temperature: {building.requestedTemperature} °C</p>
      <input
        type="number"
        placeholder="New Temperature"
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
};

export default Buildingcard;
