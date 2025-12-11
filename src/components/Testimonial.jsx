import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  const stories = [
    {
      text: `“Cloudinue has been an invaluable partner in our journey to deliver seamless digital solutions to our clients. By setting up a robust and secure infrastructure within our own cloud environment, Cloudinue has enabled us to scale efficiently, ensuring the security and availability of our hosted applications. The team at Cloudinue is highly responsive, technically adept, and always ready to provide the support we need, allowing us to focus on what we do best—building custom web and mobile solutions for our clients. We highly recommend Cloudinue to any business seeking a dependable partner for their digital transformation needs.”`,
      name: "– Rakshith Ramesh",
      role: "Principal Solution Architect, Whitespace",
    },
    {
      text: `“Cloudinue unterstützte unsere NGO bei der Einführung von Microsoft 365, einschließlich Teams und Exchange Online. Das Team bot eine professionelle Beratung und sorgte für eine reibungslose Implementierung, die die Zusammenarbeit in unserer Organisation deutlich verbesserte. Besonders dankbar sind wir für die kostenlose Beratung, die nicht nur ihre Expertise, sondern auch ihr Engagement für den Erfolg gemeinnütziger Organisationen widerspiegelt.”`,
      name: "– Eva Czerwonka",
      role: "Mitglied des Finanzvorstands, Wicke Assel Sölde Reit und Fahrverein",
    },
  ];

  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-6 py-5 ">
      
      {/* Heading */}
      <motion.h2
        className="text-white text-4xl md:text-5xl text-center font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Success Stories from Our Clients
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="rounded-2xl text-white border-0 overflow-hidden p-8 min-h-[400px]"
            style={{
              backgroundColor: "#010101",
              boxShadow:
                "inset #0084ffa3 0 49px 90px -55px, inset #f6f6f6a3 0 18px 71px -40px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="opacity-75 text-start mb-6 leading-relaxed">
              {story.text}
            </p>

            <h5 className="text-2xl font-semibold" style={{ color: "#00D8FF" }}>
              {story.name}
            </h5>

            <span className="text-gray-300 text-sm">{story.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
