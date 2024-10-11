const Front1 = () => {
  return (
    <div className="flex flex-col w-[90vw] mx-auto">
      {" "}
      {/* Center the container */}
      {/* First Section: 40vh */}
      <div className="flex flex-col md:flex-row h-[40vh]">
        <div className="p-4 md:p-8 w-full md:w-[30%] flex flex-col gap-4 bg-black text-white">
          {" "}
          {/* Use responsive width */}
          <h4 className="text-xl md:text-2xl  text-white font-bold underline">
            WHAT WE DO
          </h4>{" "}
          {/* Responsive text size */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
            We redefine brand success through consulting and technology.
          </h1>
        </div>
        <div className="p-4 md:p-8 w-full md:w-[70%] flex flex-col gap-4 bg-blue-700">
          {" "}
          {/* Use responsive width */}
          <h4 className="text-xl md:text-2xl text-white font-bold underline">
            How?
          </h4>{" "}
          {/* Responsive text size */}
          <p className="text-sm md:text-lg leading-relaxed text-white">
            As a cutting-edge marketing consulting firm, we leverage AI-driven
            solutions to enhance your digital presence. Our services include
            website and app development, data analytics, strategic content
            creation, influencer marketing, and comprehensive social media
            management.
          </p>
        </div>
      </div>
      {/* Second Section: 60vh */}
      <div className="h-[60vh] w-full">
        <img
          src="https://growify.in/cdn/shop/files/About_02.jpg?v=1716550563&width=1800"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Front1;
