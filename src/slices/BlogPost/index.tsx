import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */
const BlogPost = ({ slice }: BlogPostProps): JSX.Element => {
  return (

      <Bounded as="section" yPadding="sm">

    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-24"
      >
      <div className="bg-white max-w-6xl mx-auto items-center border  shadow-sm rounded-2xl py-6">
        <Link
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-12 group ml-36 pt-16"
          >
          <ChevronLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Blog
        </Link>

        <article className="max-w-4xl mx-auto px-4 py-8">
          {slice.primary.image && (
            <div className="w-full mr-auto flex flex-row justify-center items-center mb-6">
              <PrismicNextImage className="w-auto h-full object-cover" field={slice.primary.image} />
            </div>
          )}
          <div className="space-y-12">
            <h2 className="text-6xl text-left font-thin font-sans text-emerald-600 leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-4 gap-6 mt-6">
              {/* First Column (1/4) */}
              <div className="col-span-1 space-y-1">
                <div className="flex items-start flex-col gap-4">
                  <div className="text-center">
                    <span className="text-gray-700 text-md font-medium mr-2 px-1.5 rounded-full py-1">
                      <PrismicRichText field={slice.primary.author} />
                    </span>
                  </div>
                  <time className="text-gray-600">
                    <PrismicRichText field={slice.primary.date} />
                  </time>
                  <div className="text-center">
                    <span className="text-gray-700 text-md font-medium mr-2 px-1.5 rounded-full py-1">
                      <PrismicRichText field={slice.primary.tag} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Second Column (3/4) */}
              <div className="col-span-3 prose prose-gray max-w-none">
                <hr className="bg-black/40 border-none h-[1px]" />
                <p>
                  <PrismicRichText field={slice.primary.description} />
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
          </Bounded>
  );
};

export default BlogPost;
