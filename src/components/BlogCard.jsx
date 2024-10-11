import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ imageSrc, category, title, readTime, link }) => {
  return (
    <>
      <Link
        className="hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2"
        to={link}
      >
        <img
          className="w-full sm:w-[300px] h-[180px] rounded-lg"
          src={imageSrc}
          alt={title}
        />
        <h1 className="font-bold text-blue-800">{category}</h1>
        <h1 className="font-bold text-lg sm:text-xl">{title}</h1>
        <p>{readTime} min read</p>
      </Link>
    </>
  )
}

export default BlogCard
