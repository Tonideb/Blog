"use client";

import { asText, type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/Heading";
import CustomHeading from "@/components/CustomHeading";

type BlogPreviewProps = SliceComponentProps<Content.BlogPreviewSlice>;

const BlogPreview = ({ slice }: BlogPreviewProps) => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  const components = {
    heading2: ({ children }: any) => <CustomHeading>{children}</CustomHeading>,
  };

  // Extract categories dynamically from Prismic
  const categories = [
    "All", // Add "All" category manually
    ...new Set(slice.primary.categories.map((item) => asText(item.category))),
  ];

  console.log(categories, "CATEGORIES");

  return (
    <section className="max-w-7xl mx-auto  py-2 h-full">
      {/* Navigation Tabs */}
      <div className="tabs mb-12">
        <div className="flex">
          <ul className="flex flex-wrap gap-x-4 transition-all duration-300 overflow-hidden">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-block py-2 px-4 font-medium rounded-3xl transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
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
          {slice.primary.blogcard
            .filter(
              (item) =>
                selectedCategory === "All" ||
                asText(item.category) === selectedCategory
            )
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PrismicNextLink field={item.link}>
                  <div
                    className="text-white p-6 flex flex-col h-[500px] rounded-xl w-full group"
                    style={{ backgroundColor: `${asText(item.color)}` }}
                  >
                    <div>
                      <div className="flex gap-1 mb-4">
                        <div className="w-1 h-1 rounded-full bg-white" />
                        <div className="w-1 h-1 rounded-full bg-white" />
                        <div className="w-1 h-1 rounded-full bg-white" />
                      </div>

                      <h3 className="text-left mb-4 group-hover:underline transition duration-300">
                        <PrismicRichText
                          field={item.title}
                          components={components}
                        />
                      </h3>

                      <p className="text-md mb-4">
                        <PrismicRichText field={item.author} />
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-md opacity-80">
                        <PrismicRichText field={item.date} />
                      </p>
                    </div>
                  </div>
                </PrismicNextLink>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogPreview;
