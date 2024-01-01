import React from "react";

const BlogCard = ({ imgSrc, title, date, content }) => {
  return (
    <div className="bg-white hover:scale-[1.02] cursor-pointer duration-100 dark:bg-gray-800 shadow-lg rounded-lg p-4 max-w-md">
      <img
        className="rounded-lg w-full h-32 object-cover mb-4"
        src={imgSrc}
        alt={title}
      />
      <h2 className="text-xl text-primary-950 font-bold dark:text-primary-50 mb-2">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-2">{date}</p>
      <p className="text-gray-600 dark:text-gray-400">{content}</p>
    </div>
  );
};

export default BlogCard;
