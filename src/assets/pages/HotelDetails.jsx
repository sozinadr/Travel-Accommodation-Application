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
    <div className="min-h-screen p-4 bg-gradient-to-b from-blue-300 to-blue-600 flex flex-col items-center font-sans">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <div className="mb-4 h-64 overflow-hidden rounded-md">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover transform transition-transform hover:scale-110"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">
          {hotel.name}
        </h1>
        <p className="mb-4 text-gray-700">{hotel.description}</p>
        <p className="mb-4 font-semibold text-gray-800">
          Location: {hotel.location}
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Rooms & Prices
        </h2>
        <ul>
          {hotel.rooms.map((room, idx) => (
            <li
              key={idx}
              className="mb-3 flex justify-between items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span className="font-medium text-gray-800">{room.type}: </span>
              <div>
                <span className="mr-2 text-gray-800">${room.price}/night</span>
                <button
                  onClick={() => handleBookRoom(room)}
                  className="p-2 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600 transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>

        {showConfirmationModal && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Booking Confirmation</h3>
              <p className="mb-4 text-gray-700">
                You have selected the <strong>{selectedRoom.type}</strong> for $
                {selectedRoom.price}/night.
              </p>
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors duration-300"
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
