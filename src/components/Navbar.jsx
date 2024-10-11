import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import music from "../assets/music.mp3";
import logo from "../assets/images/HOM logo.png";

export default function Navbar({ mode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/our-work" }, // Adjusted href to a valid route
    { name: "Solutions", href: "/solutions" }, // Link to Solutions route
    { name: "Blogs", href: "/blogs" }, // Link to Solutions route
    { name: "Case Study", href: "/case-study" },
    { name: "Referral", href: "/referralpage" },
    { name: "Login", href: "/login" },
  ];

  const handleButtonClick = () => {
    window.location.href = "../indextalk.html";
  };

  return (
    <nav className={`py-8 px-6 md:px-12 md:py-4  flex justify-between items-center w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled?'bg-transparent ':' lg:bg-black lg:bg-opacity-50'}`}>
      {/* Logo */}
      <Link to={"/"} className={` ${isScrolled ? "opacity-0" : ""}`}>
        <img src={logo} className="h-12 rounded-sm " alt="" />
      </Link>
      {/* Right-side buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        {!isScrolled &&
          navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="lg:px-3 xl:px-3  py-3 text-gray-400 hover:underline rounded-full font-semibold transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        <audio ref={audioRef} className="hidden" src={music}></audio>
        <button
          onClick={toggleMusic}
          className="p-3 rounded-full text-white bg-blue-700 hover:bg-blue-950 transition-all duration-500"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <div className="font-bold px-2 transition-all duration-200 animate-fadeInUp">
              ll
            </div>
          ) : (
            <div className="text-white font-bold px-2">&#119136;</div>
          )}
        </button>
        <Link
          to="/talk-to-us"
          // onClick={handleButtonClick}
          className="mt-2 px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-blue-700 font-bold transition-all duration-500"
        >
          Let&apos;s Talk
        </Link>

        {/* Menu Button */}
        <div className="relative">
          {isScrolled && (
            <button
              className="px-5 py-3 bg-gray-300 text-black rounded-full hover:bg-white font-bold animate-fadeInUp transition-all duration-200"
              onClick={toggleMenu}
            >
              ☰
            </button>
          )}

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border z-100 border-gray-200 rounded-md shadow-lg">
              <ul className="flex flex-col">
                {isScrolled &&
                  navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <div className="relative">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-white font-bold transition-all duration-500"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute p-2 flex flex-col right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
              <audio ref={audioRef} className="hidden" src={music}></audio>
              <button
                onClick={toggleMusic}
                className="p-3 rounded-full text-white bg-blue-700 hover:bg-blue-950 transition-all duration-500"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? (
                  <div className="font-bold px-2 transition-all duration-200 animate-fadeInUp">
                    ll
                  </div>
                ) : (
                  <div className="text-white font-bold px-2">&#119136;</div>
                )}
              </button>
              <Link
                to="/talk-to-us"
                // onClick={handleButtonClick}
                className="mt-2 px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-blue-700 font-bold transition-all duration-500"
              >
                Let&apos;s Talk
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
