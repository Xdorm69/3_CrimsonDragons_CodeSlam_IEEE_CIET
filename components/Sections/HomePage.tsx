
import Image from 'next/image';
import ShopBtn from '../Buttons/ShopBtn'
import MaxWidthWrapper from '../Wrappers/MaxWidthWrapper'

const HomePage = () => {
  return (
    <section className="h-screen w-full relative">
      <div className="absolute left-0 top-0 w-full h-screen">
        <Image
          src={
            "https://heavypedal.myshopify.com/cdn/shop/files/rsz_main_banner_6142d578-885b-4949-bfa2-22742eb9f2ac_1024x1024.png?v=1613508042"
          }
          alt="hero"
          width={2000}
          height={550}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <MaxWidthWrapper>
        {/* TEXT  */}
        <div className="absolute top-1/2 -translate-y-1/2 text-white z-10">
          <h3 className="font-semibold">New Arrivals</h3>
          <div className="text-3xl">-</div>
          <h1 className="text-[4vw] font-bold">365 Cycling Kit</h1>
          <h1 className="text-[4vw] font-bold -mt-4">Jersey & Bib</h1>
          <ShopBtn className="mt-8" text="Shop Now" />
        </div>
      </MaxWidthWrapper>

      {/* PAGE NUMBER  */}
      <div className="absolute w-full top-full z-10 -translate-y-1/2">
        <div className="flex px-32 justify-between items-center">
          <Image src={"/Textures/01.png"} alt="01" width={300} height={300} />
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
}

export default HomePage