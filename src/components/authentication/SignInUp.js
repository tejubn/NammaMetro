import React, { useRef, useState } from "react";
import { BG_IMG } from "../../utils/constants";
import { validateForm } from "../../utils/validation";

const SignInUp = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "", name: "", cardId: "" });
  
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const cardId = useRef(null);

  const handleFormName = () => {
    setSignInForm(!isSignInForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form and get errors
    const validationErrors = validateForm(
      email.current.value,
      password.current.value,
      name.current?.value, // Only check name if it's not a sign-in form
      cardId.current?.value // Only check cardId if it's not a sign-in form
    );

    // Update errors state
    setErrors(validationErrors || {});

    // If there are no errors, you can proceed with form submission
    if (!validationErrors) {
      // Proceed with form submission logic
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600">
      <img
        src={BG_IMG}
        alt="train"
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      />
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-96 max-w-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isSignInForm && (
            <div className="flex space-x-4 mb-4">
              <label className="flex-1">
                <input
                  type="text"
                  name="name"
                  ref={name}
                  placeholder="Name"
                  className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <p className="text-red-500 text-sm">{errors.name}</p>
              </label>
              <label className="flex-1">
                <input
                  type="text"
                  name="cardID"
                  ref={cardId}
                  placeholder="Card ID"
                  className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <p className="text-red-500 text-sm">{errors.cardId}</p>
              </label>
            </div>
          )}

          <label className="block mb-4">
            <input
              type="email"
              name="email"
              ref={email}
              placeholder="Email"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </label>

          <label className="block mb-6">
            <input
              type="password"
              name="password"
              ref={password}
              placeholder="Password"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-red-500 text-sm">{errors.password}</p>
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
