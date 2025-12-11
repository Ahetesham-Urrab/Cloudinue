import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // icon

const services = [
  {
    title: "AI Solutions",
    description: "Modernize, migrate & scale your cloud environment.",
    link: "/ai-solutions",
    // icon: "/images/cloud-icon.png",
  },
  {
    title: "Cloud Consulting Services",
    description: "Automate build, test & deployment pipelines.",
    link: "/cloud-consulting",
    // icon: "/images/devops-icon.png",
  },
  {
    title: "Cloud Implementation Services",
    description: "Compliance, audits & risk protection.",
    link: "/cloud-implementation",
    // icon: "/images/security-icon.png",
  },
  {
    title: "Managed Cloud & IT Services",
    description: "Smart AI workflows for next-gen efficiency.",
    link: "/managed-cloud",
    // icon: "/images/ai-icon.png",
  },
  {
    title: "Network Design & Infrastructure",
    description: "Smart AI workflows for next-gen efficiency.",
    link: "/network-design",
    // icon: "/images/ai-icon.png",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="
              group p-6 rounded-xl border border-gray-700 bg-black/40
              transition-all duration-300
              hover:border-blue-500 
              shadow-[0_0_16px_#00e5ff]
              hover:scale-105
            "
          >
            <div className="flex justify-center mb-4">
              {/* <img
                // src={service.icon}
                alt={service.title}
                className="w-14 h-14 object-contain group-hover:scale-110 transition duration-300"
              /> */}
            </div>

            <h3 className="text-white text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm text-center mb-4">
              {service.description}
            </p>

            <div className="flex justify-center">
              <ArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
