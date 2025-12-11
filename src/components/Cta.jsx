import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cta() {
  const navigate = useNavigate();

  return (
    <section className="py-8 text-center">
      <div className="container mx-auto px-4">

        {/* Main Heading */}
        <motion.h2
          className="text-white font-semibold text-[1.8rem] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          “Ready to transform your IT? 
          <a
            href="/contact"
            className="text-cyan-400 font-bold no-underline hover:underline ml-2 mr-2"
          >
            Contact Us
          </a>
          to start your journey with Cloudinue today.”
        </motion.h2>

        {/* Neon Reveal Contact Button */}
        <motion.h5
          className="reveal-text text-2xl font-bold mt-6 cursor-pointer inline-block"
          data-text="Contact Now"
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Contact Now
        </motion.h5>

      </div>
    </section>
  );
}
