// HotelDetails.js
import React, { useState } from "react";
import IMAGES from "../../Images/Images";

const HotelDetails = () => {
  const hotel = {
    name: "Hotel 1",
    description:
      "Experience comfort at Hotel 1. Situated in a prime location, our hotel provides a splendid escape.",
    location: "100 Main Street, Cityville",
    images: [IMAGES.image1],
    rooms: [
      { type: "Standard Room", price: 70 },
      { type: "Deluxe Room", price: 120 },
      { type: "Suite", price: 180 },
    ],
  };

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setShowConfirmationModal(true);
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-blue-300 to-blue-600 flex justify-center items-center font-sans">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="mb-6 h-64 overflow-hidden rounded-md shadow-md">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
          {hotel.name}
        </h1>
        <p className="mb-6 text-gray-700 text-lg">{hotel.description}</p>
        <p className="mb-6 font-semibold text-gray-800 text-md">
          Location: {hotel.location}
        </p>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Rooms & Prices
        </h2>
        <ul>
          {hotel.rooms.map((room, idx) => (
            <li
              key={idx}
              className="mb-4 flex justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow"
            >
              <span className="font-medium text-gray-800 text-lg">
                {room.type}:{" "}
              </span>
              <div>
                <span className="mr-4 text-gray-800 text-lg">
                  ${room.price}/night
                </span>
                <button
                  onClick={() => handleBookRoom(room)}
                  className="p-3 bg-blue-500 text-white rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>

        {showConfirmationModal && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                Booking Confirmation
              </h3>
              <p className="mb-4 text-gray-700 text-md">
                You have selected the <strong>{selectedRoom.type}</strong> for $
                {selectedRoom.price}/night.
              </p>
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-colors duration-300 text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelDetails;
