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
        className=""
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
                <PrismicNextImage
                  className="w-auto h-full object-cover"
                  field={slice.primary.image}
                />
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
                  <div className="flex items-start flex-col border-t border-black/40 pt-4 w-full">
                    <div className="text-start w-full pb-4">
                      <p className="text-gray-700 text-md font-thin mr-2 px-1.5 rounded-full">
                        <PrismicRichText field={slice.primary.author} />
                      </p>
                    </div>
                    <div className="text-start border-t border-black/40 py-4 w-full">
                      <p className="text-gray-700 text-md font-thin mr-2 px-1.5 rounded-full w-full">
                        <PrismicRichText field={slice.primary.date} />
                      </p>
                    </div>
                    <div className="text-start border-t border-black/40 py-4 w-full">
                      <p className="bg-black/10 inline-block px-2 py-1 rounded text-md  font-thin mr-2">
                        <PrismicRichText field={slice.primary.tag} />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Column (3/4) */}
                <div className="col-span-3 prose prose-gray max-w-none">
                  <hr className="bg-black/40 border-none h-[1px]" />
                  <p className="py-4">
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
