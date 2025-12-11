import React from "react";
import "../index.css";
import NeonButton from "../components/NeonButton";
import HomeAbout from "../components/HomeAbout";
import HomeService from "../components/HomeService";
import HomeWhy from "../components/HomeWhy";
import Testimonial from "../components/Testimonial";
import HomeAdvantages from "../components/HomeAdvantages";
import Cta from "../components/Cta";
import { motion } from "framer-motion";

// import other sections here like Services, Testimonials, etc.

export default function Home() {

  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden " >

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/intro2.mp4"
          autoPlay
          loop
          muted
          playsInline

        />


        {/* Gradient + Image Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0))`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center lg:mt-40 items-start h-full text-left px-6 md:px-24 space-y-6">
          <motion.h1
            className="text-white text-4xl md:text-6xl drop-shadow-xl"
            style={{ fontFamily: "DoppioOne, sans-serif" }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Cloudinue Cloud <br />
            Consulting Reimagined <br />
            for Modern Business
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y:70}}
            animate={{ opacity: 1, y:0}}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <NeonButton
              text="Start Your Cloudinue Journey"
              onClick={() => console.log("Button clicked!")}
            />
          </motion.div>
        </div>

      </div>

      {/* Additional Sections Below Hero */}
      <HomeAbout />
      <HomeService />
      <HomeWhy />
      <Testimonial />
      <HomeAdvantages />
      <Cta />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <ContactSection /> */}

    </div>
  );
}
