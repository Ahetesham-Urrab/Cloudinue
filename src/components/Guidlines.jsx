// export default function Guidlines() {
//   const communication = [
//     "Communication through attentive engagement",
//     "Staying aligned with collaborative tools",
//     "Transparent interaction with all stakeholders",
//   ];

//   const personal = [
//     "Takes responsibility and ownership of tasks",
//     "Work-life balance through flexible work model",
//     "Respect and Professionalism towards all",
//     "Continuous Learning and Career Development",
//   ];

//   const Circle = () => (
//     <div
//       className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-white"
//       style={{ background: "#ff6a00" }}
//     >
//       ✓
//     </div>
//   );

//   return (
//     <section className="py-10 mt-4">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//           {/* Left Column */}
//           <div>
//             <h1 className="text-white text-4xl md:text-5xl mb-6">
//               Communication<br />Guidelines
//             </h1>

//             <ul className="flex flex-col gap-4">
//               {communication.map((item, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <Circle />
//                   <span className="text-white text-lg">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Column */}
//           <div>
//             <h1 className="text-white text-4xl md:text-5xl mb-6">
//               Personal<br />Guidelines
//             </h1>

//             <ul className="flex flex-col gap-4">
//               {personal.map((item, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <Circle />
//                   <span className="text-white text-lg">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Guidlines() {
  const communication = [
    "Communication through attentive engagement",
    "Staying aligned with collaborative tools",
    "Transparent interaction with all stakeholders",
  ];

  const personal = [
    "Takes responsibility and ownership of tasks",
    "Work-life balance through flexible work model",
    "Respect and Professionalism towards all",
    "Continuous Learning and Career Development",
  ];

  return (
    <section className="relative py-10 px-6">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[350px] h-[350px] bg-blue-500/20 blur-[150px]"></div>
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-600/20 blur-[140px]"></div>

      <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ---- LEFT COMM GUIDELINES ---- */}
        <div className="relative pl-6">
          <h2 className="text-white text-4xl font-bold mb-10">
            Communication Guidelines
          </h2>

          <div className="space-y-8">
            {communication.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                
                {/* Blue Tick */}
                <CheckCircleIcon className="w-7 h-7 text-blue-500 drop-shadow-[0_0_12px_rgba(0,123,255,0.7)]" />

                <p className="text-white/80 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT PERSONAL GUIDELINES ---- */}
        <div className="relative pl-6">
          <h2 className="text-white text-4xl font-bold mb-10">
            Personal Guidelines
          </h2>

          <div className="space-y-8">
            {personal.map((item, i) => (
              <div key={i} className="flex items-start gap-4">

                {/* Blue Tick */}
                <CheckCircleIcon className="w-7 h-7 text-blue-500 drop-shadow-[0_0_12px_rgba(0,123,255,0.7)]" />

                <p className="text-white/80 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


