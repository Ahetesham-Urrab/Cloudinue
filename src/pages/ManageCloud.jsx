import React, { useState } from "react";
import "../index.css"; // contains .card-custom, .service-image, neon effects

export default function ManageCloud() {
  // Default images
  const defaultImgTop = "/images/unnamed (3).jpg";
  const defaultImgBottom = "/images/unnamed (3).jpg";

  // State for each row
  const [topImg, setTopImg] = useState(defaultImgTop);
  const [bottomImg, setBottomImg] = useState(defaultImgBottom);

  // Top row cards
  const topCards = [
    {
      title: "Cloud Infrastructure Management",
      text: "End-to-end management for cloud environments, from set-up to performance monitoring.",
      img: "/images/unnamed (8).jpg",
    },
    {
      title: "24/7 Monitoring and Maintenance",
      text: "Rapid issue resolution and continuous protection of critical workflows.",
      img: "/images/unnamed (9).jpg",
    },
    {
      title: "Security & Compliance",
      text: "Secure your data. Stay compliant with GDPR and more. Custom security audits and advanced protection.",
      img: "/images/unnamed (10).jpg",
    },
  ];

  // Bottom row cards
  const bottomCards = [
    {
      title: "Backup & Disaster Recovery",
      text: "Stay resilient with regular backups and rapid recovery plans.",
      img: "/images/unnamed (11).jpg",
    },
    {
      title: "Cost & Performance Optimization",
      text: "Get maximum value with ongoing efficiency checks, scalable resources, and cost control.",
      img: "/images/unnamed (11).jpg",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#010101] text-white">

      {/* Hero Section */}
      <section
  className="h-screen flex items-center justify-start bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/unnamed18.jpg')",
  }}
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

  <div className="container mx-auto relative z-10 text-left ml-5 lg:px-20">
    <h1 className="font-bold text-5xl lg:text-6xl">Managed Cloud and IT Services</h1>
    <h4 className="mt-2 text-xl">
      Revolutionize Your Business with AI-Driven Innovations
    </h4>
    <p className="text-gray-400 mt-2 max-w-xl">
      Discover the power of AI. Automate operations, make smarter decisions,
      and gain insights faster than ever.
    </p>
  </div>
</section>

      {/* Top Row */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-12">

          {/* Cards (50%) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {topCards.map((card, idx) => (
              <div
                key={idx}
                className="card-custom p-6 cursor-pointer"
                onMouseEnter={() => setTopImg(card.img)}
                onMouseLeave={() => setTopImg(defaultImgTop)}
              >
                <h5 className="text-2xl font-semibold mb-2">{card.title}</h5>
                <p className="text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Image (50%) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={topImg}
              alt="AI Solutions Top"
              className="service-image shadow-lg rounded-xl transition-transform duration-500 w-full max-w-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Bottom Row */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-12">

          {/* Image (50%) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={bottomImg}
              alt="AI Solutions Bottom"
              className="service-image shadow-lg rounded-xl transition-transform duration-500 w-full max-w-[450px]"
            />
          </div>

          {/* Cards (50%) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {bottomCards.map((card, idx) => (
              <div
                key={idx}
                className="card-custom p-6 cursor-pointer"
                onMouseEnter={() => setBottomImg(card.img)}
                onMouseLeave={() => setBottomImg(defaultImgBottom)}
              >
                <h5 className="text-2xl font-semibold mb-2">{card.title}</h5>
                <p className="text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
