import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyComponent = () => {
  // State variables
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [filters, setFilters] = useState({
    budgetHotel: false,
    breakfastIncluded: false,
    freeAirportShuttle: false,
    hostelBackpacker: false,
    pricePerNight: 0,
  });
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null); // Added for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Added for the modal

  // Handle the search form submission
  const handleSearch = (event) => {
    event.preventDefault();
    // Filter hotels based on search criteria
    const newFilteredHotels = hotels.filter((hotel) => {
      // Replace with your actual filtering logic
      return true; // Placeholder logic
    });
    setFilteredHotels(newFilteredHotels);
  };

  // Handle changes in the filter section
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to open the modal with booking options
  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHotel(null);
  };

  const hotels = [
    {
      name: "Hotel Nørrebro",
      distance: "0.4 km from city centre",
      details: "Comfort room with 1 king size bed and bathroom",
      rating: "9.6",
      reviewCount: "1920 reviews",
      price: "$180",
      ratingDesc: "Excellent",
      breakfastIncluded: true,
      freeAirportShuttle: false,
      hostelBackpacker: false,
    },
    {
      name: "Hotel Mitte",
      distance: "17 km from city centre",
      details: "Standard room with 1 queen size bed and bathroom",
      rating: "9.2",
      reviewCount: "832 reviews",
      price: "$450",
      ratingDesc: "Very good",
      breakfastIncluded: false,
      freeAirportShuttle: true,
      hostelBackpacker: false,
    },
    {
      name: "Hotel ZOO Copenhagen",
      distance: "20 km from city centre",
      details: "Premium room with 1 king size bed and bathroom",
      rating: "8.0",
      reviewCount: "1000 reviews",
      price: "$220",
      ratingDesc: "Good",
      breakfastIncluded: true,
      freeAirportShuttle: true,
      hostelBackpacker: true,
    },
  ];
  useEffect(() => {
    // Set filteredHotels to contain all hotels initially
    setFilteredHotels(hotels);
  }, []);

  // JSX for your component
  return (
    <div className="container mx-auto px-4">
      <main>
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 p-4">
            {/* Search Criteria */}
            <form onSubmit={handleSearch} className="mb-6">
              {/* Destination Input */}
              <div className="mb-4">
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700"
                >
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              {/* Check-in Date Input */}
              <div className="mb-4">
                <label
                  htmlFor="checkInDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              {/* Check-out Date Input */}
              <div className="mb-4">
                <label
                  htmlFor="checkOutDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              {/* Guests Input */}
              <div className="mb-4">
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  min="1"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              {/* Search Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
              >
                Search
              </button>
            </form>
            {/* Filters */}
            <div className="border-t border-gray-200 pt-4">
              {/* Filter Title */}
              <h3 className="font-semibold mb-2">Popular filters</h3>
              {/* Budget Hotel Filter */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="budgetHotel"
                    checked={filters.budgetHotel}
                    onChange={handleFilterChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Budget hotel
                  </span>
                </label>
              </div>
              {/* Breakfast Included Filter */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="breakfastIncluded"
                    checked={filters.breakfastIncluded}
                    onChange={handleFilterChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Breakfast included
                  </span>
                </label>
              </div>
              {/* Free Airport Shuttle Filter */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="freeAirportShuttle"
                    checked={filters.freeAirportShuttle}
                    onChange={handleFilterChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Free airport shuttle
                  </span>
                </label>
              </div>
              {/* Hostel/Backpacker Filter */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="hostelBackpacker"
                    checked={filters.hostelBackpacker}
                    onChange={handleFilterChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Hostel/Backpacker
                  </span>
                </label>
              </div>
              {/* Price per Night Filter */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold mb-2">Price per night</h3>
                <input
                  type="range"
                  name="pricePerNight"
                  min="0"
                  max="500"
                  value={filters.pricePerNight}
                  onChange={handleFilterChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>${filters.pricePerNight}</span>
                  <span>$500+</span>
                </div>
              </div>
            </div>
          </aside>
          {/* Hotels List */}
          <section className="w-full md:w-3/4">
            <div className="p-4">
              {/* Search Summary */}
              <h2 className="text-xl font-semibold">
                Copenhagen, Dec 9 - 12, {guests} guests, 1 room
              </h2>
              {/* Hotels Display */}
              <div className="mt-4">
                {filteredHotels.length === 0 ? (
                  <p>No hotels match your criteria.</p>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredHotels.map((hotel, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 flex flex-col"
                      >
                        {/* Hotel Name */}
                        <h3 className="text-lg font-bold">{hotel.name}</h3>
                        {/* Hotel Details */}
                        <p className="text-sm text-gray-600">
                          {hotel.distance}
                        </p>
                        <p className="text-sm">{hotel.details}</p>
                        <div className="mt-auto">
                          {/* Hotel Rating */}
                          <div className="flex justify-between items-center mt-2">
                            <span
                              className={`text-sm font-semibold ${
                                parseFloat(hotel.rating) >= 9
                                  ? "text-green-500"
                                  : parseFloat(hotel.rating) >= 8
                                  ? "text-yellow-500"
                                  : "text-red-500"
                              }`}
                            >
                              {hotel.ratingDesc} {hotel.rating}
                            </span>
                            {/* Review Count */}
                            <span className="text-xs text-gray-500">
                              {hotel.reviewCount}
                            </span>
                          </div>
                          {/* Price and Booking Button */}
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-lg font-bold">
                              {hotel.price}
                            </span>
                            <Link
                              to={`/hotel/${hotel.id}`}
                              className="bg-blue-500 text-white text-sm px-4 py-2 rounded shadow"
                            >
                              See booking options
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MyComponent;
