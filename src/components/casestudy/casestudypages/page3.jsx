import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page3 = () => {
  const Page3Data = {
    discovery: {
      name: "From Tranquil Tea Garden to a Beloved Destination",
      title: "Overview & Challenges",
      description: `
        The Chai Bagh, a unique tea garden in Jaipur, has become a beloved destination for tea enthusiasts and visitors seeking a peaceful environment filled with the aroma of freshly brewed tea. Before collaborating with House of Marktech, The Chai Bagh faced challenges including limited visibility in a competitive market, lack of customer engagement, and ineffective marketing strategies.
      `,
    },
    creation: {
      name: "Strategy Implementation: Elevating Brand & Engagement",
      title: "Building a Distinct Identity & Presence",
      description: `
        We addressed The Chai Bagh’s challenges with a comprehensive strategy focused on:
        - Developing a distinctive brand identity that reflects the charm of the tea garden.
        - Designing and developing a user-friendly website that highlights The Chai Bagh’s unique offerings, including tea menus, events, and booking options.
        - Implementing an SEO and content marketing strategy to boost organic visibility.
        - Launching an engaging social media strategy, featuring visually appealing posts, polls, and contests.
        - Partnering with influencers to create buzz and attract a broader audience.
        These initiatives helped elevate The Chai Bagh’s brand, engagement, and sales.
      `,
    },
    activation: {
      name: "Results: A Tea Garden's Success Story",
      title: "Measuring Success through Metrics",
      description: `
        The strategies implemented resulted in remarkable growth:
        - A 50% increase in website traffic within the first six months.
        - A 120% growth in social media followers, with significantly improved engagement.
        - A 30% increase in sales, attributed to increased foot traffic and online orders.
        The Chai Bagh’s transformation over the past year illustrates the impact of strategic branding and digital marketing.
      `,
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          From Tranquil Tea Garden to a Beloved Destination
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          The Chai Bagh Growth Journey
        </h1>
      </div>

      {/* Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page3Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page3Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page3Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page3Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page3Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page3Data.creation.description}
          </p>
        </div>
      </section>

      {/* Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page3Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page3Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page3Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next="ContentCreation" />
    </div>
  );
};

export default Page3;
