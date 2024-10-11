import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import BlogNav from "./BlogNav";

const BlogHome = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Blog Home"); // default category

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        setMessage(
          "Subscription successful! Please check your email for confirmation."
        );
        alert(
          "Subscription successful! Please check your email for confirmation."
        );
        setEmail(""); // Reset email input
      } else {
        setMessage("Subscription failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  const blogs = [
    {
      imageSrc:
        "https://www.webfx.com/wp-content/uploads/2019/10/052435_voice_search_statistics-1024x462.png",
      category: "Marketing",
      title: "What Is Private Equity Due Diligence?",
      readTime: 3,
      link: "/blogs/marketing-blog1",
    },
    {
      imageSrc:
        "https://www.webfx.com/wp-content/uploads/2023/10/072427_hire_an_seo_company-1024x462.png",
      category: "SEO",
      title: "When to Hire an SEO Company",
      readTime: 3,
      link: "/blogs/seo-blog1",
    },
    {
      imageSrc:
        "https://www.webfx.com/wp-content/uploads/2023/10/072427_hire_an_seo_company-1024x462.png",
      category: "SEO",
      title: "How to Optimize for Voice Search",
      readTime: 3,
      link: "/blogs/seo-blog2",
    },
    {
      imageSrc:
        "https://www.webfx.com/wp-content/uploads/2023/10/072427_hire_an_seo_company-1024x462.png",
      category: "Technology",
      title: "The Future of AI in Marketing",
      readTime: 3,
      link: "/blogs/technology-blog1",
    },
    {
      imageSrc:
        "https://www.webfx.com/wp-content/uploads/2023/10/072427_hire_an_seo_company-1024x462.png",
      category: "Visual Production",
      title: "The Art of Visual Storytelling",
      readTime: 3,
      link: "/blogs/visual-production-blog1",
    },
    // Add more blog data here as needed
  ];

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "Blog Home"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <BlogNav onCategorySelect={setSelectedCategory} /> {/* Pass down the function */}
      <div className="mx-4 sm:mx-6 lg:mx-24 mt-12 lg:mt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl flex font-bold">
          Smart marketing starts Here
          <span className="relative top-4 sm:top-8 left-2 sm:left-3 w-[50px] sm:w-[70px] lg:w-[100px]">
            <img
              src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/masthead/orange-arrow.png"
              alt="Arrow"
            />
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-12 gap-8 items-center lg:items-start">
          <h3 className="text-lg sm:text-xl lg:text-2xl leading-relaxed pr-0 lg:pr-14 w-full lg:w-[40%]">
            Join over 200,000 marketing managers, and get the best digital
            marketing insights, strategies, and tips delivered straight to your
            inbox!
          </h3>
          <form onSubmit={handleSubmit} className="w-full lg:w-[60%]">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                className="w-full sm:w-[300px] lg:w-[350px] h-[50px] border-2 border-solid rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                value={email}
                onChange={handleEmailChange}
                name="email"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-700 px-8 sm:px-12 lg:px-16 text-lg lg:text-xl rounded-md text-white hover:bg-blue-900 py-3 lg:py-4 transition-all"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Blog Section */}
        <div className="my-16">
          <h1 className="text-2xl sm:text-3xl font-bold my-8 flex gap-2 items-center">
            <FaHandPointRight className="text-blue-700" /> {selectedCategory} Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  imageSrc={blog.imageSrc}
                  category={blog.category}
                  title={blog.title}
                  readTime={blog.readTime}
                  link={blog.link}
                />
              ))
            ) : (
              <p>No blogs available for this category.</p>
            )}
          </div>
        </div>
      </div>

      <Footer next="CaseStudy" />
    </>
  );
};

export default BlogHome;
