// HotelProfilePage.js
import React, { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import { FaStar } from "react-icons/fa";

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
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Handle carousel navigation
  const prevImage = () =>
    setActiveImageIdx((prevIdx) =>
      prevIdx > 0 ? prevIdx - 1 : hotel.images.length - 1
    );
  const nextImage = () =>
    setActiveImageIdx((prevIdx) => (prevIdx + 1) % hotel.images.length);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center py-4">
          {hotel.name}
        </h1>
        <div className="relative">
          <img
            src={hotel.images[activeImageIdx]}
            alt={hotel.name}
            className="w-full h-96 object-cover"
          />
          <button
            className="absolute top-1/2 left-2 text-gray-300 hover:text-white text-3xl"
            onClick={prevImage}
          >
            <IoMdArrowDropleftCircle />
          </button>
          <button
            className="absolute top-1/2 right-2 text-gray-300 hover:text-white text-3xl"
            onClick={nextImage}
          >
            <IoMdArrowDroprightCircle />
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-lg text-gray-700 mb-4">{hotel.description}</p>
          <p className="text-md mb-4 text-indigo-600 font-semibold">
            Location: {hotel.location}
          </p>
          <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
          <div className="mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {hotel.amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-600 rounded-full px-3 py-1 text-sm font-semibold"
              >
                {amenity}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-3">Rooms & Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {hotel.rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-800">{room.type}</h3>
                <p className="text-gray-700 mb-2">${room.price}/night</p>
                <ul className="list-disc list-inside mb-3">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {amenity}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-3">Guest Reviews</h2>
          <div className="space-y-4 mb-6">
            {hotel.reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <p className="font-bold">
                  {review.user}{" "}
                  <span className="text-yellow-400">
                    <FaStar /> {review.rating}
                  </span>
                </p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <div className="mb-6 text-gray-700">
            <p>
              <FaPhone /> {hotel.contact}
            </p>
            <p>
              <FaEnvelope /> {hotel.email}
            </p>
            <p>
              <FaGlobe />
              <a
                href={`http://${hotel.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {hotel.website}
              </a>
            </p>
          </div>
          <p className="text-yellow-400 text-lg mb-4">
            Overall Rating: {hotel.rating} / 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelProfile;
