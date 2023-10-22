import React from "react";
import Navbar from "../components/Navbar";

const Users = () => {
  const users = [
    { name: "Alice", password: "password1", email: "alice@example.com" },
    { name: "Bob", password: "password2", email: "bob@example.com" },
    // Add more users as needed
  ];

  return (
    <div>
      {" "}
      <Navbar />
      <div className="overflow-x-auto flex justify-center items-center h-[90vh]">
        <table className="w-1/2 bg-white dark:bg-gray-800 shadow-md ">
          <thead>
            <tr className="text-gray-600 dark:text-gray-400 text-sm leading-normal">
              <th className="py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-grey-dark border-b border-gray-300">
                Name
              </th>
              <th className="py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-grey-dark border-b border-gray-300">
                Password
              </th>
              <th className="py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-grey-dark border-b border-gray-300">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="text-gray-700 dark:text-gray-400 text-sm font-light"
                key={index}
              >
                <td className="py-4 px-6 border-b border-gray-300">
                  {user.name}
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  {user.password}
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
