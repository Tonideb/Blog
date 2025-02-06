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
import BlogCard from "@/components/BlogCard";
import { Bounded } from "@/components/Bounded";

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

  // console.log(categories, "CATEGORIES");

  return (
    <Bounded as="section" yPadding="sm">
      <section className="max-w-7xl mx-auto  mb-12 h-full">
        {/* Blog Posts Grid with Animation */}

        <div className="my-16">
          <h2 className="intro-heading font-light font-sans text-black">
            Blog
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs mb-8">
          <div className="flex justify-start">
            <ul className="flex flex-wrap justify-start items-center gap-2 sm:gap-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 mt-4 w-full">
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
                  whileHover={{
                    y: -10,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                  className="h-full"
                >
                  <PrismicNextLink field={item.link}>
                    <BlogCard
                      backgroundColor={asText(item.color)}
                      title={
                        <PrismicRichText
                          field={item.title}
                          components={components}
                        />
                      }
                      author={<PrismicRichText field={item.author} />}
                      date={<PrismicRichText field={item.date} />}
                      tag={<PrismicRichText field={item.tag} />}
                    />
                  </PrismicNextLink>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </section>
    </Bounded>
  );
};

export default BlogPreview;
