import React, { useState } from "react";
import BlogsCard from "./BlogsCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import BlogsCard from "../components/BlogsCard";

const CaseHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "HOSPITALITY",
    "FASHION",
    "HEALTH AND FITNESS",
    "REAL ESTATE ",
    "TECHNOLOGY",
    
  ]
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row mx-12 lg:mx-28 mt-32 mb-20 ">
        <div className="flex flex-col gap-8 lg:w-2/5">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold">Case Studies</h1>
            <h2 className="text-lg">
              How brands are establishing a name in the market using influencer
              marketing. Read quick analysis of the complete campaigns.
            </h2>
          </div>
            <h1 className="text-2xl font-bold">Topics</h1>
          <div className="flex flex-row flex-wrap w-full lg:flex-col gap-1 lg:items-start ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 lg:w-11/12 w-max text-left text-lg rounded-lg hover:text-white hover:!bg-blue-700 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <BlogsCard selectedCategory={selectedCategory} />
          
          
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CaseHome;
