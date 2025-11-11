import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../Wrappers/MaxWidthWrapper";

const InstagramPage = () => {
  return (
    <section className="w-full min-h-screen relative z-0">
      {/* BG IMAGE - Make sure this has lower z-index than content but higher than the background */}
      <div className="absolute left-0 top-0 w-full h-full -z-10">
        <Image
          src="/Textures/product__bg_new.png"
          height={1080}
          width={1920}
          className="w-full h-full object-cover"
          alt="black background"
        />
      </div>

      {/* BG IMAGE - This will be on top of the first background */}
      <div className="absolute left-0 top-0 w-full h-full -z-5">
        <Image
          src="/Textures/insta_bg.png"
          height={500}
          width={1920}
          className="w-full h-full object-cover"
          alt="instagram background"
        />
      </div>

      {/* CONTENT  */}
      <div className=" relative z-20 py-16">
        <MaxWidthWrapper>
          <div className="text-center text-4xl ">
            <div>-</div>
            <h1 className="font-bold">Latest Instagram Shots</h1>
            <p className="font-normal text-sm text-red-500 mt-4">#theheavypedal</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-auto mt-24 gap-8">
            {Array.from({ length: 6 }).map((_, id) => (
              <div className="w-full h-[40vh] " key={id}>
                <Image
                  src={`/Blog/${id + 1}.jpg`}
                  height={500}
                  width={500}
                  alt={`shot - ${id + 1}`}
                  className="w-full border-transparent object-cover border-10 hover:border-red-500 transition-all h-full"
                />
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default InstagramPage;
