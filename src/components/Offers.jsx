import React from "react";

const Offers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Booking Incentives
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              gravida lacus. Fusce eu diam quis turpis iaculis suscipit eu ac
              sapien.
            </p>
          </div>
          <div className="bg-gray-200 p-4">
            <p className="text-lg font-bold text-gray-800">
              10% off your first booking
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Competitive Rates
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              gravida lacus. Fusce eu diam quis turpis iaculis suscipit eu ac
              sapien.
            </p>
          </div>
          <div className="bg-gray-200 p-4">
            <p className="text-lg font-bold text-gray-800">
              Starting at just $99/night
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Book With Flexibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              gravida lacus. Fusce eu diam quis turpis iaculis suscipit eu ac
              sapien.
            </p>
          </div>
          <div className="bg-gray-200 p-4">
            <p className="text-lg font-bold text-gray-800">
              Cancel for free up to 24 hours before your stay
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Trip Insurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              gravida lacus. Fusce eu diam quis turpis iaculis suscipit eu ac
              sapien.
            </p>
          </div>
          <div className="bg-gray-200 p-4">
            <p className="text-lg font-bold text-gray-800">
              Protect your trip with our comprehensive insurance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
