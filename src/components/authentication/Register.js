import React, { useState } from 'react';
import axios from 'axios';
import { validateForm } from '../../utils/validation'; // Import validation functions

const Register = () => {
  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    cardId: '',
    password: '',
    confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission if there are validation errors
    }

    try {
      const response = await axios.post('http://localhost:8000/users', formData);
    //   console.log('Success:', response.data);
      setFormData(initialFormData);
      setErrors({}); // Clear errors if submission is successful
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <img 
        src="https://img.freepik.com/premium-photo/metro-train-hd-wallpaper-photographic-image_993236-17869.jpg?w=996" 
        alt="train" 
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Container for horizontal layout */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone:
              </label>
              <input
                id="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="cardId">
                Card Id:
              </label>
              <input
                id="cardId"
                type="text"
                value={formData.cardId}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              {errors.cardId && <p className="text-red-500 text-sm">{errors.cardId}</p>}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#7A1CAC] hover:bg-[#AD49E1] text-white py-2 px-4 rounded w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
