import Navbar from "../components/Navbar";

import WorkHero from "../components/WorkHero";
import Footer from "../components/Footer";
import GoToTopButton from "../components/Gototop";
import WorkAreas from "../components/WorkAreas";
import VideoScroll from "../components/VideoScroll";

const OurWork = () => {
  return (
    <>
      <Navbar mode="dark" />
      <GoToTopButton />
      <WorkHero />
      <VideoScroll />
      <WorkAreas />
      <Footer mode="dark" next="Solutions" />
    </>
  );
};

export default OurWork;
