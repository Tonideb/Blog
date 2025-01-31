import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";

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
            How Composer is Scaling to Meet Your Needs in 2024
          </h1>

          <div className="space-y-4">
            <div className="flex items-start flex-col gap-4 my-12">
              <time className="text-gray-600">Jan 30 2024</time>
              <div className="text-center">
                <span className="bg-gray-100 text-gray-700 border border-gray-400 text-xs font-medium mr-2 px-1.5 rounded-full py-1">
                  INFRA
                </span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p>Dear Composer Community,</p>

              <p>
                As we embark on 2024, let&apos;s take a moment to reflect and
                dream. Picture this: It&apos;s 2020, and a small team with a
                grand vision sets out to transform investing into a fun,
                stimulating, and creative experience. Fast forward to today, and
                Composer empowers you to create trading algorithms with AI,
                backtest them, and execute, all in one platform.
              </p>

              <p>
                The past years have been exhilarating. 2023 marked a pivotal
                chapter: Our &quot;Create with AI&quot; feature revolutionized
                automated strategy creation, our community database flourished
                with over 1200 strategies created by you, and we celebrated $2
                billion in automated trading volume.
              </p>

              <p>
                Our partnership with Apex, a titan in the financial world, and
                our recent expansion into automated trading in retirement
                accounts are testaments to our commitment to growth and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;
