import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] gap-2">
        <img
          className="row-span-3 object-cover w-full h-full rounded-md shadow-md"
          src="https://wallpapercave.com/wp/wp4069451.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-md shadow-md"
          src="https://www.wallpapertip.com/wmimgs/98-988379_maldives-beach-wallpaper-hd.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-md shadow-md"
          src="https://wallpapercrafter.com/desktop/27946-maldives-tropical-beach-summer-4k.jpg"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full rounded-md shadow-md"
          src="https://cdn.wallpapersafari.com/3/36/Wm0qFj.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-md shadow-md"
          src="https://cutewallpaper.org/21/maldives-wallpaper-hd/28-Hot-Maldives-Pictures-EDW19-Full-HD-Quality-Wallpapers.jpg"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Plan Your Next Trip
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className="text-lg border border-gray-500 rounded-md py-2 px-4 mr-4 hover:bg-gray-50 hover:text-gray-800">
            Learn More
          </button>
          <button className="text-lg bg-black text-white rounded-md py-2 px-4 hover:shadow-lg">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
