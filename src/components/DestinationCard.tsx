import React from "react";

const sizeClasses = {
  height: "h-32",
  width: "w-32",
};

export default function DestinationCard({ destination }) {
  return (
    <>
      <div className="flex flex-col justify-center bg-white items-center max-w-sm mx-auto my-8">
        <img
          className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
          src={destination.imageUrl}
          alt={destination.imageAlt}
        />
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
            {destination.city}
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
            <h1 className="text-gray-800 font-bold ">
              ${destination.averagePrice} / night average
            </h1>
            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
              Explore {destination.propertyCount} properties
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
