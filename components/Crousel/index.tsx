"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Imagecarousel() {
  return (
    <div className="mt-17 flex w-full items-center justify-center md:mt-20">
      <div className="w-full overflow-hidden md:w-screen">
        <Splide
          options={{
            rewind: true,
            arrows: false,
            gap: "1rem",
            type: "loop",
            speed: 700,
            autoplay: true,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img
              src="../../images/crousel-images/img1.jpg"
              alt="Image 1"
              className="hidden md:block"
            />
            <img
              src="../../images/crousel-images/img11.png"
              alt="Image 1"
              className="block md:hidden"
            />
            <button className="absolute left-5 top-3/4 inline-flex items-center justify-center gap-2 rounded-[50px] bg-green-700 px-2 py-1 text-xs font-bold text-white md:left-20 md:text-xl lg:mt-5 lg:px-6 lg:py-3">
              Order Now
            </button>
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img2.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img3.jpg" alt="Image 3" />
            <button className="absolute right-5 top-3/4 inline-flex items-center justify-center gap-2 rounded-[50px] bg-green-700 px-2 py-1 text-xs font-bold text-white md:right-20 md:text-xl lg:mt-5 lg:px-6 lg:py-3">
              Order Now
            </button>
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img4.jpg" alt="Image 4" />
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img5.jpg" alt="Image 5" />
            <button className="absolute left-5 top-3/4 inline-flex items-center justify-center gap-2 rounded-[50px] bg-green-700 px-2 py-1 text-xs font-bold text-white md:left-20 md:text-xl lg:mt-5 lg:px-6 lg:py-3">
              Order Now
            </button>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
