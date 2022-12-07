import React from "react";

const Hero = () => {
  return (
    <div className="relative z-30  flex flex-col justify-start items-end ">
      <div className=" flex flex-col items-end px-6 md:pl-0 pt-12 w-screen md:w-[40rem]  ">
        {/* Title */}
        <div className="w-full flex justify-start items-start">
          <h1 className="text-[72px] font-bold text-white leading-[100%]  ">
            WORLD <br /> OF
            <span className=" ">PARADISE,</span>
            <br /> INDONESIA
          </h1>
        </div>

        {/* Description */}
        <div className="text-white/80    w-full ml-[1px] pt-10">
          <p className=" text-[18px] font-medium">
            Let's explore one of the third largest countries in the <br />
            world, namely Indonesia.Enjoy 3 vacation packages at <br />
            competitive prices and a strong soul.
          </p>
        </div>

        {/* Featured */}
        <div className="mt-12 border-t border-white/70 pb-4 w-full flex items-center justify-center gap-8 flex-col md:flex-row">
          <div className="text-center ">
            <p className="text-white/80 font-medium">Most popular activity</p>
            <p className="text-white font-bold">Manaiac Snorkeling in Bali</p>
          </div>
          <div className=" ">
            <p className="text-white/80 font-medium">Most excited place</p>
            <p className="text-white font-bold">Ubud Art & Culture</p>
          </div>
          <div className=" ">
            <p className="text-white/80 font-medium">Culture style</p>
            <p className="text-white font-bold">Vintage Hawaii</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
