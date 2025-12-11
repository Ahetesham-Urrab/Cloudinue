import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import ServiceCards from "../components/ServiceCards";
import Cta from "../components/Cta";

export default function NetworkDesign() {
  const defaultImgTop = "/images/unnamed (3).jpg";
  const defaultImgBottom = "/images/unnamed (3).jpg";

  const [topImg, setTopImg] = useState(defaultImgTop);
  const [bottomImg, setBottomImg] = useState(defaultImgBottom);

  const topCards = [
    {
      title: "Professional Network Design",
      text: "Build scalable, secure, and vendor-neutral networks from the ground up.",
      img: "/images/NetworkDesign.jpg",
    },
    {
      title: "Hybrid Integration Experts",
      text: "Integrate on-premises, cloud, and hybrid ecosystems with expert architecture.",
      img: "/images/NetworkDesign(2).jpg",
    },
    {
      title: "Centralized Management",
      text: "Monitor, optimize, and troubleshoot with ease.",
      img: "/images/NetworkDesign(5).jpg",
    },
  ];

  const bottomCards = [
    {
      title: "High Availability",
      text: "Design robust systems for uninterrupted business operations.",
      img: "/images/NetworkDesign(4).jpg",
    },
    {
      title: "Compliance & Industry Alignment",
      text: "Meet leading standards and tailor solutions for your industry.",
      img: "/images/NetworkDesign(3).jpg",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-white">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-[60vh] flex items-center justify-start bg-cover bg-top relative"
        style={{
          backgroundImage: "url('/images/unnamed17.jpg')",
        }}
      >
        <div
          className="absolute inset-0 z-[9]"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0))`,
          }}
        ></div>

        <div className="container mx-auto relative z-10 text-left lg:px-20 lg:mt-80">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-bold text-5xl lg:text-6xl text-center lg:text-start mt-20 lg:mt-0"
          >
            Network Design & Infrastructure
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-2 text-xl hidden lg:block"
          >
            Revolutionize Your Business with AI-Driven Innovations
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 mt-2 max-w-xl hidden lg:block"
          >
            Discover the power of AI. Automate operations, make smarter decisions,
            and gain insights faster than ever.
          </motion.p>

        </div>
      </motion.section>

      {/* TOP ROW */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-12">

          {/* Cards Left */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {topCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="card-custom p-6 cursor-pointer"
                onMouseEnter={() => setTopImg(card.img)}
                onMouseLeave={() => setTopImg(defaultImgTop)}
              >
                <h5 className="text-2xl font-semibold mb-2">{card.title}</h5>
                <p className="text-gray-300">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={topImg}
              alt="Network Top"
              className="service-image shadow-lg rounded-xl w-full max-w-[450px] transition-all duration-500"
            />
          </motion.div>

        </div>
      </section>

      {/* BOTTOM ROW */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-12">

          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={bottomImg}
              alt="Network Bottom"
              className="service-image shadow-lg rounded-xl w-full max-w-[450px] transition-all duration-500"
            />
          </motion.div>

          {/* Cards Right */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {bottomCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="card-custom p-6 cursor-pointer"
                onMouseEnter={() => setBottomImg(card.img)}
                onMouseLeave={() => setBottomImg(defaultImgBottom)}
              >
                <h5 className="text-2xl font-semibold mb-2">{card.title}</h5>
                <p className="text-gray-300">{card.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceCards />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Cta />
      </motion.div>

    </div>
  );
}
 