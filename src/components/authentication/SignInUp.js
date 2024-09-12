import React, { useState } from "react";
import { BG_IMG } from "../../utils/constants";

const SignInUp = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleFormName = () => {
    setSignInForm(!isSignInForm);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600">
      <img
        src={BG_IMG}
        alt="train"
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      />
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-96 max-w-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isSignInForm && (
            <div className="flex space-x-4 mb-4">
              <label className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </label>
              <label className="flex-1">
                <input
                  type="text"
                  name="cardID"
                  placeholder="Card ID"
                  className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </label>
            </div>
          )}

          <label className="block mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="block mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded w-full transition-colors duration-200"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={handleFormName} className="cursor-pointer text-indigo-600 hover:underline mt-4 text-center">
            {isSignInForm ? "New Customer? Click here" : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInUp;
