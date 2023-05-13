import React from "react";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const roomData = [
    {
      imageSrc: "https://wallpaperaccess.com/full/24328.jpg",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "https://wallpaperaccess.com/full/24327.jpg",
      title: "Premium Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "https://wallpaperaccess.com/full/24326.jpg",
      title: "Executive Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 px-4 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Fine Interior Rooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roomData.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
