/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import "../../styles/Bubbletopics.css";
import image from "../../assets/images/arrow.png";
import Modal from "./page/Modal";
import BubbleGrid from "./page/BubbleGrid";

// const names = [
//   "Design",
//   "Development",
//   "Marketing",
//   "Design",
//   "Development",
//   "Marketing",
//   "Design",
//   "Development",
//   "Marketing",
// ];

const SolutionsHome = () => {
  useEffect(() => {
            
    const svg = document.querySelector('svg.squiggle')
    const path = svg.querySelector('path');
  //   const about =document.querySelector('about')

    const scroll = () => {
      const distance = window.scrollY;
     
      const totalDistance = svg.clientHeight ;

      const percentage = distance / totalDistance; 
      // console.log(percentage)
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1-percentage-0.1)}`;
    };
    window.addEventListener('scroll', scroll);
  },[]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black px-6 sm:px-12 py-12 sm:py-24">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-center font-dela-gothic justify-start w-full sm:ml-8 z-10">
          <p
            className="w-[70%] text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-10 tracking-wide text-center sm:text-left leading-tight text-white mix-blend-difference"
            // style={{ fontFamily: "Inter, sans-serif" }}
          >
            Smart Growth starts here.
          </p>
          <img
            src={image}
            alt="Downward arrow"
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mt-8 sm:mt-0 sm:ml-0 z-10"
          />
        </div>

        {/* Description and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-end w-full space-y-8 sm:space-y-0 sm:space-x-10 mt-10">
          <p
            className="text-lg sm:text-2xl lg:text-4xl font-semibold text-gray-300 text-right z-10 mix-blend-difference"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Join over 550 Companies
          </p>
          <button
            className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white font-extrabold text-xl lg:text-2xl rounded-full border-2 border-transparent hover:border-white hover:scale-110 shadow-xl transition-transform duration-300"
            onClick={() => setIsModalOpen(true)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get a Proposal
          </button>
        </div>
      </div>

      <BubbleGrid />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <svg width="1386" height="2037" viewBox="0 0 1386 2037" fill="none" xmlns="http://www.w3.org/2000/svg " className='absolute top-0 left-0 w-full z-0 squiggle'>
      <path d="M982 -51C719.5 -185 -236.089 33.5155 78 731C184.5 967.5 427.764 996.907 562 967.5C808.5 913.5 1034.5 697 1210.5 791.5C1410.61 898.944 1293.5 1205 1041.5 1306.5C771 1428.5 365.5 1190 398.5 1323C431.011 1454.03 1262 1608.5 1193.5 1807C1157.54 1911.2 860 2003 571 1788.5C261.5 1527 54.0001 1923.5 248.5 2072" stroke="#dfff00" stroke-width="30" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default SolutionsHome;
