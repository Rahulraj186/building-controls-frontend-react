import React from "react";
const RoomCard = ({ room, onDelete, onEdit }) => {
  return (
    <div className="room-card">
      <h3>{room.name}</h3>
      <p>Temperature: {room.temperature} °C</p>
      <p>
        Status:{" "}
        {room.temperature < room.building.requestedTemperature
          ? "Heating"
          : "Cooling"}
      </p>
      <button onClick={() => onEdit(room)}>Edit</button>
      <button onClick={() => onDelete(room.id)}>Delete</button>
    </div>
  );
};

export default RoomCard;
