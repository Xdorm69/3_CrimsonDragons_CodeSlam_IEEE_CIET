import React from "react";
import MaxWidthWrapper from "../Wrappers/MaxWidthWrapper";
import { Star } from "lucide-react";
import ShopBtn from "../Buttons/ShopBtn";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductPage = () => {
  const productData = [
    {
      title: "Cycling kits",
      product: "Marauder Bib",
      stars: 4,
      reviews: 1,
      price: 69.99,
      image: "Product1.avif",
    },
    {
      title: "Hats",
      product: "OakWood Beanie Maroon",
      stars: 3,
      reviews: 0,
      price: 19.99,
      image: "product2.png",
    },
    {
      title: "Shirts",
      product: "Ride With Us",
      stars: 5,
      reviews: 0,
      price: 24.99,
      del: 34.99,
      image: "product3.webp",
    },
    {
      title: "Hoodies & Jackets",
      product: "Tempest Jacket Black",
      stars: 4,
      reviews: 3,
      price: 69.99,
      image: "product4.jpg",
    },
  ];
  return (
    <section className="h-[200vh] relative bg-white text-black">
      {/* BG TEXTURE  */}
      <div className="absolute w-full h-[200vh] z-0">
        <Image
          src="/Textures/bgggggg.png"
          width={1920}
          height={1080}
          alt="bg"
        />
      </div>

      {/* TEXT-BG  */}
      <div className="absolute left-24 top-1/5">
        <h1 className="text-[18vw] opacity-10 leading-64">
          Cobra
          <br />
          Arcade
          <br />
          Jersey
        </h1>
      </div>

      {/* CONTENT  */}
      <MaxWidthWrapper>
        <div>
          <div className="text-center absolute left-1/2 -translate-x-1/2 top-24 font-bold text-5xl">
            <div>-</div>
            <h1>Our Bestsellers</h1>
          </div>

          <div className="absolute top-1/5 w-[77.3vw] h-fit">
            <div className="flex items-center justify-between">
              {/* LEFT  */}
              <div className="flex flex-col gap-3">
                <p className="mb-8">Cycling Kits</p>

                <h1 className="text-3xl font-semibold">Cobra Arcade Jersey</h1>
                <div className="flex gap-1 items-center">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, id) => (
                      <Star key={id} fill="none" className={cn(id < 4 ? "fill-red-500" : "fill-none", "size-6 outline-none border-none")} />
                    ))}
                  </div>
                  <p>4.2</p>
                  <p className="underline opacity-50 ml-2">2 Reviews</p>
                </div>

                {/* PRICE  */}
                <div className="flex items-center gap-2 mt-8">
                  <h2 className="text-red-500 font-bold text-xl">$41.99</h2>{" "}
                  <del>$59.99</del>
                  <ShopBtn className="ml-5" text="Buy Now" />
                </div>
              </div>
              {/* RIGHT  */}
              <div>
                {/* TSHIRT  */}
                <Image
                  className="absolute left-1/2 top-0 -translate-y-1/5 z-10 "
                  src={"/Product/tshirt_heavypedal.png"}
                  width={450}
                  height={200}
                  alt="tshirt"
                />
                {/* UPPER LINE  */}
                <div>
                  <Image
                    className="absolute right-0 translate-x-1/3 top-0"
                    src="/Textures/blog-top-rectange.png"
                    alt="blog-top-rectangle"
                    width={350}
                    height={250}
                  />
                  <Image
                    className="absolute right-20 top-0"
                    src="/Textures/blog-top-rectange.png"
                    alt="blog-top-rectangle"
                    width={350}
                    height={250}
                  />
                  <Image
                    className="absolute right-80 top-0"
                    src="/Textures/blog-top-rectange.png"
                    alt="blog-top-rectangle"
                    width={350}
                    height={250}
                  />
                </div>
                {/* LOWER LINE  */}
                <div>
                  <Image
                    className="absolute right-0 translate-x-1/3 top-20"
                    src="/Textures/blog-top-rectange.png"
                    alt="blog-top-rectangle"
                    width={350}
                    height={250}
                  />
                  <Image
                    className="absolute right-20 top-20"
                    src="/Textures/blog-top-rectange.png"
                    alt="blog-top-rectangle"
                    width={350}
                    height={250}
                  />
                  <Image
                    className="absolute right-80 top-20"
                    src="/Textures/blog-top-rectange.png"
                    alt="blog-top-rectangle"
                    width={350}
                    height={250}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 space-x-5 mt-56">
              {productData.map((item, id) => (
                <div
                  key={id}
                  className="group hover:bg-white transition-colors duration-300 rounded-lg"
                >
                  <div className="w-[17vw] py-8 text-center flex flex-col items-center">
                    <Image
                      src={`/Product/${item.image}`}
                      alt={`Product${id + 1}`}
                      width={id == 0 ? 200 : 250}
                      height={250}
                    />

                    <p className="mt-8">{item.title}</p>
                    <h1 className="font-semibold text-2xl my-8">
                      {item.product}
                    </h1>
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, id) => (
                          <Star
                            fill="none"
                            key={id}
                            className={cn(
                              item.stars - 1 < id
                                ? "fill-gray-400"
                                : "fill-red-400",
                              "size-6 outline-none"
                            )}
                          />
                        ))}
                      </div>
                      <p className="underline">{item.reviews} Reviews</p>
                    </div>

                    <h1 className="text-2xl font-bold text-red-400 mt-8">
                      ${item.price}{" "}
                      {item.del && (
                        <span className="text-black opacity-20">
                          {" "}
                          ${item.del}
                        </span>
                      )}
                    </h1>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShopBtn text="Buy now" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* PAGE NUMBER  */}
      <div className="absolute w-full top-full z-10 -translate-y-1/2">
        <div className="flex flex-row-reverse px-32 justify-between items-center">
          <Image src={"/Textures/02.avif"} alt="01" width={300} height={300} />
          <Image
            src="/Textures/blog-top-rectange.png"
            alt="rect"
            width={200}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
