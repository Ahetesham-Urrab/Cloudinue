// import { useState } from "react";

// export default function HowWeWork() {
//   const [open, setOpen] = useState(1);

//   const toggle = (index) => {
//     setOpen(open === index ? null : index);
//   };

//   return (
//     <section className="py-20 how-work-section bg-transparent">
//       <div className="container mx-auto px-4">

//         <h1 className="text-center font-bold text-3xl md:text-4xl mb-3 text-[#d8e7ff]">
//           How We Work
//         </h1>

//         <p className="text-center text-[#d8e7ff] mb-8 text-lg">
//           Our approach is designed to deliver measurable results while ensuring a smooth client experience:
//         </p>

//         <div className="space-y-4 max-w-3xl mx-auto">

//           {/* Item 1 */}
//           <div className="accordion-item bg-[rgba(0,20,60,0.35)] backdrop-blur-md 
//                           border border-[rgba(0,140,255,0.4)] rounded-xl shadow-[0_0_18px_rgba(0,110,255,0.15)]">
//             <button
//               onClick={() => toggle(1)}
//               className={`w-full text-left px-6 py-4 font-semibold rounded-xl transition 
//                 ${open === 1
//                   ? "bg-gradient-to-br from-[rgba(0,110,255,0.8)] to-[rgba(0,60,180,0.9)] text-white shadow-[0_0_20px_rgba(0,140,255,0.9)]"
//                   : "bg-[rgba(0,30,70,0.45)] text-[#cce4ff] hover:shadow-[0_0_15px_rgba(0,140,255,0.7)]"
//                 }`}
//             >
//               1. 100% Remote and Flexible Work
//             </button>

//             {open === 1 && (
//               <div className="accordion-body px-6 py-4 bg-[rgba(0,15,40,0.55)] border-l-4 
//                               border-[rgba(0,140,255,0.8)] text-[#d0e5ff]">
//                 Get experts, support, and projects delivered across borders with no friction.
//               </div>
//             )}
//           </div>

//           {/* Item 2 */}
//           <div className="accordion-item bg-[rgba(0,20,60,0.35)] backdrop-blur-md 
//                           border border-[rgba(0,140,255,0.4)] rounded-xl shadow-[0_0_18px_rgba(0,110,255,0.15)]">
//             <button
//               onClick={() => toggle(2)}
//               className={`w-full text-left px-6 py-4 font-semibold rounded-xl transition 
//                 ${open === 2
//                   ? "bg-gradient-to-br from-[rgba(0,110,255,0.8)] to-[rgba(0,60,180,0.9)] text-white shadow-[0_0_20px_rgba(0,140,255,0.9)]"
//                   : "bg-[rgba(0,30,70,0.45)] text-[#cce4ff] hover:shadow-[0_0_15px_rgba(0,140,255,0.7)]"
//                 }`}
//             >
//               2. Transparent Communication
//             </button>

//             {open === 2 && (
//               <div className="accordion-body px-6 py-4 bg-[rgba(0,15,40,0.55)] border-l-4 
//                               border-[rgba(0,140,255,0.8)] text-[#d0e5ff]">
//                 Clear, open, and structured communication throughout the engagement.
//               </div>
//             )}
//           </div>

//           {/* Item 3 */}
//           <div className="accordion-item bg-[rgba(0,20,60,0.35)] backdrop-blur-md 
//                           border border-[rgba(0,140,255,0.4)] rounded-xl shadow-[0_0_18px_rgba(0,110,255,0.15)]">
//             <button
//               onClick={() => toggle(3)}
//               className={`w-full text-left px-6 py-4 font-semibold rounded-xl transition 
//                 ${open === 3
//                   ? "bg-gradient-to-br from-[rgba(0,110,255,0.8)] to-[rgba(0,60,180,0.9)] text-white shadow-[0_0_20px_rgba(0,140,255,0.9)]"
//                   : "bg-[rgba(0,30,70,0.45)] text-[#cce4ff] hover:shadow-[0_0_15px_rgba(0,140,255,0.7)]"
//                 }`}
//             >
//               3. Real Accountability
//             </button>

//             {open === 3 && (
//               <div className="accordion-body px-6 py-4 bg-[rgba(0,15,40,0.55)] border-l-4 
//                               border-[rgba(0,140,255,0.8)] text-[#d0e5ff]">
//                 Ownership, transparency, and full responsibility for results.
//               </div>
//             )}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
import { useState } from "react";

export default function HowWeWork() {
  const [open, setOpen] = useState(1);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const items = [
    {
      id: 1,
      title: "100% Remote and Flexible Work",
      content: "Get experts, support, and projects delivered across borders with no friction.",
    },
    {
      id: 2,
      title: "Transparent Communication",
      content: "Clear, open, and structured communication throughout the engagement.",
    },
    {
      id: 3,
      title: "Real Accountability",
      content: "Ownership, transparency, and full responsibility for results.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">

      {/* Background Accents */}
      <div className="absolute left-[-200px] top-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute right-[-200px] bottom-0 w-[400px] h-[400px] bg-blue-700/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative">

        {/* Heading */}
        <h1 className="text-center font-bold text-4xl md:text-5xl mb-3 text-[#d8e7ff]">
          How We Work
        </h1>
        <p className="text-center text-[#d8e7ff] mb-12 text-lg max-w-2xl mx-auto">
          Our workflow ensures clarity, transparency and world-class execution at every step.
        </p>

        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-900 rounded-full opacity-60"></div>

          <div className="space-y-8">

            {items.map((item) => (
              <div key={item.id} className="relative pl-14">

                {/* Timeline Dot */}
                <div className="absolute left-2.5 top-5 w-4 h-4 rounded-full bg-gradient-to-br from-blue-300 to-blue-700 shadow-[0_0_12px_rgba(0,140,255,0.8)]"></div>

                {/* Accordion Header */}
                <button
                  onClick={() => toggle(item.id)}
                  className={`
                    w-full text-left py-4 px-6 rounded-xl font-semibold transition-all duration-300
                    border border-blue-500/30 backdrop-blur-md
                    ${
                      open === item.id
                        ? "bg-blue-600/40 text-white shadow-[0_0_20px_rgba(0,150,255,0.5)] border-blue-400/60"
                        : "bg-blue-900/20 text-blue-100 hover:bg-blue-800/30 hover:shadow-[0_0_15px_rgba(0,150,255,0.4)]"
                    }
                  `}
                >
                  <span className="text-xl">{item.id}. {item.title}</span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open === item.id ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 bg-blue-950/40 border-l-4 border-blue-400/70 text-blue-100 rounded-md">
                    {item.content}
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}
