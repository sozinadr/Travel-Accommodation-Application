import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Bubble } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data2 = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: Math.floor(Math.random() * 201) - 100,
        y: Math.floor(Math.random() * 201) - 100,
        r: Math.floor(Math.random() * 16) + 5,
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: Math.floor(Math.random() * 201) - 100,
        y: Math.floor(Math.random() * 201) - 100,
        r: Math.floor(Math.random() * 16) + 5,
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const generateRandomData = () =>
  labels.map(() => Math.floor(Math.random() * 1000));

export const data = {
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

const Dashboard = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className=" p-5 rounded">
        <h2 className="text-2xl mb-5">Dashboard</h2>
        <div className="flex ">
          <div className="w-1/2 flex justify-center items-center m-4 shadow-2xl rounded-xl p-2">
            <Bar data={data} />
          </div>
          <div className="w-1/2 flex justify-center items-center m-4 shadow-2xl rounded-xl p-2">
            <Bubble options={options} data={data2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
