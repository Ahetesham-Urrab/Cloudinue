// NeonButton.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NeonButton({ text, onClick }) {
  const btnRef = useRef(null);
  const barRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const bar = barRef.current;
    const reveal = revealRef.current;

    // ❌ Disable CSS looping animations initially
    bar.classList.remove("animate-slideLine");
    reveal.classList.remove("animate-revealText");

    ScrollTrigger.create({
      trigger: btn,
      start: "top 80%",
      once: true,

      onEnter: () => {
        // ✅ Enable animations only once
        bar.classList.add("animate-slideLine");
        reveal.classList.add("animate-revealText");

        // OPTIONAL: stop animation at end (freeze final frame)
        setTimeout(() => {
          bar.style.animationIterationCount = "1";
          reveal.style.animationIterationCount = "1";
        }, 50);
      }
    });
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className="relative inline-block px-0 sm:px-4 py-2 sm:py-3 font-semibold text-white overflow-hidden group mt-5"
    >
      {/* Background dim text */}
      <span className="z-10 text-white/25 relative w-full text-lg sm:text-2xl uppercase">
        {text}
      </span>

      {/* Vertical neon line */}
      <span
        ref={barRef}
        className="absolute top-0 left-[-3px] sm:left-[-4px] w-[3px] sm:w-[4px] h-full bg-[#00e5ff]
                 shadow-[0_0_8px_#00e5ff,0_0_16px_#00e5ff]
                 sm:shadow-[0_0_10px_#00e5ff,0_0_20px_#00e5ff]"
      ></span>

      {/* Neon text reveal */}
      <span
        ref={revealRef}
        className="absolute top-2 sm:top-3 left-0 w-full h-full text-[#00e5ff]
                 clip-[rect(0,0,100%,0)] text-lg sm:text-2xl uppercase"
      >
        {text}
      </span>
    </button>
  );
}
