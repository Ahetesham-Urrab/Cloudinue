import React from "react";
import { BiCheck } from "react-icons/bi"; // Using react-icons for check icon
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
    <section className="py-16 px-6 md:px-20 bg-black">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-white text-4xl md:text-5xl mb-8">
            Why Choose Cloudinue?
          </h2>

          <div className="flex flex-col gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group flex gap-4 p-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Badge */}
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 shrink-0 transition-transform duration-300 group-hover:scale-110">
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
              </div>
            ))}
          </div>

          <NeonButton text="See How We Works" />
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/unnamed (2).jpg"
            alt="Cloudinue Illustration"
            className="w-4/5 lg:w-50 rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
