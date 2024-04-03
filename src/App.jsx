import React, { useState, useEffect } from "react";
import BuildingCard from "./Components/Buildingcard";
import RoomCard from "./Components/RoomCard";

function App() {
  const [building, setBuilding] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/building");
      const data = await response.json();
      setBuilding(data);
    };
    fetchData();
  }, []);

  const handleTemperatureChange = (newTemperature) => {
    setBuilding({ ...building, requestedTemperature: newTemperature });
  };

  const handleAddRoom = () => {};

  const handleDeleteRoom = (roomId) => {
    setBuilding({
      ...building,
      rooms: building.rooms.filter((room) => room.id !== roomId),
    });
  };

  const handleEditRoom = (room) => {};

  return (
    <div className="container">
      {building && (
        <>
          <BuildingCard
            building={building}
            onTemperatureChange={handleTemperatureChange}
          />
          <h2>Rooms</h2>
          <div className="rooms">
            {building.rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onDelete={() => handleDeleteRoom(room.id)}
                onEdit={() => handleEditRoom(room)}
              />
            ))}
          </div>
          <button onClick={handleAddRoom}>Add Room</button>
        </>
      )}
    </div>
  );
}

export default App;
