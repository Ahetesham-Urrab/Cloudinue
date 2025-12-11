import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import ServiceCards from "../components/ServiceCards";
import Cta from "../components/Cta";

export default function ManageCloud() {
  // Default images
  const defaultImgTop = "/images/unnamed (3).jpg";
  const defaultImgBottom = "/images/unnamed (3).jpg";

  const [topImg, setTopImg] = useState(defaultImgTop);
  const [bottomImg, setBottomImg] = useState(defaultImgBottom);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  // Top row cards
  const topCards = [
    {
      title: "Cloud Infrastructure Management",
      text: "End-to-end management for cloud environments, from set-up to performance monitoring.",
      img: "/images/manageCloud.jpg",
    },
    {
      title: "24/7 Monitoring and Maintenance",
      text: "Rapid issue resolution and continuous protection of critical workflows.",
      img: "/images/manageCloud(2).jpg",
    },
    {
      title: "Security & Compliance",
      text: "Secure your data. Stay compliant with GDPR and more. Custom security audits and advanced protections.",
      img: "/images/manageCloud(3).jpg",
    },
  ];

  // Bottom row cards
  const bottomCards = [
    {
      title: "Backup & Disaster Recovery",
      text: "Stay resilient with regular backups and rapid recovery plans.",
      img: "/images/manageCloud(4).jpg",
    },
    {
      title: "Cost & Performance Optimization",
      text: "Get maximum value with ongoing efficiency checks, scalable resources, and cost control.",
      img: "/images/manageCloud(5).jpg",
    },
  ];

  return (
    <div className="w-full overflow-hidden  text-white">

      {/* Hero Section */}
   <motion.section
           initial={{ opacity: 0, y: 60 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        className="h-[60vh] flex items-center justify-start bg-cover bg-top relative"
        style={{
          backgroundImage: "url('/images/unnamed18.jpg')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.94), rgba(0,0,0,0))`,
          }}
        ></div>

        <motion.div
          className="container mx-auto relative z-10 text-center lg:px-20 mt-20 lg:mt-80"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="font-bold text-5xl lg:text-6xl text-center lg:text-start mt-20 lg:mt-0">
            Managed Cloud and IT Services
          </h1>
          <h4 className="mt-2 text-xl hidden lg:block">Revolutionize Your Business with AI-Driven Innovations</h4>
          <p className="text-gray-400 mt-2 max-w-xl hidden lg:block">
            Discover the power of AI. Automate operations, make smarter decisions, and gain insights faster than ever.
          </p>
        </motion.div>
      </motion.section>

      {/* Top Row */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-12">

          {/* Cards */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="card-custom p-6 cursor-pointer"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setTopImg(card.img)}
                onMouseLeave={() => setTopImg(defaultImgTop)}
              >
                <h5 className="text-2xl font-semibold mb-2">{card.title}</h5>
                <p className="text-gray-300">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <img
              src={topImg}
              alt="Top Section Illustration"
              className="service-image shadow-lg rounded-xl transition-all duration-500 w-full max-w-[450px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom Row */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-12">

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <img
              src={bottomImg}
              alt="Bottom Section Illustration"
              className="service-image shadow-lg rounded-xl transition-all duration-500 w-full max-w-[450px]"
            />
          </motion.div>

          {/* Cards */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bottomCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="card-custom p-6 cursor-pointer"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setBottomImg(card.img)}
                onMouseLeave={() => setBottomImg(defaultImgBottom)}
              >
                <h5 className="text-2xl font-semibold mb-2">{card.title}</h5>
                <p className="text-gray-300">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shared Components */}
      <ServiceCards />
      <Cta />
    </div>
  );
}
