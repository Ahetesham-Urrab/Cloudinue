// import React from "react";
// import NeonButton from "./NeonButton";

// const services = [
//   {
//     id: 1,
//     title: "Cloud Consulting & Advisory",
//     description:
//       "Direct, jargon-free cloud strategy with practical roadmaps for easy adoption, hybrid integration, and risk-free migration.",
//     image: "/images/Private.svg",
//     reverse: false,
//     circleClass: "bg-[#00e5ff]/20", // circle color for decoration
//   },
//   {
//     id: 2,
//     title: "Managed Cloud & IT Services",
//     description:
//       "Round-the-clock monitoring, proactive patching, and hands-off management, so your team can focus on business growth not infrastructure headaches.",
//     image: "/images/Private.svg",
//     reverse: true,
//     circleClass: "bg-[#00e5ff]/20",
//   },
//   {
//     id: 3,
//     title: "AI & Automation Solutions",
//     description:
//       "Transform workflows with next-gen models, AI copilots, and effective automation. We build, deploy, and optimize solutions that deliver real business value.",
//     image: "/images/Private.svg",
//     reverse: false,
//     circleClass: "bg-[#00e5ff]/20",
//   },
//   {
//     id: 4,
//     title: "Secure Network Design",
//     description:
//       "Enterprise-grade, vendor-neutral networks built to scale, defend, and perform. We specialize in unified management of cloud, hybrid, and on-prem environments to ensure compliance and reliability.",
//     image: "/images/Private.svg",
//     reverse: true,
//     circleClass: "bg-[#00e5ff]/20",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-16 px-6 md:px-20 bg-black">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-white text-4xl md:text-5xl">Our Services</h2>
//       </div>

//       {/* Service Items */}
//       {services.map((service, index) => (
//         <div
//           key={service.id}
//           className={`flex flex-col md:flex-row items-center mb-16 ${
//             service.reverse ? "md:flex-row-reverse" : ""
//           } relative`}
//         >
//           {/* Content */}
//           <div className="w-full md:w-1/2 mb-8 md:mb-0 relative px-5">
//             {/* Decorative Circle */}
//             <div className={`hidden md:block w-20 h-20 rounded-full absolute -top-10 ${service.circleClass} blur-3xl`} />
            
//             <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">{service.title}</h3>
//             <p className="text-white text-base md:text-lg mb-6 leading-relaxed">{service.description}</p>
//             <NeonButton text="Learn More" />
//           </div>

//           {/* Image */}
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <img src={service.image} alt={service.title} className="w-3/5 md:w-3/5 object-contain" />
//           </div>

//           {/* Optional Background Blurred Circle */}
//           <div
//             className={`hidden lg:block absolute rounded-full opacity-20 w-40 h-40 ${
//               service.reverse ? "left-0 top-0 bg-[#00e5ff]" : "right-0 top-0 bg-[#00e5ff]"
//             } blur-3xl`}
//           ></div>
//         </div>
//       ))}
//     </section>
//   );
// }
import { FiUploadCloud } from "react-icons/fi";
import React from "react";
import NeonButton from "./NeonButton";

const services = [
  {
    id: 1,
    title: "Cloud Consulting & Advisory",
    description:
      "Direct, jargon-free cloud strategy with practical roadmaps for smooth adoption, hybrid integration, and risk-free migration.",
    image: "/images/Private.svg",
  },
  {
    id: 2,
    title: "Managed Cloud & IT Services",
    description:
      "24/7 monitoring, proactive patching, and hands-off management so your team can focus on business—not infrastructure headaches.",
    image: "/images/Private.svg",
  },
  {
    id: 3,
    title: "AI & Automation Solutions",
    description:
      "Transform workflows with AI copilots, robust automation, and next-gen models designed to deliver measurable business outcomes.",
    image: "/images/Private.svg",
  },
  {
    id: 4,
    title: "Secure Network Design",
    description:
      "Enterprise-grade, scalable, and secure networks built to support cloud, hybrid, and on-prem infrastructures with reliability and compliance.",
    image: "/images/Private.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-5 px-6 md:px-20 bg-[#010101] text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Expert cloud, AI, and network solutions engineered for modern businesses.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#111111] hover:bg-[#0a0a0a] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_#00e5ff] cursor-pointer"
          >
            {/* Neon glow circle */}
            <div className="w-24 h-24 rounded-full bg-[#00e5ff]/20 blur-3xl absolute -top-10 group-hover:scale-110 transition-transform duration-500"></div>

            {/* Image */}
            {/* <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain mb-4 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#00e5ff]"
            /> */}
            <FiUploadCloud className="text-7xl"/>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-2 z-10">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base mb-4 z-10">
              {service.description}
            </p>

            {/* Neon Button */}
            <NeonButton text="Learn More"/>
          </div>
        ))}
      </div>
    </section>
  );
}
