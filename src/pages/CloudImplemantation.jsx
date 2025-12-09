import React, { useState } from "react";
import "../index.css"; // make sure your custom CSS is here

export default function CloudImplemantation() {
  const defaultImg = "/images/unnamed (3).jpg";
  const [currentImg, setCurrentImg] = useState(defaultImg);

  const cards = [
    {
      title: "Hybrid Cloud Deployment",
      text: "Deploy agile systems that integrate cloud with on-prem environments.",
      img: "/images/unnamed (8).jpg",
    },
    {
      title: "AI Solutions Deployment",
      text: "Implement cutting-edge AI tools. Unlock predictive analytics, NLP, and automation with proven platforms.",
      img: "/images/unnamed (9).jpg",
    },
    {
      title: "Modern Workspace Implementation",
      text: "Enable secure collaboration with Microsoft 365, Zoom, and Slack.",
      img: "/images/unnamed (10).jpg",
    },
    {
      title: "Cloud Security",
      text: "Protect your systems with identity management, encryption, zero-trust, and threat monitoring.",
      img: "/images/unnamed (11).jpg",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#010101] text-white">
      {/* Hero Section */}
     <section
  className="h-screen flex items-center justify-start bg-cover bg-top relative"
  style={{
    backgroundImage: "url('/images/unnamed (13).jpg')",
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
    <h1 className="font-bold text-5xl lg:text-6xl">Cloud implementation Services</h1>
    <h4 className="mt-2 text-xl">
      Revolutionize Your Business with AI-Driven Innovations
    </h4>
    <p className="text-gray-400 mt-2 max-w-xl">
      Discover the power of AI. Automate operations, make smarter decisions,
      and gain insights faster than ever.
    </p>
  </div>
</section>

      {/* Feature Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="card-custom p-6"
                  onMouseEnter={() => setCurrentImg(card.img)}
                  onMouseLeave={() => setCurrentImg(defaultImg)}
                >
                  <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="text-center">
              <img
                src={currentImg}
                alt="AI Solutions"
                id="serviceImage"
                className="shadow-lg rounded-lg transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
