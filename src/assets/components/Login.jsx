import { auth, provider } from "../Backend/Configure";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

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

  const handleForgotPassword = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent");
          // You can also show a notification to the user
        })
        .catch((error) => {
          console.log(error);
          // Handle errors here, such as displaying a notification to the user
        });
    } else {
      console.log("Please enter your email address");
      // Prompt the user to enter their email address
    }
  };

  return (
    <>
      {!value && (
        <div className="min-h-screen flex items-center justify-center custom-gradient py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-slate-300">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Welcome Back
              </h2>
              <p className="text-gray-600">Enter your details to continue.</p>
            </div>
            <form className="space-y-6 mt-4">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email Address
                </span>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {/* ... (rest of the form elements) */}
              <button
                className="w-full py-3 px-4 border border-transparent rounded-md text-white bg-blue-900 hover:bg-blue-500 focus:bg-blue-800"
                type="submit"
              >
                Log In
              </button>
            </form>
            <button
              onClick={handleClick}
              className="w-full py-3 px-4 mt-4 border border-transparent rounded-md text-white bg-blue-900 hover:bg-blue-500 focus:bg-blue-800"
            >
              Log In With Google
            </button>

            <button
              onClick={handleForgotPassword}
              className="w-full py-3 px-4 mt-2 border border-transparent rounded-md text-white bg-blue-900 hover:bg-blue-500 focus:bg-blue-800"
            >
              Forgot Password
            </button>
          </div>
        </div>
      )}
      {value && <Home />}
    </>
  );
};

export default Login;
