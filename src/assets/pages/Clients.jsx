import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import IMAGES from "../../Images/Images";

function Clients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Mock data
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      dateRegistered: "2022-01-10",
      bookingCount: 5,
    },

    {
      id: 1,
      name: "Dyari Yassin",
      email: "john@example.com",
      dateRegistered: "2022-03-10",
      bookingCount: 9,
    },

    {
      id: 1,
      name: "Helin Helin",
      email: "john@example.com",
      dateRegistered: "2022-03-10",
      bookingCount: 2,
    },
  ];

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className=" w-1/4">
        <div className="flex border-1 border-black justify-start ml-2 items-center">
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon1} />
          <h1>Dashboard</h1>
        </div>
        <Link
          to="/users"
          className="flex border-1 border-black justify-start ml-2 items-center"
        >
          {" "}
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon1} />
          <h1>Users</h1>{" "}
        </Link>
        <div className="flex border-1 border-black justify-start ml-2 items-center">
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon4} />
          <h1>Clients</h1>
        </div>
        <div className="flex border-1 border-black justify-start ml-2 items-center">
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon3} />
          <h1>Contacts</h1>
        </div>
        <div className="flex border-1 border-black justify-start ml-2 items-center">
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon2} />
          <h1>About Us</h1>
        </div>
        <div className="flex border-1 border-black justify-start ml-2 items-center">
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon6} />
          <h1>F&Q</h1>
        </div>
      </div>

      <Navbar />

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pl-8 border rounded w-full"
        />
        <span className="absolute left-2 top-2.5">
          {/* Replace this with your search icon */}
          <i className="fas fa-search"></i>
        </span>
      </div>

      <table className="min-w-full table-auto bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Date Registered</th>
            <th className="px-4 py-2">Booking Count</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-t">{client.name}</td>
              <td className="px-4 py-2 border-t">{client.email}</td>
              <td className="px-4 py-2 border-t">{client.dateRegistered}</td>
              <td className="px-4 py-2 border-t">{client.bookingCount}</td>
              <td className="px-4 py-2 border-t">
                <button
                  className="mr-2 text-blue-500 hover:underline"
                  onClick={() => setSelectedClient(client)}
                >
                  Details
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedClient && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/3">
            <h2 className="text-xl mb-2">Client Details</h2>
            <p>
              <strong>Name:</strong> {selectedClient.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedClient.email}
            </p>
            <p>
              <strong>Date Registered:</strong> {selectedClient.dateRegistered}
            </p>
            <p>
              <strong>Booking Count:</strong> {selectedClient.bookingCount}
            </p>
            <button onClick={() => setSelectedClient(null)}>Close</button>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/3">
            <h2 className="text-xl mb-2">
              Are you sure you want to delete this client?
            </h2>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </button>
              <button
                className="text-red-500"
                onClick={() => {
                  // TODO: Implement delete logic here
                  setShowDeleteConfirm(false);
                }}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clients;
