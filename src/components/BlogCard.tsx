interface BlogCardProps {
  backgroundColor: string;
  title: React.ReactNode;
  author: React.ReactNode;
  date: React.ReactNode;
  tag: React.ReactNode;
}

export default function BlogCard({
  backgroundColor,
  title,
  author,
  date,
  tag,
}: BlogCardProps) {
  return (
    <div className="max-w-7xl mx-auto h-full">
      <article
        className="relative rounded-xl px-6 py-8 min-h-[400px] h-full flex flex-col justify-between text-black"
        style={{ backgroundColor }}
      >
        {/* Decorative dots */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-black/20 rounded-full" />
        <div className="absolute top-4 right-4 w-2 h-2 bg-black/20 rounded-full" />

        {/* Content */}
        <div className="mt-32 space-y-4">
          <h3 className="text-[2.75rem] text-left leading-[1.1] font-light">
            {title}
          </h3>
          <hr className="bg-black/40 border-none h-[1px]" />

          <div className="space-y-2">
            <p className="text-black/80">{author}</p>
            <hr className="bg-black/40 border-none h-[.5px]" />

            <p className="text-black/80">{date}</p>
          </div>

          <hr className="bg-black/40 border-none h-[1px]" />

          <div className="pt-2 inline-flex">
            <span className="text-black bg-black/10 inline-block px-2 py-1 rounded">
              {tag}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
