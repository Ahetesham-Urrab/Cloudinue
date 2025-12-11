// export default function Principle() {
//     const principles = [
//         {
//             id: "01",
//             title: "Customer-Centric",
//             desc: "Every solution starts with your goals. We measure success by the value you receive.",
//             gradient: "linear-gradient(135deg,#00c6ff,#0072ff)"
//         },
//         {
//             id: "02",
//             title: "Reliability",
//             desc: "Only promise what we can deliver, then deliver every time.",
//             gradient: "linear-gradient(135deg,#ff7b00,#ff2753)"
//         },
//         {
//             id: "03",
//             title: "Collaboration",
//             desc: "Build lasting partnerships through trust and transparency.",
//             gradient: "linear-gradient(135deg,#7b5fff,#55c3ff)"
//         },
//         {
//             id: "04",
//             title: "Excellence",
//             desc: "We measure success by the value you receive.",
//             gradient: "linear-gradient(135deg,#00d2ff,#3a7bd5)"
//         },
//         {
//             id: "05",
//             title: "Respect & Professionalism",
//             desc: "Treat our people and partners with respect, always.",
//             gradient: "linear-gradient(135deg,#ff7b00,#ff2753)"
//         },
//         {
//             id: "06",
//             title: "Continuous Learning",
//             desc: "Invest in skills and innovation so our team stays ahead.",
//             gradient: "linear-gradient(135deg,#7b5fff,#55c3ff)"
//         },
//     ];

//     return (
//         <section className="py-14">
//             <div className="text-center mb-10">
//                 <h2 className="text-white text-4xl md:text-5xl font-bold">
//                     Our Principles
//                 </h2>
//             </div>

//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {principles.map((item) => (
//                         <div
//                             key={item.id}
//                             className="p-6 text-center rounded-lg bg-[#010101] text-white"
//                             style={{
//                                 minHeight: "230px",
//                                 boxShadow:
//                                     "inset #0084ffa3 0 49px 90px -55px, inset #f6f6f6a3 0 18px 71px -40px",
//                             }}
//                         >
//                             <div
//                                 className="w-[65px] h-[65px] rounded-full mx-auto flex items-center justify-center"
//                                 style={{ background: item.gradient }}
//                             >
//                                 <span className="font-bold text-lg">{item.id}</span>
//                             </div>

//                             <h5 className="font-bold mt-4 text-xl">{item.title}</h5>
//                             <p className="mt-1">{item.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import { motion } from "framer-motion";

export default function Principle() {
  const principles = [
    { id: "01", title: "Customer-Centric", desc: "Every solution begins with your goals. Your success defines ours." },
    { id: "02", title: "Reliability", desc: "Commit to what we can deliver — then deliver precisely, every time." },
    { id: "03", title: "Collaboration", desc: "Work side-by-side to build trust, transparency, and shared success." },
    { id: "04", title: "Excellence", desc: "Pursue the highest standards in every project and every outcome." },
    { id: "05", title: "Respect & Professionalism", desc: "Uphold respect and integrity with our team and partners." },
    { id: "06", title: "Continuous Learning", desc: "Improve constantly to stay ahead in technology and innovation." }
  ];

  return (
    <section className="relative py-10 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-10 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px]" />

      <div className="relative max-w-[1350px] mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-5xl font-bold tracking-wide drop-shadow-lg">
            Our Principles
          </h2>
          <p className="text-white/60 text-lg mt-3 max-w-2xl mx-auto">
            The core values that guide everything we build, deliver, and achieve together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {principles.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="
                relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg 
                border border-white/10 shadow-xl
                hover:shadow-blue-500/30 hover:border-blue-500/40
                transition-all duration-300 
              "
            >
              {/* Neon Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="
                  absolute -top-6 -left-6 w-20 h-20 rounded-2xl 
                  bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl 
                  flex items-center justify-center
                "
              >
                <span
                  className="text-white text-3xl font-extrabold tracking-widest"
                  style={{ fontFamily: "DoppioOne, sans-serif" }}
                >
                  {item.id}
                </span>
              </motion.div>

              <h3 className="text-white text-2xl font-semibold mt-10 mb-3">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-[17px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

