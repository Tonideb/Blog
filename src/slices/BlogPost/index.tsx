import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */
const BlogPost = ({ slice }: BlogPostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Link
        href="/"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-12 group ml-36 pt-16"
      >
        <ChevronLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Blog
      </Link>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-emerald-600 leading-tight">
            <PrismicRichText field={slice.primary.title} />
          </h1>

          <div className="space-y-2">
            <div className="flex items-start flex-col gap-4 mt-4 mb-2">
              <time className="text-gray-600">
                <PrismicRichText field={slice.primary.date} />
              </time>
              <div className="text-center">
                <span className=" text-gray-700  text-md font-medium mr-2 px-1.5 rounded-full py-1">
                  <PrismicRichText field={slice.primary.tag} />
                </span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p>
                <PrismicRichText field={slice.primary.description} />
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;
