// export default function Mission() {
//   return (
//     <section className="w-full py-12 px-4 lg:px-12 relative">
//       <div className="max-w-[1400px] mx-auto">

//         {/* ---------- Mission ---------- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-20 relative px-0 lg:px-10">

//           {/* Left Text */}
//           <div className="order-1 lg:order-1 relative mb-6 lg:mb-0">
//             {/* Circle Decoration */}
//             <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 rounded-full bg-cyan-500/20 blur-2xl"></div>

//             <h3 className="text-white text-4xl md:text-5xl font-bold mb-4">
//               Our Mission
//             </h3>

//             <p className="text-white text-lg md:text-xl leading-snug">
//               Empower ambitious organizations with tailored cloud and AI
//               solutions that drive growth, boost efficiency, and create
//               long-term success through innovation and collaboration.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="order-2 lg:order-2 flex justify-center">
//             <img
//               src="/images/Private.svg"
//               className="w-3/4 lg:w-full"
//               alt="Mission"
//             />
//           </div>

//           {/* Background Blur Circle */}
//           <div className="hidden lg:block absolute top-0 right-0 w-60 h-60 rounded-full bg-blue-500/20 blur-3xl"></div>
//         </div>

//         {/* ---------- Vision ---------- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-10 lg:mb-16 relative px-0 lg:px-10">

//           {/* Left Image (reversed) */}
//           <div className="order-2 lg:order-1 flex justify-center mb-6 lg:mb-0">
//             <img
//               src="/images/Private.svg"
//               className="w-3/4 lg:w-full"
//               alt="Vision"
//             />
//           </div>

//           {/* Right Text */}
//           <div className="order-1 lg:order-2 relative">
//             {/* Circle Decoration */}
//             <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-2xl"></div>

//             <h3 className="text-white text-4xl md:text-5xl font-bold mb-4">
//               Our Vision
//             </h3>

//             <p className="text-white text-lg md:text-xl leading-snug">
//               Be the trusted IT partner for businesses worldwide. Deliver
//               secure, scalable, and forward-thinking solutions that thrive
//               in today’s digital-first world.
//             </p>
//           </div>

//           {/* Background Blur Circle */}
//           <div className="hidden lg:block absolute top-0 left-0 w-60 h-60 rounded-full bg-blue-500/20 blur-3xl"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Mission() {
  return (
    <section className="relative w-full py-8 px-4 lg:px-12 bg-black overflow-hidden">

      {/* Angled Blue Overlay Background */}
      <div className="absolute inset-0 rotate-1 scale-110"></div>

      {/* Soft Glow Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 blur-[120px]"></div>

      <div className="relative max-w-[1400px] mx-auto text-center">
        
        {/* ---------- MAIN HEADING ---------- */}
        {/* <h2 className="text-white text-5xl font-bold mb-6 tracking-wide">
          Our Core Beliefs
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-16">
          The foundation of Cloudinue is built on innovation, trust, and
          long-term partnership. We help businesses evolve through modern cloud
          and AI transformation.
        </p> */}

        {/* ---------- CARDS ROW ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

          {/* ------------------ Mission Card ------------------ */}
          <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-700 shadow-lg">
            <div className="bg-[#020b1a] rounded-3xl p-10 h-full">

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition">
                <span className="text-3xl">🛡️</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-4xl font-semibold mb-4">
                Mission
              </h3>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed">
                To empower organizations with powerful, secure, and scalable
                cloud & AI solutions that boost efficiency and spark continuous
                innovation.
              </p>

              {/* Image */}
              <div className="mt-8 flex justify-center">
                <img
                  src="/images/Private.svg"
                  alt="Mission"
                  className="w-4/5 opacity-80 group-hover:opacity-100 transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* ------------------ Vision Card ------------------ */}
          <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-700 shadow-lg">
            <div className="bg-[#020b1a] rounded-3xl p-10 h-full">

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition">
                <span className="text-3xl">🌐</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-4xl font-semibold mb-4">
                Vision
              </h3>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed">
                To be the world’s most trusted IT transformation partner,
                delivering cloud-first solutions that redefine business agility
                and future-readiness.
              </p>

              {/* Image */}
              <div className="mt-8 flex justify-center">
                <img
                  src="/images/Private.svg"
                  alt="Vision"
                  className="w-4/5 opacity-80 group-hover:opacity-100 transition duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
