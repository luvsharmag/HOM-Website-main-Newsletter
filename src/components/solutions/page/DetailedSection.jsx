// DetailedSection.jsx
import BubbleComponent from "./BubbleComponent";
import imageBrain from "../../../assets/images/brain.png";
import imageEye from "../../../assets/images/eye.png";
import imageMouth from "../../../assets/images/mouth.png";

const DetailedSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>

      {/* Content Section 1 */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            Rousers activism <br /> makes people <br /> think.
          </h2>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes
            to grab peoples attention and make them stop and think. Rouser does
            this to wake as many people as possible to the burning need for
            action on climate change and eco⁠-⁠collapse.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={imageBrain}
            alt="Rousers activism makes people think."
            className="w-[80%] sm:w-[70%] lg:w-full h-auto"
          />
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            Change only happens <br /> when everyone <br /> is paying attention.
          </h2>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes
            to grab peoples attention and make them stop and think. Rouser does
            this to wake as many people as possible to the burning need for
            action on climate change and eco⁠-⁠collapse.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={imageEye}
            alt="Rousers activism makes people think."
            className="w-[80%] sm:w-[70%] lg:w-full h-auto mb-5"
          />
        </div>
      </section>

      {/* Content Section 3 */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            Get noisy as hell,
            <br /> our lives depend <br /> on it.
          </h2>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes
            to grab peoples attention and make them stop and think. Rouser does
            this to wake as many people as possible to the burning need for
            action on climate change and eco⁠-⁠collapse.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={imageMouth}
            alt="Rousers activism makes people think."
            className="w-[80%] sm:w-[70%] lg:w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default DetailedSection;

// import { useParams } from "react-router-dom";
// import BubbleComponent from "./BubbleComponent";

// const bubbleData = [
//   {
//     name: "Brain",
//     title: "Rousers activism makes people think.",
//     image: "path/to/brain.png", // Update with actual path
//     bgColor: "#CEA5AD",
//     description:
//       "Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes to grab people's attention and make them stop and think.",
//   },
//   {
//     name: "Eye",
//     title: "Change only happens when everyone is paying attention.",
//     image: "path/to/eye.png", // Update with actual path
//     bgColor: "#70AABC",
//     description:
//       "Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes to grab people's attention and make them stop and think.",
//   },
//   {
//     name: "Mouth",
//     title: "Get noisy as hell, our lives depend on it.",
//     image: "path/to/mouth.png", // Update with actual path
//     bgColor: "black",
//     description:
//       "Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes to grab people's attention and make them stop and think.",
//   },
// ];

// const DetailedSection = () => {
//   const { name } = useParams();
//   const bubble = bubbleData.find((b) => b.name === name);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
//         <div className="relative pt-hero-padding z-hero">
//           <BubbleComponent />
//         </div>
//         <h1 className="text-6xl font-bold text-center z-hero mt-8">
//           Not sorry to <br /> burst your bubble
//         </h1>
//       </section>

//       {/* Content Section */}
//       <section
//         className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh]"
//         style={{ backgroundColor: bubble.bgColor }}
//       >
//         <div className="w-full lg:w-[70%] text-center lg:text-left">
//           <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
//             {bubble.title}
//           </h2>
//           <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
//             {bubble.description}
//           </p>
//         </div>
//         <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
//           <img
//             src={bubble.image}
//             alt={bubble.title}
//             className="w-[80%] sm:w-[70%] lg:w-full h-auto"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DetailedSection;
