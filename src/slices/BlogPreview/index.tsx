"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BlogPreview = () => {
  // Dummy categories with "All" tab
  const categories = [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];

  // Blog posts with assigned categories
  const posts = [
    { id: 1, title: "Post 1", category: "Category 1", bgColor: "#3E8977" },
    { id: 2, title: "Post 2", category: "Category 2", bgColor: "#E75A82" },
    { id: 3, title: "Post 3", category: "Category 3", bgColor: "#F5B14C" },
    { id: 4, title: "Post 4", category: "Category 4", bgColor: "#4285F4" },
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="max-w-6xl mx-auto  py-2 h-full">
      {/* Navigation Tabs */}
      <div className="tabs mb-12">
        <div className="flex">
          <ul className="flex flex-wrap transition-all duration-300 overflow-hidden gap-x-4">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-block py-2 px-4 font-medium rounded-2xl transition-all duration-300 
                 ${selectedCategory === category ? "bg-black text-white" : "bg-white text-black"}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blog Posts Grid with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-1 mt-4">
        <AnimatePresence mode="wait">
          {posts
            .filter(
              (post) =>
                selectedCategory === "All" || post.category === selectedCategory
            )
            .map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/more-info" className="group">
                  <div
                    className="text-white p-6 flex flex-col h-[500px] rounded-xl"
                    style={{ backgroundColor: post.bgColor }}
                  >
                    <div>
                      <div className="flex gap-1 mb-4">
                        <div className="w-1 h-1 rounded-full bg-white" />
                        <div className="w-1 h-1 rounded-full bg-white" />
                        <div className="w-1 h-1 rounded-full bg-white" />
                      </div>
                      <h2 className="text-2xl font-medium mb-4 group-hover:underline">
                        {post.title}
                      </h2>
                      <p className="text-sm mb-4">Some Author</p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-sm opacity-80">Jan 30 2024</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogPreview;
