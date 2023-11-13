import React, { useState } from "react";
import IMAGES from "../../Images/Images";
import { Collapse } from "react-collapse";

const Accommodations = () => {
  // Sample hotels data
  const hotelsData = Array.from({ length: 8 }, (_, i) => ({
    name: `Hotel ${i + 1}`,
    description: `Experience comfort at Hotel ${i + 1}.`,
    location: `Cityville`,
    images: [IMAGES[`image${i + 1}`]],
    rooms: [{ type: "Standard Room", price: 70 + i * 10 }],
    accommodationType: "Hotel",
    amenities: ["Wi-Fi", "Pool"],
    accessibility: ["Wheelchair Accessible", "Elevator"],
  }));

  const [priceRange, setPriceRange] = useState("All");
  const [location, setLocation] = useState("All");
  const [accommodationType, setAccommodationType] = useState("All");
  const [amenities, setAmenities] = useState("All");
  const [accessibility, setAccessibility] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openSection, setOpenSection] = useState("");
  const [bookedHotels, setBookedHotels] = useState([]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };
  const handleBooking = (hotelIdx) => {
    setBookedHotels((prevBooked) => [...prevBooked, hotelIdx]);
    alert(`Hotel ${hotelIdx + 1} booked successfully!`);
  };

  const filteredHotels = hotelsData
    .filter((hotel) => {
      if (priceRange !== "All") {
        const [min, max] = priceRange.split("-").map(Number);
        return hotel.rooms.some(
          (room) => room.price >= min && room.price <= max
        );
      }
      return true;
    })
    .filter((hotel) => location === "All" || hotel.location === location)
    .filter(
      (hotel) =>
        accommodationType === "All" ||
        hotel.accommodationType === accommodationType
    )
    .filter(
      (hotel) => amenities === "All" || hotel.amenities.includes(amenities)
    )
    .filter(
      (hotel) =>
        accessibility === "All" || hotel.accessibility.includes(accessibility)
    )
    .filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Accommodations</h1>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-md border"
        />
      </div>

      {/* Filters Card */}
      <div className="filter-card rounded-lg shadow-lg mb-4 p-4">
        <div className="filter-section" onClick={() => toggleSection("price")}>
          <h2 className="filter-header">Search by Price</h2>
          <Collapse isOpened={openSection === "price"}>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="p-2 rounded-md border w-full mt-2"
            >
              <option value="All">All</option>
              <option value="50-100">$50-$100</option>
              <option value="100-200">$100-$200</option>
              {/* ... more options */}
            </select>
          </Collapse>
        </div>
        <div
          className="filter-section"
          onClick={() => toggleSection("location")}
        >
          <h2 className="filter-header">Search by Location</h2>
          <Collapse isOpened={openSection === "location"}>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 rounded-md border w-full mt-2"
            >
              <option value="All">All</option>
              <option value="Cityville">Cityville</option>
              {/* ... more options */}
            </select>
          </Collapse>
        </div>
        <div
          className="filter-section"
          onClick={() => toggleSection("accommodation")}
        >
          <h2 className="filter-header">Search by Accommodation</h2>
          <Collapse isOpened={openSection === "accommodation"}>
            <select
              value={accommodationType}
              onChange={(e) => setAccommodationType(e.target.value)}
              className="p-2 rounded-md border w-full mt-2"
            >
              <option value="All">All</option>
              <option value="Hotel">Hotel</option>
              {/* ... more options */}
            </select>
          </Collapse>
        </div>
        <div
          className="filter-section"
          onClick={() => toggleSection("amenities")}
        >
          <h2 className="filter-header">Search by Amenities</h2>
          <Collapse isOpened={openSection === "amenities"}>
            <select
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
              className="p-2 rounded-md border w-full mt-2"
            >
              <option value="All">All</option>
              <option value="Wi-Fi">Wi-Fi</option>
              <option value="Pool">Pool</option>
              {/* ... more options */}
            </select>
          </Collapse>
        </div>
        <div
          className="filter-section"
          onClick={() => toggleSection("accessibility")}
        >
          <h2 className="filter-header">Search by Accessibility</h2>
          <Collapse isOpened={openSection === "accessibility"}>
            <select
              value={accessibility}
              onChange={(e) => setAccessibility(e.target.value)}
              className="p-2 rounded-md border w-full mt-2"
            >
              <option value="All">All</option>
              <option value="Wheelchair Accessible">
                Wheelchair Accessible
              </option>
              <option value="Elevator">Elevator</option>
              {/* ... more options */}
            </select>
          </Collapse>
        </div>
      </div>

      {/* Hotels grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredHotels.map((hotel, hotelIdx) => (
          <div
            key={hotelIdx}
            className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-2 h-24 overflow-hidden rounded-md">
              <img
                src={hotel.images[0]}
                alt={`hotel-${hotelIdx}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-blue-600">
              {hotel.name}
            </h2>
            <p className="mb-2 text-xs text-gray-700 truncate">
              {hotel.description}
            </p>
            <p className="mb-2 text-xs font-semibold text-gray-500">
              Location: {hotel.location}
            </p>
            <h3 className="text-md font-semibold mb-1 text-gray-800">
              Rooms & Prices
            </h3>
            <ul className="mb-2 space-y-1">
              {hotel.rooms.map((room, roomIdx) => (
                <li key={roomIdx} className="text-xs">
                  <span className="font-medium">{room.type}: </span>$
                  {room.price}/night
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleBooking(hotelIdx)}
              disabled={bookedHotels.includes(hotelIdx)}
              className={`w-full p-1 text-white rounded-md text-xs transition-colors duration-300 ${
                bookedHotels.includes(hotelIdx)
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {bookedHotels.includes(hotelIdx) ? "Booked" : "Book Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodations;
