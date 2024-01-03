import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import BlogCard from "../components/post/Post";

const BlogPosts = () => {
  const posts = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "How to use search engine optimization to drive sales",
      date: "March 10, 2020",
      content:
        "Optio cum necessitatibus dolor voluptatum provident commodi et...",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      title: "Improve your customer experience",
      date: "February 12, 2020",
      content:
        "FEST Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus...",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="container-of-posts grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </motion.div>
  );
};

const BlogPage = () => {
  return (
    <div className="mx-auto px-4 pt-10 dark:bg-gray-900">
      <h1 className="text-3xl text-primary-950 font-bold mb-8 dark:text-primary-50">
        Latest Posts
      </h1>
      <BlogPosts />
    </div>
  );
};

export default BlogPage;
