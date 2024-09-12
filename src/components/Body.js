// Body.js
import React from 'react';

const Body = ({ currentFormComponent }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden relative">
      <img 
        src="https://img.freepik.com/premium-photo/metro-train-hd-wallpaper-photographic-image_993236-17869.jpg?w=996" 
        alt="train" 
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 p-6">
        </div>
    </div>
  );
};

export default Body;
