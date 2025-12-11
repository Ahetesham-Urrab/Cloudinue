import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import ServiceCards from "../components/ServiceCards";
import Cta from "../components/Cta";

export default function CloudImplemantation() {
  const defaultImg = "/images/unnamed (3).jpg";
  const [currentImg, setCurrentImg] = useState(defaultImg);

  const cards = [
    {
      title: "Hybrid Cloud Deployment",
      text: "Deploy agile systems that integrate cloud with on-prem environments.",
      img: "/images/cloudImp.jpg",
    },
    {
      title: "AI Solutions Deployment",
      text: "Implement cutting-edge AI tools. Unlock predictive analytics, NLP, and automation with proven platforms.",
      img: "/images/cloudImp(2).jpg",
    },
    {
      title: "Modern Workspace Implementation",
      text: "Enable secure collaboration with Microsoft 365, Zoom, and Slack.",
      img: "/images/cloudImp(3).jpg",
    },
    {
      title: "Cloud Security",
      text: "Protect your systems with identity management, encryption, zero-trust, and threat monitoring.",
      img: "/images/cloudImp(4).jpg",
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
          backgroundImage: "url('/images/unnamed (13).jpg')",
        }}
      >
        <div
          className="absolute inset-0 z-9"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0))`,
          }}
        ></div>

        <div className="container mx-auto relative z-10 text-left ml-5 lg:px-20 lg:mt-60">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-bold text-5xl lg:text-6xl text-center lg:text-start mt-0"
          >
            Cloud Implementation Services
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

      {/* FEATURES SECTION */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* CARDS COLUMN */}
            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="card-custom p-6 cursor-pointer"
                  onMouseEnter={() => setCurrentImg(card.img)}
                  onMouseLeave={() => setCurrentImg(defaultImg)}
                >
                  <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                  <p className="text-gray-300">{card.text}</p>
                </motion.div>
              ))}
            </div>

            {/* IMAGE COLUMN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={currentImg}
                alt="AI Solutions"
                className="shadow-lg rounded-lg transition-transform duration-500 w-full max-w-[450px] lg:ml-40"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceCards />
      </motion.div>

      {/* CTA SECTION */}
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
