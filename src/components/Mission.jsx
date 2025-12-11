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
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative w-full py-16 px-4 lg:px-12  overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 blur-[120px]"></div>

      <div className="relative max-w-[1400px] mx-auto text-center">

        {/* ---------- CARDS ROW ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

          {/* ------------------ Mission Card ------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group p-[2px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-700 shadow-lg"
          >
            <motion.div
              whileHover={{ y: -10, boxShadow: "0 0 30px #00e5ff" }}
              transition={{ duration: 0.3 }}
              className="bg-[#020b1a] rounded-3xl p-10 h-full"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                className="w-16 h-16 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl">🛡️</span>
              </motion.div>

              <h3 className="text-white text-4xl font-semibold mb-4">Mission</h3>

              <p className="text-white/80 text-lg leading-relaxed">
                To empower organizations with powerful, secure, and scalable
                cloud & AI solutions that boost efficiency and spark continuous
                innovation.
              </p>

              {/* Floating Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 flex justify-center"
              >
                <img
                  src="/images/Private.svg"
                  alt="Mission"
                  className="w-4/5 opacity-80 group-hover:opacity-100 transition duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ------------------ Vision Card ------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="group p-[2px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-700 shadow-lg"
          >
            <motion.div
              whileHover={{ y: -10, boxShadow: "0 0 30px #00e5ff" }}
              transition={{ duration: 0.3 }}
              className="bg-[#020b1a] rounded-3xl p-10 h-full"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="w-16 h-16 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl">🌐</span>
              </motion.div>

              <h3 className="text-white text-4xl font-semibold mb-4">Vision</h3>

              <p className="text-white/80 text-lg leading-relaxed">
                To be the world’s most trusted IT transformation partner,
                delivering cloud-first solutions that redefine business agility
                and future-readiness.
              </p>

              {/* Floating Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 flex justify-center"
              >
                <img
                  src="/images/Private.svg"
                  alt="Vision"
                  className="w-4/5 opacity-80 group-hover:opacity-100 transition duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

