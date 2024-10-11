import { useState } from 'react';

const BlogNav = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Blog Home'); // default category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // update selected category
    onCategorySelect(category); // pass selected category to parent
  };

  return (
    <div className="px-4 pt-20">
      <ul className="flex flex-wrap bg-blue-100 py-4 rounded-[50px] justify-center mx-auto w-full sm:w-[85%] md:w-[70%] lg:w-[65%]">
        <li className="px-2 py-2 sm:px-4 text-base sm:text-lg">
          <a
            className={`hover:text-blue-600 hover:font-semibold ${selectedCategory === 'Blog Home' ? 'text-blue-600 font-semibold' : ''}`}
            href="#"
            onClick={() => handleCategoryClick('Blog Home')}
          >
            Blog Home
          </a>
        </li>
        <li className="px-2 py-2 sm:px-4 text-base sm:text-lg">
          <a
            className={`hover:text-blue-600 hover:font-semibold ${selectedCategory === 'Marketing' ? 'text-blue-600 font-semibold' : ''}`}
            href="#"
            onClick={() => handleCategoryClick('Marketing')}
          >
            Marketing
          </a>
        </li>
        <li className="px-2 py-2 sm:px-4 text-base sm:text-lg">
          <a
            className={`hover:text-blue-600 hover:font-semibold ${selectedCategory === 'SEO' ? 'text-blue-600 font-semibold' : ''}`}
            href="#"
            onClick={() => handleCategoryClick('SEO')}
          >
            SEO
          </a>
        </li>
        <li className="px-2 py-2 sm:px-4 text-base sm:text-lg">
          <a
            className={`hover:text-blue-600 hover:font-semibold ${selectedCategory === 'Social Media' ? 'text-blue-600 font-semibold' : ''}`}
            href="#"
            onClick={() => handleCategoryClick('Social Media')}
          >
            Social Media
          </a>
        </li>
        <li className="px-2 py-2 sm:px-4 text-base sm:text-lg">
          <a
            className={`hover:text-blue-600 hover:font-semibold ${selectedCategory === 'Technology' ? 'text-blue-600 font-semibold' : ''}`}
            href="#"
            onClick={() => handleCategoryClick('Technology')}
          >
            Technology
          </a>
        </li>
        <li className="px-2 py-2 sm:px-4 text-base sm:text-lg">
          <a
            className={`hover:text-blue-600 hover:font-semibold ${selectedCategory === 'Visual Production' ? 'text-blue-600 font-semibold' : ''}`}
            href="#"
            onClick={() => handleCategoryClick('Visual Production')}
          >
            Visual Production
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogNav;
