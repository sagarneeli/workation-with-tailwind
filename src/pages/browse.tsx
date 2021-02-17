import React from "react";
import DestinationCard from "src/components/DestinationCard";
import popularDestinations from "src/data/popularDestinations";

const sizeClasses = {
  height: "h-32",
  width: "w-32",
};

export default function Browse() {
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-xl text-gray-900">Popular destinations</h2>
      <p className="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {popularDestinations.map((destination) => (
          <DestinationCard destination={destination} key={destination.city} />
        ))}
      </div>
    </div>
  );
}
