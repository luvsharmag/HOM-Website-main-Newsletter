import { Link } from "react-router-dom"; // Import Link from react-router-dom

const blogsData = [
  {
    hashtag: "HOSPITALITY",
    title:
      "From Ground Level to New Heights: The Rooftop Heaven Growth Journey!",
    imgUrl: "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "Rooftop Heaven",
    date: "Feb 14, 2024",
    link: "/casestudy/page1", // Change to a route instead of file path
    category: "HOSPITALITY",
  },
  {
    hashtag: "HOSPITALITY",
    title:
      "From Local Gem to Must-Visit Destination: Desi That's Journey of Transformation",
    imgUrl: "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "Desi Thaat",
    date: "Feb 14, 2024",
    link: "/casestudy/page2", // Change to a route instead of file path
    category: "HOSPITALITY",
  },
  {
    hashtag: "HOSPITALITY",
    title: "The Chai Bagh",
    imgUrl: "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "The Chai Bagh",
    date: "Feb 14, 2024",
    link: "/casestudy/page3", // Change to a route instead of file path
    category: "HOSPITALITY",
  },
  {
    hashtag: "TECHNOLOGY",
    title: "Industry: Legal Services",
    imgUrl: "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "Justispherex Legal",
    date: "Feb 14, 2024",
    link: "/casestudy/page4", // Change to a route instead of file path
    category: "TECHNOLOGY",
  },
  {
    hashtag: "TECHNOLOGY",
    title: "Industry: Eco-friendly Products",
    imgUrl: "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "HomesunNature",
    date: "Feb 14, 2024",
    link: "/casestudy/page5", // Change to a route instead of file path
    category: "TECHNOLOGY",
  },
];

const BlogsCard = ({ selectedCategory = "All" }) => {
  const filteredPosts =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((data) => data.category === selectedCategory);

  return (
    <div className="lg:mt-36 mt-16 lg:ml-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredPosts.map((data) => (
          <div key={data.title}>
            <Link
              to={data.link}
              className="flex flex-col rounded-lg shadow-2xl hover:shadow-[0px_0px_20px] hover:scale-105 transition duration-300 ease-in-out h-full"
            >
              <div>
                <img
                  className="w-full rounded-t-lg"
                  src={data.imgUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 mt-3 p-5">
                <h4 className="text-sm bg-blue-300 w-full text-black text-center px-2 py-1 rounded-lg">
                  {data.hashtag}
                </h4>
                <h1 className="font-bold text-black">{data.title}</h1>
                <h3 className="text-lg">{data.author}</h3>
                <p className="text-black">{data.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;
