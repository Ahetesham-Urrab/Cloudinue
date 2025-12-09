import React, { useState } from "react";
import "../index.css"; // contains .card-custom, .service-image, neon effects

export default function NetworkDesign() {
  // Default images
  const defaultImgTop = "/images/unnamed (3).jpg";
  const defaultImgBottom = "/images/unnamed (3).jpg";

  // State for each row
  const [topImg, setTopImg] = useState(defaultImgTop);
  const [bottomImg, setBottomImg] = useState(defaultImgBottom);

  // Top row cards
  const topCards = [
    { title: "Professional Network Design", text: "Build scalable, secure, and vendor-neutral networks from the ground up.", img: "/images/unnamed (8).jpg" },
    { title: "Hybrid Integration Experts", text: "Integrate on-premises, cloud, and hybrid ecosystems with expert architecture.", img: "/images/unnamed (9).jpg" },
    { title: "Centralized Management", text: "Monitor, optimize, and troubleshoot with ease.", img: "/images/unnamed (10).jpg" },
  ];

  // Bottom row cards
  const bottomCards = [
    { title: "High Availability", text: "Design robust systems for uninterrupted business operations.", img: "/images/unnamed (11).jpg" },
    { title: "Compliance & Industry Alignment", text: "Meet leading standards and tailor solutions for your industry.", img: "/images/unnamed (11).jpg" },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#010101] text-white">

      {/* Hero Section */}
      <section
  className="h-screen flex items-center justify-start bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/unnamed17.jpg')",
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
    <h1 className="font-bold text-5xl lg:text-6xl">Network Design & Infrastructure</h1>
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
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Cards Left */}
          <div className="flex flex-col gap-4">
            {topCards.map((card, idx) => (
              <div
                key={idx}
                className="card-custom p-6"
                onMouseEnter={() => setTopImg(card.img)}
                onMouseLeave={() => setTopImg(defaultImgTop)}
              >
                <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          {/* Image Right */}
          <div className="text-center">
            <img
              src={topImg}
              alt="AI Solutions Top"
              id="serviceImage"
              className="service-image shadow-lg rounded-lg transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Bottom Row */}
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Left */}
          <div className="text-center">
            <img
              src={bottomImg}
              alt="AI Solutions Bottom"
              className="service-image shadow-lg rounded-lg transition-transform duration-500"
              id="serviceImage"
            />
          </div>
          {/* Cards Right */}
          <div className="flex flex-col gap-4">
            {bottomCards.map((card, idx) => (
              <div
                key={idx}
                className="card-custom p-6"
                onMouseEnter={() => setBottomImg(card.img)}
                onMouseLeave={() => setBottomImg(defaultImgBottom)}
              >
                <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
