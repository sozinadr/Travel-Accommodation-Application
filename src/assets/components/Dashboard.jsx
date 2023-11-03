import React from "react";
import { Bar, Bubble } from "react-chartjs-2";

const Dashboard = () => {
  const newBookings = 35;
  const pendingInquiries = 15;
  const recentCancellations = 5;

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const generateRandomData = () =>
    labels.map(() => Math.floor(Math.random() * 1000));

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: generateRandomData(),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: generateRandomData(),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const data2 = {
    datasets: [
      // Similar data structure as before
    ],
  };

  const options = {
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white w-1/6 p-5">
        <h2 className="text-2xl font-semibold mb-5">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-3 cursor-pointer hover:text-blue-500">
              Dashboard
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500">
              Bookings
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500">
              Inquiries
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500">
              Listings
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500">
              Cancellations
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <header className="mb-5">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">New Bookings</h3>
            <p className="text-3xl mt-2">{newBookings}</p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pending Inquiries</h3>
            <p className="text-3xl mt-2">{pendingInquiries}</p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Cancellations</h3>
            <p className="text-3xl mt-2">{recentCancellations}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="flex space-x-4">
          {/* Bar Chart */}
          <div className="w-1/2 p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-5">Monthly Bookings</h3>
            <Bar data={data} />
          </div>
          {/* Bubble Chart */}
          <div className="w-1/2 p-5 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-5">Booking Locations</h3>
            <Bubble options={options} data={data2} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
