import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../page/BubbleComponent";


// Import the trademark and IP data from a JSON file or define it here
const trademarkData = {
  trademark_and_ip: [
    {
      name: "Trademark Services",
      quote: "Protect Your Brand's Unique Identity!",
      description:
        "Ensure your brand stands out with our comprehensive trademark services. We expertly handle the intricacies of trademark registration and enforcement, safeguarding your brand name and logo from infringement. With our support, you can confidently protect your intellectual property and maintain your competitive edge in the market.",
    },
    {
      name: "IP Prosecution",
      quote: "Turning Legal Jargon into Your Secret Weapon!",
      description:
        "Our experts handle all aspects of intellectual property prosecution, from filing to enforcement. We take the headache out of the legalese, ensuring that your IP rights are robust and defendable. Let us do the heavy lifting while you bask in the glory of your innovative ideas.",
    },
    {
      name: "Litigation Services",
      quote: "Because Sometimes You Have to Fight for Your Rights!",
      description:
        "When push comes to shove, our litigation team steps in to protect your interests. Whether defending against infringement or pursuing legal action, we bring the expertise and tenacity to navigate the courtroom with confidence. After all, protecting what’s yours shouldn’t feel like a losing battle.",
    },
  ],
};

const TrademarkAndIP = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Trademark And IP
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Trademark & IP Sections */}
      {trademarkData.trademark_and_ip.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] ${
            index % 2 === 0 ? "bg-[#CEA5AD]" : "bg-[#70AABC]"
          }`}
        >
          <div className="w-full lg:w-[70%] text-center lg:text-left">
            <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
              {item.name}
            </h2>
            <h3 className="text-[1.5rem] font-semibold text-[#dfff00] italic lg:pl-20 mb-5">
              {item.quote}
            </h3>
            <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
              {item.description}
            </p>
          </div>
        </section>
      ))}

      <Footer next="CorporateIdentityDecks" />
    </div>
  );
};

export default TrademarkAndIP;
