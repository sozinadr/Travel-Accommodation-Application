import { auth, provider } from "../Backend/Configure";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import React from "react";
import Home from "../pages/Home";

const Login = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handlSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      {!value && (
        <div className="min-h-screen flex items-center justify-center custom-gradient py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-300">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Welcome Back
              </h2>
              <p className="text-gray-600">Enter your details to continue.</p>
            </div>
            <form
              className="space-y-6 mt-4"
              method="POST"
              onSubmit={handlSignIn}
              action="#"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div>
                <button
                  className="w-full py-3 px-4 border border-transparent rounded-md text-white bg-blue-900 hover:bg-blue-500 focus:bg-blue-800"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
            <button
              onClick={handleClick}
              className="w-full py-3  px-4 border border-transparent rounded-md text-white bg-blue-900 hover:bg-blue-500 focus:bg-blue-800"
            >
              Log In With Google
            </button>
          </div>
        </div>
      )}
      {value && <Home />}
    </>
  );
};

export default Login;
