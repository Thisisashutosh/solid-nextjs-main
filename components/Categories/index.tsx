"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import categoriesData from "./categoriesData";
import SingleCategory from "./SingleCategory";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "ORDER NOW",
              subtitle: "Home essentials",
              description: `Stock up on essential home medicines from My Dawai Wala to ensure your family's health and well-being. From fever reducers to cough suppressants, we've got you covered for every common ailment, right at your fingertips.`,
            }}
          />
          {/* <!-- Section Title End --> */}
          <p className="mb-5 mt-12.5 text-center text-base font-bold tracking-widest text-gray-700 lg:mt-15 xl:mt-20">
            Select by category
          </p>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-8 xl:gap-9">
            {/* <!-- Features item Start --> */}
            {categoriesData.map((categories: any) => (
              <SingleCategory props={categories} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
