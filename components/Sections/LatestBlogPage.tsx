import React from "react";
import MaxWidthWrapper from "../Wrappers/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "../Blogs/BlogCard";

const LatestBlogPage = () => {
  const blogData = [
    {
      id: 1,
      title: "The Art of Custom Cycling Kits",
      author: "The Heavy Pedal Team",
      date: "2025-10-12",
      category: "Design",
      image: "/Blog/blog1.webp",
      excerpt:
        "Discover how our team creates unique, high-performance cycling kits for every ride. From design sketches to hand-stitched perfection, learn what makes our apparel stand out.",
      content:
        "Every cyclist deserves a kit that reflects their passion. At The Heavy Pedal, our designers start each project with a creative spark — translating a rider’s story into colors, textures, and technical fabric. We believe that performance wear should not only function well but also inspire confidence. Every piece goes through multiple design iterations, ensuring comfort, breathability, and durability. Whether you're racing or riding for fun, our custom kits are made to match your motion.",
    },
    {
      id: 2,
      title: "Sustainable Apparel: Our Journey Towards Eco-Friendly Fabrics",
      author: "Maya Torres",
      date: "2025-09-05",
      category: "Sustainability",
      image: "/Blog/blog2.webp",
      excerpt:
        "Sustainability is not just a buzzword — it’s part of our brand DNA. Here's how we source and manufacture responsibly to reduce our environmental impact.",
      content:
        "We’re proud to use recycled polyester and organic cotton in many of our new apparel lines. Each fabric is carefully tested for durability, stretch, and feel. Our goal is to combine sustainability with style and performance — so you can ride responsibly without compromising comfort. Our commitment extends to waste reduction and eco-friendly packaging, helping us build a greener future for the cycling community.",
    },
    {
      id: 3,
      title: "Behind the Scenes: Making of a Heavy Pedal Hoodie",
      author: "John Rivera",
      date: "2025-08-21",
      category: "Behind the Scenes",
      image: "/Blog/blog3.webp",
      excerpt:
        "Ever wondered how our signature hoodies are made? Join us for a look inside the process — from concept drawings to the final stitch.",
      content:
        "Our hoodie line starts in the design studio, where we mix streetwear aesthetics with technical apparel performance. After sketching and prototyping, the fabric selection begins — usually a blend of premium fleece and stretch fibers for durability and warmth. Once the design is finalized, it moves to our production partners who cut, print, and sew each hoodie by hand. Each finished hoodie is inspected for quality before being packed and shipped. It's a long process, but worth every step.",
    },
  ];

  return (
    <section className="bg-white text-black w-full relative">

      {/* BG TEXT - Moved to the top with higher z-index */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/Textures/Blog_bg.png"
          width={1800}
          height={1080}
          className="w-full h-full object-cover"
          alt="blog background"
        />
      </div>

      <MaxWidthWrapper>
        <div className="py-24 relative z-10">
          <div className="text-center font-bold text-5xl">
            <h1>-</h1>
            <h1>Latest Blog Posts</h1>

            <Link href="/blog" className="text-red-500 font-normal text-sm">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-16">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* PAGE NUMBER - Keep this at the bottom of the section */}
      <div className="absolute w-full top-full z-10 -translate-y-1/2">
        <div className="flex px-32 justify-between items-center">
          <Image src={"/Textures/03.avif"} alt="01" width={300} height={300} />
          <Image
          className="absolute -top-14 right-46"
            src="/Textures/texture at right of 3.webp"
            alt="rect"
            width={350}
            height={100}
          />
        </div>
      </div>

    </section>
  );
};

export default LatestBlogPage;
