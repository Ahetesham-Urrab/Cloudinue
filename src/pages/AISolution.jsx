import React, { useState } from "react";
import "../index.css"; // make sure your custom CSS is here
import ServiceCards from "../components/ServiceCards";
import Cta from "../components/Cta";
import { motion } from "framer-motion";

export default function AISolution() {
  const defaultImg = "/images/unnamed (3).jpg";
  const [currentImg, setCurrentImg] = useState(defaultImg);

  const cards = [
    {
      title: "Predictive Analytics",
      text: "Forecast trends and outcomes so you’re always ahead.",
      img: "/images/unnamed (8).jpg",
    },
    {
      title: "Automation",
      text: "Streamline work, boost productivity, and reduce manual tasks.",
      img: "/images/unnamed (9).jpg",
    },
    {
      title: "Natural Language Processing (NLP)",
      text: "Enhance customer interactions with intelligent chatbots and sentiment analysis.",
      img: "/images/unnamed (10).jpg",
    },
    {
      title: "Custom AI Development",
      text: "Build AI models tailored to your organization’s unique business challenges.",
      img: "/images/unnamed (11).jpg",
    },
  ];

  return (
     <div className="w-full overflow-hidden text-white">

      {/* ===================== HERO SECTION ===================== */}
      <motion.section
        className="h-[60vh] flex items-center justify-start bg-cover bg-top relative"
        style={{
          backgroundImage: "url('/images/unnamed (7).jpg')",
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-9"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0))`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>

        {/* Text Content */}
        <motion.div
          className="container mx-auto relative z-10 text-left ml-5 lg:px-20 lg:mt-60"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-bold text-5xl lg:text-6xl text-center lg:text-start mt-20 lg:mt-0" >AI Solutions</h1>
          <h4 className="mt-2 text-xl hidden lg:block">
            Revolutionize Your Business with AI-Driven Innovations
          </h4>
          <p className="text-gray-400 mt-2 max-w-xl hidden lg:block">
            Discover the power of AI. Automate operations, make smarter
            decisions, and gain insights faster than ever.
          </p>
        </motion.div>
      </motion.section>

      {/* ===================== CARDS + IMAGE SECTION ===================== */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Left Column (Cards) */}
            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="card-custom p-6"
                  onMouseEnter={() => setCurrentImg(card.img)}
                  onMouseLeave={() => setCurrentImg(defaultImg)}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                >
                  <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                  <p>{card.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Right Column (Image) */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={currentImg}
                alt="AI Solutions"
                id="serviceImage"
                className="shadow-lg rounded-lg transition-transform duration-500 lg:ml-40"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== OTHER SECTIONS ===================== */}
      <ServiceCards />
      <Cta />
    </div>
  );
}
