import React, { useState } from "react";
import "../index.css";

export default function CloudConsulting() {
  // Default images
  const defaultImgTop = "/images/unnamed (3).jpg";
  const defaultImgBottom = "/images/unnamed (3).jpg";

  const [topImg, setTopImg] = useState(defaultImgTop);
  const [bottomImg, setBottomImg] = useState(defaultImgBottom);

  const topCards = [
    {
      title: "Cloud Strategy Development",
      text: "Build actionable roadmaps for cloud adoption and hybrid integration. Our process prioritizes scalability, security, and measurable ROI.",
      img: "/images/unnamed (8).jpg",
    },
    {
      title: "Architecture & Design Consulting",
      text: "Get infrastructure that performs—combining private, public, and hybrid cloud models.",
      img: "/images/unnamed (9).jpg",
    },
    {
      title: "AI Solutions Consulting",
      text: "Discover how AI drives value in your processes. Receive clear recommendations on platforms such as Azure, AWS, and Google AI.",
      img: "/images/unnamed (10).jpg",
    },
  ];

  const bottomCards = [
    {
      title: "Modern Workspace Consulting",
      text: "Empower your teams with IT strategies and collaboration tools like Microsoft Teams, Slack, and Google Workspace.",
      img: "/images/unnamed (11).jpg",
    },
    {
      title: "Compliance & Governance Advisory",
      text: "Stay secure and compliant. We tailor solutions for regulations such as GDPR and HIPAA.",
      img: "/images/unnamed (11).jpg",
    },
    {
      title: "Change Management & Training",
      text: "Equip your teams to adopt new AI and cloud platforms smoothly, with minimal disruption.",
      img: "/images/unnamed (11).jpg",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#010101] text-white">

      {/* Hero Section */}
      <section
  className="h-screen flex items-center justify-start bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/unnamed (12).jpg')",
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

  <div className="container mx-auto relative z-10 text-left ml-5 lg:px-20 ">
    <h1 className="font-bold text-5xl lg:text-6xl">Cloud Consulting Services</h1>
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
                className="card-custom p-6 lg:p-7 cursor-pointer"
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
              className="service-image rounded-xl shadow-xl w-full max-w-[450px]"
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
              className="service-image rounded-xl shadow-xl w-full max-w-[450px]"
            />
          </div>

          {/* Cards (50%) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {bottomCards.map((card, idx) => (
              <div
                key={idx}
                className="card-custom p-6 lg:p-7 cursor-pointer"
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
