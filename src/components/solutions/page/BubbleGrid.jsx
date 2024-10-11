import { Link } from "react-router-dom"; // Import Link for routing
// import { useEffect } from "react";
// import anime from "animejs";

const BubbleGrid = () => {
  // Create an array of objects containing names and their respective routes
  const bubbleData = [
    { name: "Branding", path: "/branding" },
    { name: "Content Creation", path: "/content_creation" },
    { name: "Social Media", path: "/social_media" },
    { name: "PR Outreach", path: "/pr_outreach" },
    { name: "Consultation", path: "/consultation" },
    { name: "Strategy", path: "/strategy" },
    { name: "Website & App Development", path: "/website_and_app_development" },
    {
      name: "Visual Effects, Animation, & CGI Services",
      path: "/visual_effects_animation_and_cgi_services",
    },
    { name: "Pre-Wedding Cinematics", path: "/pre_wedding_cinematics" },
    { name: "Trademark and IP", path: "/trademarkandip" },
    { name: "Corporate Identity Decks", path: "/corporateid" },
  ];



  return (
    <div className=" flex flex-wrap justify-center gap-6 lg:gap-10 p-5 sm:px-10 py-24 bg-blue-600">
      {bubbleData.map((bubble, index) => (
        <Link
          key={index}
          to={bubble.path} // Use the path for navigation
          className="flex justify-center items-center z-10" // Flex container to center the bubble
        >
          <div className="float bubble font-semibold text-center w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex justify-center items-center bg-blue-500 text-white text-xl rounded-full"
            style={{ animationDelay: `${index * 0.5}s` }}>
            {bubble.name}
          </div>
        </Link>
      ))}
      

    </div>
  );
};

export default BubbleGrid;
