import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Facebook, Phone } from "lucide-react";
import flag from "../assets/images/india falg.png";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/HOM logo.png";
export default function Footer({ mode = "dark", next }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNextPage, setShowNextPage] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submmit button");

    // Call backend API to send the confirmation email
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json().then((data) => {
        alert(
          "Subscription successful! Please check your email for confirmation."
        );
        form.reset();
      });
      if (result.success) {
        setMessage(
          "Subscription successful! Please check your email for confirmation."
        );
        alert(
          "Subscription successful! Please check your email for confirmation."
        );
      } else {
        setMessage("Subscription failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };
  const router = useNavigate();
  const routeMap = {
    About: "about",
    OurWork: "our-work",
    Solutions: "solutions",
    Blogs: "blogs",
    Careers: "careers", // Add the Careers page route here
    CaseStudy: "case-study",
    ContentCreation: "content_creation",
    SocialMedia: "social_media",
    PROutreach: "pr_outreach",
    Consultation: "consultation",
    Strategy: "strategy",
    WebsiteAndAppDevlopment: "website_and_app_development",
    VisualEffects: "visual_effects_animation_and_cgi_services",
    PreWeddingCinematics: "pre_wedding_cinematics",
    TrademarkAndIP: "trademarkandip",
    CorporateIdentityDecks: "corporateid",
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (next == undefined) {
        return;
      }
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      setScrollProgress(scrollPercentage);
      if (scrollPercentage > 95) {
        setShowNextPage(true);
      }
      if (scrollPercentage < 95) {
        setShowNextPage(false);
      }
      if (scrollPercentage > 98 && scrollPercentage<99) {
        // Pause at 95% for a moment
        document.body.style.overflow = "hidden"; // Disable further scrolling
        setTimeout(() => {
          document.body.style.overflow = ""; // Re-enable scrolling
        }, 1000); // Pause for 1 second (adjust as needed)
      }

      if (scrollPercentage >= 100) {
        document.body.style.transform = "translateY(-100vh)";
        document.body.style.transition = "transform 0.5s ease-in-out";
        setTimeout(() => {
          document.body.style.transform = "";
          document.body.style.transition = "";
          window.scrollTo(0, 0);
          router(`/${routeMap[next]}`);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router, next]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Newsletter subscription submitted");
  // };

  return (
    <>
      <footer
        className={`${
          mode === "dark" ? "bg-black text-white" : "bg-white text-black"
        } py-16 px-4 sm:px-6 lg:px-8 ${
          next == undefined ? "pb-12" : "pb-48"
        } border-t z-100`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} className="h-20 -ml-3 mb-5" alt="" />
            <h3 className="font-semibold mb-2">Office Address</h3>
            <p>1410p Gurgaon</p>
            <p>Sector 46, E block</p>
            <p>Bharat City Ghaziabad </p>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Socials</h3>
              <ul className="space-x-4 flex">
                <li>
                  <Link
                    to="https://x.com/houseofmarktech"
                    className="flex items-center"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/houseofmarktech"
                    className="flex items-center"
                  >
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.Linkedin.com/company/houseofmarktech"
                    className="flex items-center"
                  >
                    <Linkedin />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61566982289206 "
                    className="flex items-center"
                  >
                    <Facebook />
                  </Link>
                </li>
              </ul>

              <div className="flex gap-2 py-2 pt-6">
                <p className="text-2xl">
                  <Link to="mailto:Marketing@houseofmarktech.com">
                    <FaEnvelope />
                  </Link>
                </p>
                <p className="text-md">
                  <Link to="mailto:Marketing@houseofmarktech.com">
                    Marketing@houseofmarktech.com
                  </Link>
                </p>
              </div>

              <div className="flex gap-2 py-2">
                <p className="text-2xl">
                  <Link to="https://wa.me/9773989305">
                    <FaWhatsapp />
                  </Link>
                </p>
                <p className="text-md">
                  <Link to="https://wa.me/9773989305">+91 9773989305</Link>
                </p>
              </div>

              <div className="flex gap-2 py-2">
                <p>
                  <Link to="tel:8287108009">
                    <Phone />
                  </Link>
                </p>{" "}
                <p>
                  <Link to="tel:8287108009">+91 8287108009</Link>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termsandconditions" className="flex items-center">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="flex items-center">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cancellationPage" className="flex items-center">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to={"/frequently-asked-questions"} className="">
                  Frequently Asked Questions
                </Link>
              </li>

              <li>
                <Link to={"/careers"} className="">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Subscribe to our newsletter
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  onChange={handleEmailChange}
                  className="w-full pr-12 bg-gray-100 border-none outline-none pt-5 pb-5 pl-5 text-xl rounded-xl text-black"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 pr-5 text-black"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="mt-6 flex flex-col">
              <Link to={"/blogs"} className="my-2 font-semibold">
                Blogs
              </Link>
              <Link to={"/case-study"} className="my-2 font-semibold">
                Case Studies
              </Link>
              {/* <p className='my-2 font-semibold'>Case Studies</p> */}
              <a
                href="http://localhost/referralPage/"
                className="my-2 font-semibold"
              >
                Referral Program
              </a>

              <p className="my-2 font-semibold">ER Calculator</p>

              {/* <Link to={"/blogs"} className="my-2 font-semibold">
                Blogs
              </Link> */}
              {/* <Link to={"/case-study"} className="my-2 font-semibold">
                Case Studies
              </Link> */}

              {/* Added link to Careers page */}
              {/* <p className="my-2 font-semibold">Referral Program</p> */}
              {/* <p className="my-2 font-semibold">ER Calculator</p> */}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright of Byproduct Ventures LLP</p>
          <p className="mt-4 sm:mt-0">
            A recognised startup under Startup India
          </p>
          <p className="mt-4 sm:mt-0 flex items-center">
            Proudly made in &nbsp;{" "}
            <span>
              <img className="h-5 w-5" src={flag} alt="" />
            </span>
          </p>
        </div>
      </footer>
      {showNextPage && (
        <div className="fixed bottom-0 left-0 right-0 py-8 px-6 sm:px-16 flex justify-between items-center shadow-lg bg-black animate-fadeInUp duration-200">
          <div className="flex flex-col sm:flex-row sm:items-end">
            <span className="text-5xl text-white">{next}</span>
            <span className="text-xl animate-pulse duration-200 text-cyan-200 sm:ml-8">
              <span className="text-sm">Scroll More for</span> Next Page
            </span>
          </div>
          <div className="w-36 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${(scrollProgress - 95) * 20}%` }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
