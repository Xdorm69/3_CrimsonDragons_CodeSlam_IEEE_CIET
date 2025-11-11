import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type BlogDataType = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
};

export default function BlogCard({ blog }: { blog: BlogDataType }) {
  return (
    <Card className="max-w-sm rounded-2xl overflow-hidden bg-transparent shadow-none border border-transparent group transition-colors duration-300">
      <div className=" group-hover:border-red-500 group-hover:border-10 border-10">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
      </div>
      <CardContent className="p-5 group-hover:text-red-500 transition-colors duration-300">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 group-hover:text-red-400 transition-colors duration-300">
          {blog.category}
        </p>
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {blog.excerpt}
        </p>
      </CardContent>
    </Card>
  );
}
