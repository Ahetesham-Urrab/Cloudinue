import React from "react";
import NeonButton from "./NeonButton";
import { motion } from "framer-motion";

export default function HomeAbout() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-5 md:py-20 "
    >
      
      {/* Content */}
      <motion.div
        className="flex flex-col justify-center items-start gap-6 md:gap-8 w-full md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl leading-snug">
          Ambitious founders and fast moving teams deserve more than yesterday’s IT services
        </h2>
        <p className="text-white text-base sm:text-lg md:text-lg leading-relaxed max-w-xl">
          At Cloudinue, we don’t just migrate workloads. We engineer future-proof cloud strategies, automate
          the grunt work, and unlock AI-powered innovation that drives your business forward. Whether you’re
          scaling your first startup, navigating compliance, or modernizing complex systems, our India-based
          experts deliver clarity, speed, and results.
        </p>
        <NeonButton text="Learn More"/>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex justify-center items-center w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src="./images/unnamed (3).jpg"
          alt="Cloudinue Services"
          className="
            w-3/5 sm:w-2/5 md:w-4/5 max-w-xs md:max-w-sm object-contain
            transition-all duration-300 
            hover:scale-105
            hover:shadow-[0_0_30px_#00e5ff]
            rounded-xl
          "
        />
      </motion.div>
    </section>
  );
}
