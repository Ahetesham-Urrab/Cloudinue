import { useNavigate } from "react-router-dom";

export default function Cta() {
  const navigate = useNavigate();

  return (
    <section className="py-8 text-center">
      <div className="container mx-auto px-4">

        {/* Main Heading */}
        <h2 className="text-white font-semibold text-[1.8rem] leading-relaxed">
          “Ready to transform your IT? 
          <a
            href="/contact"
            className="text-cyan-400 font-bold no-underline hover:underline ml-2 mr-2"
          >
            Contact Us
          </a>
          to start your journey with Cloudinue today.”
        </h2>

        {/* Neon Reveal Contact Button */}
        <h5
          className="reveal-text text-2xl font-bold mt-6 cursor-pointer inline-block"
          data-text="Contact Now"
          onClick={() => navigate("/contact")}
        >
          Contact Now
        </h5>

      </div>
    </section>
  );
}
