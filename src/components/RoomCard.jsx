import React from "react";

const RoomCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
        <button className="mt-4 py-2 px-4 bg-black hover:bg-indigo-950 text-white font-bold rounded-lg shadow-md transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
