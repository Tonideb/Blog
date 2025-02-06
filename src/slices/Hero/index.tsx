import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import Link from "next/link";

import { Twitter } from "lucide-react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  return (
<Bounded as="section" yPadding="sm">

    <section className="relative  text-black md:max-w-7xl lg:max-w-7xl mx-auto mb-24 pt-8">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-5xl font-normal mb-6">
            <PrismicRichText field={slice.primary.title} />
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            <PrismicRichText field={slice.primary.description} />
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-[#1DA1F2] hover:opacity-80">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-[#6441A5] hover:opacity-80">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
              </Bounded>

  );
};

export default Hero;
