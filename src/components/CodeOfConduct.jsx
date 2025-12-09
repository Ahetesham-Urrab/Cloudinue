// export default function CodeOfConduct() {
//   return (
//     <section className="py-10">
//       <div className="container mx-auto text-center px-4">

//         {/* Heading */}
//         <h1 className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl font-semibold">
//           Code of Conduct
//         </h1>

//         {/* Paragraph */}
//         <p className="text-white text-lg md:text-xl leading-snug max-w-3xl mx-auto">
//           Our Code of Conduct is designed to uphold the highest ethical standards in all aspects of our work.
//           It emphasizes respect for all individuals, fostering an environment of equality and dignity. We are
//           committed to compliance with all applicable laws, regulations, and internal policies, ensuring that
//           our actions align with legal and organizational expectations. The Code also guides us to avoid
//           conflicts of interest, thereby safeguarding Cloudinue’s reputation and fostering trust. Protecting
//           sensitive information and maintaining confidentiality are fundamental principles we adhere to
//           rigorously. Above all, we strive to uphold integrity in all our interactions and decisions, reflecting
//           our unwavering commitment to ethical excellence.
//         </p>

//       </div>
//     </section>
//   );
// }
export default function CodeOfConduct() {
  return (
    <section className="relative py-10 overflow-hidden">

      {/* Abstract Blue Background Accents */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        
        {/* Title */}
        <h1 className="text-center text-white text-4xl md:text-6xl font-bold mb-12 tracking-tight">
          Code of Conduct
        </h1>

        {/* Lines + Paragraph Section */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          
          {/* Vertical Line */}
          <div className="hidden md:block w-2 h-full bg-gradient-to-b from-blue-300/60 to-blue-900/60 rounded-full"></div>

          {/* Text */}
          <p className="text-white/90 text-xl leading-relaxed backdrop-blur-sm">
            Our Code of Conduct is built around integrity, respect, and accountability.
            We ensure fair treatment for every individual while maintaining
            compliance with all laws, regulations, and internal policies.
            <br /><br />
            We prioritize the protection of confidential information, the
            avoidance of conflicts of interest, and upholding trust in every
            decision. Our commitment to ethical behavior reflects Cloudinue’s
            dedication to excellence, professionalism, and responsibility.
          </p>

        </div>
      </div>
    </section>
  );
}
