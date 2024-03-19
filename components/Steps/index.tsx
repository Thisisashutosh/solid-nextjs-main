"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { steps } from "./constants";

const Featuredsteps = ({ steps }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#cae1fc",
        color: "#000000",
      }}
      visible={true}
      contentArrowStyle={{ borderRight: "7px solid #cae1fc" }}
      icon={<div className="h-full w-full rounded-full bg-gray-800 text-3xl flex items-center justify-center text-white text-center">{steps.id}</div>}
    >
      <div>
        <h1 className="font-serif text-2xl text-gray-800">{steps.title}</h1>

        <div className="ml-5 mt-5 text-xl">
          {steps.desc}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const FunFact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0" ref={ref}>
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] ">
          <div className="container flex w-full flex-col items-center justify-center gap-20 rounded-xl pt-20">
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-serif text-4xl text-gray-800">
                Steps to order
              </h2>
            </div>
            <div className="w-11/12">
              <VerticalTimeline lineColor={"black"}>
                {steps.map((steps: any, index: any) => {
                  return <Featuredsteps key={`steps-${index}`} steps={steps} />;
                })}
              </VerticalTimeline>
            </div>
          </div>

          {/* <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Trusted by Global Companies.
            </h2>
            <p className="mx-auto lg:w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </motion.div> */}
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
