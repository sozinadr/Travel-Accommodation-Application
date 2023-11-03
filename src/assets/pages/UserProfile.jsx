import React, { useState } from "react";

const UserProfile = () => {
  const initialUser = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "https://via.placeholder.com/150",
    phone: "+123456789",
    address: "123 Main St, Cityville",
    bookingHistory: [
      "Booking #1: Elegant Stay - Deluxe Room",
      "Booking #2: Cozy Retreat - Suite",
    ],
    notifications: [
      "Your booking #1 has been confirmed.",
      "Special discount for your next stay!",
    ],
    favoriteDestinations: ["Paris, France", "New York, USA", "Tokyo, Japan"],
    paymentMethods: ["Visa **** 1234", "PayPal: jane.doe@example.com"],
    preferences: {
      newsletter: true,
      smsNotifications: false,
    },
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPhone, setNewPhone] = useState(user.phone);
  const [newAddress, setNewAddress] = useState(user.address);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditProfile = () => {
    if (isEditing) {
      setUser({
        ...user,
        name: newName,
        email: newEmail,
        phone: newPhone,
        address: newAddress,
      });
    }
    setIsEditing(!isEditing);
  };

  const filterData = (data) => {
    return data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Search Input */}
        <div className="mb-6">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-full border rounded-md mb-2"
            placeholder="Search..."
          />
        </div>

        {/* User Information */}
        <div className="flex items-center justify-between mb-6">
          <img
            src={user.avatar}
            alt="user avatar"
            className="w-24 h-24 rounded-full mr-4"
          />
          {isEditing ? (
            <div className="flex flex-col w-full">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="p-2 border rounded-md mb-2"
                placeholder="Name"
              />
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="p-2 border rounded-md mb-2"
                placeholder="Email"
              />
              <input
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="p-2 border rounded-md mb-2"
                placeholder="Phone"
              />
              <input
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="p-2 border rounded-md"
                placeholder="Address"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
              <p className="text-sm text-gray-600">{user.address}</p>
            </div>
          )}
        </div>

        {/* Booking History */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Booking History</h2>
          <div className="bg-gray-100 rounded-md p-4">
            {filterData(user.bookingHistory).map((booking, index) => (
              <p key={index} className="mb-1 text-gray-700">
                {booking}
              </p>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <div className="bg-gray-100 rounded-md p-4">
            {filterData(user.notifications).map((notification, index) => (
              <p key={index} className="mb-1 text-gray-700">
                {notification}
              </p>
            ))}
          </div>
        </div>

        {/* Favorite Destinations */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Favorite Destinations</h2>
          <div className="bg-gray-100 rounded-md p-4">
            {filterData(user.favoriteDestinations).map((destination, index) => (
              <p key={index} className="mb-1 text-gray-700">
                {destination}
              </p>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
          <div className="bg-gray-100 rounded-md p-4">
            {filterData(user.paymentMethods).map((method, index) => (
              <p key={index} className="mb-1 text-gray-700">
                {method}
              </p>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Preferences</h2>
          <div className="bg-gray-100 rounded-md p-4">
            <p className="mb-1 text-gray-700">
              Newsletter Subscription:{" "}
              {user.preferences.newsletter ? "Subscribed" : "Not Subscribed"}
            </p>
            <p className="mb-1 text-gray-700">
              SMS Notifications:{" "}
              {user.preferences.smsNotifications ? "Enabled" : "Disabled"}
            </p>
          </div>
        </div>

        {/* Settings */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <button
            onClick={handleEditProfile}
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
