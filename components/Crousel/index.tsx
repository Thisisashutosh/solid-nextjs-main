"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Imagecarousel() {
  return (
    <div className="md:mt-20 mt-10 flex w-full items-center justify-center">
      <div className="md:w-1/2 w-10/12 rounded-md overflow-hidden">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            type: "loop",
            speed: 1000,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src="../../images/crousel-images/img1.jpg" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img2.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img3.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img4.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="../../images/crousel-images/img5.jpg" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
