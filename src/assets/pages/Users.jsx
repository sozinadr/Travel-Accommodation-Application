import React, { useState } from "react";
import Navbar from "../components/Navbar";
import IMAGES from "../../Images/Images";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
  ]);

  const [newUserName, setNewUserName] = useState(""); // State for new user's name
  const [newUserEmail, setNewUserEmail] = useState(""); // State for new user's email
  const [deletedUser, setDeletedUser] = useState(null); // State to keep track of last deleted user

  const handleDelete = (index) => {
    if (
      window.confirm(
        "Would you like to backup this user's data before deletion?"
      )
    ) {
      console.log("User data backed up:", users[index]);
    }

    if (window.confirm("Are you sure you want to delete this user?")) {
      const newUsers = [...users];
      const userToDelete = newUsers.splice(index, 1)[0];
      setUsers(newUsers);
      setDeletedUser(userToDelete);
    }
  };

  const undoDelete = () => {
    if (deletedUser) {
      setUsers((prevUsers) => [...prevUsers, deletedUser]);
      setDeletedUser(null);
    }
  };

  const handleAddUser = () => {
    if (newUserName && newUserEmail) {
      setUsers((prevUsers) => [
        ...prevUsers,
        { name: newUserName, email: newUserEmail },
      ]);
      setNewUserName(""); // Reset the name input
      setNewUserEmail(""); // Reset the email input
    }
  };

  const headerStyle =
    "py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-grey-dark border-b border-gray-300";

  return (
    <div className="bg-gray-100 h-[100vh] flex ">
      <div className=" w-1/4 mt-4">
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
      <div className=" w-3/4 flex flex-col ">
        <div className="h-[10vh] bg-blue-500">
          <Navbar />
        </div>
        <div className="">
          {" "}
          <div className="py-8 px-4">
            {/* Form to add new user */}
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
              <div className="flex gap-4">
                <input
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="Name"
                  className="flex-1 p-2 border rounded shadow-sm"
                />
                <input
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 p-2 border rounded shadow-sm"
                />
                <button
                  onClick={handleAddUser}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded transition duration-200"
                >
                  Add User
                </button>
              </div>
            </div>

            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                  <th className={headerStyle}>Name</th>
                  <th className={headerStyle}>Email</th>
                  <th className={headerStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    className="text-gray-700 text-sm font-light hover:bg-gray-50 transition duration-200"
                    key={index}
                  >
                    <td className="py-4 px-6 border-b border-gray-300">
                      {user.name}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-300">
                      {user.email}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-300">
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {deletedUser && (
              <div className="mt-6 bg-yellow-200 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-md">
                User {deletedUser.name} was deleted.
                <button
                  onClick={undoDelete}
                  className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition duration-200"
                >
                  Undo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
