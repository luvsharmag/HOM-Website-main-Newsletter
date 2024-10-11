import React from "react";

const FeaturedWork = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Featured Work</h1>
      <p className="text-gray-600 mb-8">
        A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH FORWARD-THINKING
        CLIENTS AND FRIENDS OVER THE YEARS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-purple-100 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <img
            src="path/to/synthetic-human.jpg"
            alt="Synthetic Human"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold">Synthetic Human</h2>
          <p className="text-gray-500">WEB • DESIGN • DEVELOPMENT • 3D</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <img
            src="path/to/porsche-dream-machine.jpg"
            alt="Porsche: Dream Machine"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold">Porsche: Dream Machine</h2>
          <p className="text-gray-500">
            CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
