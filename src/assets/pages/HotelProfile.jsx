// HotelProfilePage.js
import React, { useState } from "react";

const HotelProfile = () => {
  // Sample hotel data
  const hotel = {
    name: "Elegant Stay",
    description:
      "Experience the pinnacle of luxury at Elegant Stay. Situated in the heart of the city, our hotel offers a splendid escape with top-notch amenities.",
    location: "123 Main Street, Cityville",
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
    rooms: [
      {
        type: "Standard Room",
        price: 120,
        amenities: ["Free WiFi", "TV", "Air Conditioning"],
      },
      {
        type: "Deluxe Room",
        price: 200,
        amenities: ["Free WiFi", "TV", "Air Conditioning", "Ocean View"],
      },
      {
        type: "Suite",
        price: 350,
        amenities: [
          "Free WiFi",
          "TV",
          "Air Conditioning",
          "Ocean View",
          "Balcony",
        ],
      },
    ],
    amenities: ["Swimming Pool", "Spa", "Gym", "Restaurant", "Free Parking"],
    contact: "+1 (123) 456-7890",
    email: "info@elegantstay.com",
    website: "www.elegantstay.com",
    rating: 4.7,
    reviews: [
      {
        user: "John",
        comment: "Amazing stay! Loved the view from the room.",
        rating: 5,
      },
      {
        user: "Alice",
        comment: "The room was comfortable and clean.",
        rating: 4,
      },
    ],
  };

  // Image carousel state
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Handle carousel navigation
  const prevImage = () =>
    setActiveImageIdx((prevIdx) =>
      prevIdx > 0 ? prevIdx - 1 : hotel.images.length - 1
    );
  const nextImage = () =>
    setActiveImageIdx((prevIdx) => (prevIdx + 1) % hotel.images.length);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
        <div className="mb-4 relative">
          <img
            src={hotel.images[activeImageIdx]}
            alt={hotel.name}
            className="w-full h-64 rounded-md object-cover"
          />
          <button
            className="absolute top-1/2 left-0 p-4 bg-gray-700 bg-opacity-50 text-white rounded-r-full"
            onClick={prevImage}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-0 p-4 bg-gray-700 bg-opacity-50 text-white rounded-l-full"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>
        <p className="mb-4 text-gray-700">{hotel.description}</p>
        <p className="mb-4 text-blue-500 font-semibold">
          Location: {hotel.location}
        </p>
        <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
        <div className="mb-4 flex flex-wrap">
          {hotel.amenities.map((amenity, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 rounded-md p-1 m-1 text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2">Rooms & Prices</h2>
        <div className="mb-6 grid grid-cols-1 gap-4">
          {hotel.rooms.map((room, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">{room.type}</h3>
              <p className="text-gray-700 mb-2">${room.price}/night</p>
              <ul className="list-disc list-inside mb-2">
                {room.amenities.map((amenity, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    {amenity}
                  </li>
                ))}
              </ul>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        <div className="mb-6">
          {hotel.reviews.map((review, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm mb-4">
              <p className="font-semibold">
                {review.user}{" "}
                <span className="text-yellow-500">★{review.rating}</span>
              </p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="mb-2 text-gray-700">Phone: {hotel.contact}</p>
        <p className="mb-2 text-gray-700">Email: {hotel.email}</p>
        <p className="mb-4 text-gray-700">
          Website:{" "}
          <a
            href={`http://${hotel.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {hotel.website}
          </a>
        </p>
        <p className="mb-4 text-yellow-500">
          Overall Rating: {hotel.rating} / 5
        </p>
      </div>
    </div>
  );
};

export default HotelProfile;
