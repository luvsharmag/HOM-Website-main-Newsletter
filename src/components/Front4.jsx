const Front4 = () => {
  return (
    <div className="flex flex-col w-[90vw] mx-auto">
      {" "}
      {/* Center the container */}
      {/* First Section: 40vh */}
      <div className="flex flex-col md:flex-row h-[40vh]">
        <div className="p-4 md:p-8 w-full md:w-[30%] flex flex-col gap-4 bg-black text-white">
          {" "}
          {/* Use responsive width */}
          <h4 className="text-xl md:text-2xl text-white font-bold underline">
            VISION
          </h4>{" "}
          {/* Responsive text size */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
            The Vision is to raise the industry standard and lead it being the
            #1 in the market.
          </h1>
        </div>
        <div className="p-4 md:p-8 w-full md:w-[70%] flex flex-col gap-4 bg-blue-700">
          {" "}
          {/* Use responsive width */}
          <h4 className="text-xl md:text-2xl text-white font-bold underline">
            MISSION
          </h4>{" "}
          {/* Responsive text size */}
          <p className="text-base md:text-lg leading-relaxed text-white">
            The Mission of this venture is to liberate the hinderances an
            entrepreneur has to face while building his venture so they can
            focus on improving their products rather than stressing about brand
            building.
          </p>
        </div>
      </div>
      {/* Second Section: 60vh */}
      <div className="h-[60vh] w-full">
        <img
          className="object-cover w-full h-full"
          src="https://growify.in/cdn/shop/files/about_us_office.jpg?v=1716295604&width=1800"
          alt=""
        />
      </div>
    </div>
  );
};

export default Front4;
