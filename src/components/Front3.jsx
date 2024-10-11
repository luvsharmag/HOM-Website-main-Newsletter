const Front3 = () => {
  return (
    <div className="flex flex-col w-[90vw] mx-auto">
      {" "}
      {/* Center the container */}
      {/* First Section: 40vh */}
      <div className="flex h-[40vh] flex-col md:flex-row">
        <div className="p-8 w-full md:w-[30%] flex flex-col gap-4 bg-black text-white">
          {" "}
          {/* Responsive width */}
          <h4 className="text-2xl text-white font-bold underline">
            WHO DO WE WORK WITH
          </h4>{" "}
          {/* Consistent text size */}
          <h1 className="text-3xl lg:text-4xl leading-tight">
            Our Tech Partners
          </h1>
        </div>
        <div className="p-8 w-full md:w-[70%] flex flex-col gap-4 bg-blue-700">
          {" "}
          {/* Responsive width */}
          <h4 className="text-2xl text-white font-bold underline">
            About Our Founders
          </h4>{" "}
          {/* Consistent text size */}
          <p className="text-2xl leading-relaxed text-white">
            Kriti Gupta <br />
            Shidharth Ganguly
          </p>
        </div>
      </div>
      {/* Second Section: 60vh */}
      <div className="h-[60vh] w-full">
        <img
          src="https://growify.in/cdn/shop/files/about_us_tech_partners.jpg?v=1716448106&width=1800"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Front3;
