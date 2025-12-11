import React from "react";
import "../index.css";
import NeonButton from "../components/NeonButton";
import Mission from "../components/Mission";
import Principle from "../components/Principle";
import Guidlines from "../components/Guidlines"
import CodeOfConduct from "../components/CodeOfConduct";
import HowWeWork from "../components/HowWeWork";
import Cta from "../components/Cta";

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <section
        className="
        h-[60vh]
        flex 
        items-center 
        bg-cover 
        bg-center 
      "
        style={{
          backgroundImage: "url('/images/unnamed (6).jpg')",
        }}
      >
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div
              className="absolute inset-0 z-9 h-[60vh]"
              style={{
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0))`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></div>
            {/* Left Content */}
            <div className="md:col-span-7 px-2 mt-20 z-10 lg:mt-60">
              <h1 className="text-white text-6xl md:text-6xl font-bold mb-4 text-center lg:text-start">
                About Us
              </h1>

              <p className="text-white text-lg leading-snug mb-6 hidden lg:block">
                Cloudinue IT Services LLP was founded to help businesses of every
                size lead with technology, not get left behind. Our team delivers
                cloud, AI, and IT solutions built for speed, security, and lasting
                business impact.
                We believe in working as true partners. Whether you run a startup
                in Bangalore or manage teams in Singapore or Berlin, Cloudinue
                brings bold ideas, proven know-how, and real results to your
                projects wherever you are.
              </p>
              {/* <NeonButton text="Contact Us" /> */}

            </div>

            {/* Right Empty Column */}
            <div className="md:col-span-5 hidden md:block"></div>
          </div>
        </div>
      </section>
      <Mission />
      <Principle />
      <Guidlines />
      <CodeOfConduct />
      <HowWeWork />
      <Cta />
    </div>
  );
}
