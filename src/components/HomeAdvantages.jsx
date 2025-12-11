import React from "react";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";

export default function HomeAdvantages() {
  const leftPoints = [
    {
      text: "Enterprise-grade reliability",
      desc: "Powered by Microsoft Azure’s SLA-backed infrastructure.",
    },
    {
      text: "Built for Startups and SMBs.",
      desc: "Practical cloud solutions that match real budgets and timelines.",
    },
  ];

  const rightPoints = [
    {
      text: "Fast, Human Support.",
      desc: "Direct access to people who actually understand your setup.",
    },
    {
      text: "Simple and Clear",
      desc: "No jargon. No fluff. You always know what’s happening and why.",
    },
  ];

  return (
    <section className="container mx-auto min-h-[80vh] flex flex-col items-center justify-center text-white">
      {/* Section Heading */}
      <motion.h2
        className="mb-8 text-white text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Cloudinue Advantages
      </motion.h2>

      <div className="w-full flex flex-wrap items-center justify-center">

        {/* Left Points */}
        <div className="lg:w-1/4 md:w-1/3 w-full text-center lg:text-right mb-6 px-4 space-y-4">
          {leftPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="space-y-1"
            >
              <NeonButton text={point.text} />
              <p className="opacity-75 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="lg:w-1/2 md:w-1/3 w-full text-center mb-6 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/images/unnamed (5).jpg"
            className="w-[90%] mx-auto rounded-lg"
            alt="Cloud Features"
          />
        </motion.div>

        {/* Right Points */}
        <div className="lg:w-1/4 md:w-1/3 w-full text-center lg:text-left mb-6 px-4 space-y-4">
          {rightPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="space-y-1"
            >
              <NeonButton text={point.text} />
              <p className="opacity-75 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
