import React from "react";
import { BiCheck } from "react-icons/bi"; 
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";

const reasons = [
  {
    title: "Bold, Human Experts",
    description:
      "Real engineers. Real experience. Our certified consultants understand the Indian business landscape and communicate in a way that actually makes sense.",
  },
  {
    title: "End-to-End Partnership",
    description:
      "Strategy, setup, support, scaling. We stay accountable from start to finish and tie our work directly to your outcomes.",
  },
  {
    title: "Cost Control with Zero Guesswork",
    description:
      "Transparent pricing. Clear deliverables. You get enterprise-grade capability without the enterprise-style bloat.",
  },
  {
    title: "Security and Compliance First",
    description:
      "GDPR, India IT Act, ISO standards. Your environment stays aligned with global and local requirements.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left Column: Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-4xl md:text-5xl mb-8">
            Why Choose Cloudinue?
          </h2>

          <div className="flex flex-col gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                className="
                  group flex gap-4 p-4 rounded-xl cursor-pointer 
                  transition-all duration-300 
                  hover:scale-105
                  hover:border hover:border-blue-500
                  hover:shadow-[0_0_30px_#00e5ff]
                "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Badge */}
                <span
                  className="
                    flex items-center justify-center w-10 h-10 rounded-full 
                    bg-orange-600 shrink-0 
                    transition-transform duration-300 
                    group-hover:scale-110
                  "
                >
                  <BiCheck className="text-white text-2xl" />
                </span>

                {/* Text */}
                <div>
                  <h5 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    {reason.title}
                  </h5>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <NeonButton text="See How We Works" />
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/images/unnamed (2).jpg"
            alt="Cloudinue Illustration"
            className="w-4/5 lg:w-50 rounded-2xl object-contain transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00e5ff]"
          />
        </motion.div>
      </div>
    </section>
  );
}
