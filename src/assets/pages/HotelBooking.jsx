import React, { useState } from "react";

const amenitiesOptions = [
  { label: "Free Wifi", name: "wifi" },
  { label: "Free parking", name: "parking" },
  { label: "Key card access", name: "keyCardAccess" },
  { label: "Air conditioning", name: "airConditioning" },
  // ... add other amenities
];

const bedOptions = [
  { label: "Single Bed", value: "single" },
  { label: "Double Bed", value: "double" },
  { label: "Queen Bed", value: "queen" },
  { label: "King Bed", value: "king" },
];

const DatePicker = ({ value, onChange }) => (
  <input
    type="date" // Changed to 'date' for better UX
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="form-input mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
  />
);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nameOnCard: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    checkInDate: "",
    checkOutDate: "",
    bedType: "",
    // ... add other form fields as needed
  });

  const handleBedChange = (event) => {
    setFormData({ ...formData, bedType: event.target.value });
  };

  const [selectedAmenities, setSelectedAmenities] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenitiesChange = (event) => {
    const { name, checked } = event.target;
    setSelectedAmenities((prev) => ({ ...prev, [name]: checked }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    console.log(formData);
    console.log(selectedAmenities);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto mt-10 p-5">
      <div className="md:flex md:justify-between">
        <div className="md:w-1/2 space-y-5">
          {/* Step 1: Property Amenities */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Step 1: Property amenities
            </h2>
            <div className="flex flex-wrap">
              {amenitiesOptions.map((amenity) => (
                <label
                  key={amenity.name}
                  className="flex items-center mr-4 mb-2"
                >
                  <input
                    type="checkbox"
                    name={amenity.name}
                    checked={selectedAmenities[amenity.name] || false}
                    onChange={handleAmenitiesChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{amenity.label}</span>
                </label>
              ))}
            </div>

            {/* Check-in and Check-out DatePickers */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* DatePickers */}
              <DatePicker
                value={formData.checkInDate}
                onChange={(value) =>
                  setFormData({ ...formData, checkInDate: value })
                }
              />
              <DatePicker
                value={formData.checkOutDate}
                onChange={(value) =>
                  setFormData({ ...formData, checkOutDate: value })
                }
              />
            </div>

            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700">
                Select Bed Type:
              </h3>
              <div className="flex flex-wrap">
                {bedOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center mr-4 mb-2"
                  >
                    <input
                      type="radio"
                      name="bedType"
                      value={option.value}
                      checked={formData.bedType === option.value}
                      onChange={handleBedChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Personal Data */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Step 2: Personal data
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className="form-input mt-1 block w-full p-2 border rounded"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className="form-input mt-1 block w-full p-2 border rounded"
              />

              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="form-input mt-1 block w-full p-2 border rounded"
              />

              <input
                type="text"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="form-input mt-1 block w-full p-2 border rounded"
              />
              {/* ... add other personal data fields */}
            </div>
          </div>

          {/* Step 3: Payment Details */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Step 3: Payment details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleInputChange}
                placeholder="Name on card"
                className="form-input mt-1 block w-full p-2 border rounded"
              />
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card number"
                className="form-input mt-1 block w-full p-2 border rounded"
              />
              {/* ... add card expiry and CVC fields */}
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        {/* Booking Summary */}
        {/* Booking Summary */}
        <div className="md:w-1/3 ml-10 p-6 bg-white rounded-lg shadow-xl border border-gray-200 mt-10 md:mt-0">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Booking Summary
          </h3>

          {/* Personal Details */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Personal Details:
            </h4>
            <p className="text-gray-600">
              <span className="font-medium">Name:</span> {formData.firstName}{" "}
              {formData.lastName}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {formData.phoneNumber}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span>{" "}
              {formData.emailAddress}
            </p>
          </div>

          {/* Booking Dates */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-gray-700 mb-2">Dates:</h4>
            <p className="text-gray-600">
              <span className="font-medium">Check-in:</span>{" "}
              {formData.checkInDate || "Not set"}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Check-out:</span>{" "}
              {formData.checkOutDate || "Not set"}
            </p>
          </div>

          {/* Bed Type */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Bed Type:
            </h4>
            <p className="text-gray-600">
              <span className="font-medium">Selected:</span>{" "}
              {formData.bedType
                ? bedOptions.find((option) => option.value === formData.bedType)
                    .label
                : "Not selected"}
            </p>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Amenities:
            </h4>
            <ul className="list-disc pl-5 text-gray-600">
              {Object.entries(selectedAmenities)
                .filter(([, value]) => value)
                .map(([key]) => (
                  <li key={key}>
                    {
                      amenitiesOptions.find((option) => option.name === key)
                        .label
                    }
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
