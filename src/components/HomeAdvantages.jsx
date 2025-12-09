export default function HomeAdvantages() {
  return (
    <section className="container mx-auto min-h-[80vh] flex flex-col items-center justify-center text-white">

      {/* Section Heading */}
      <h2 className="mb-8 text-white text-4xl md:text-5xl font-bold">
        Cloudinue Advantages
      </h2>

      <div className="w-full flex flex-wrap items-center justify-center">

        {/* Left Points */}
        <div className="lg:w-1/4 md:w-1/3 w-full text-center lg:text-right mb-6 px-4">

          <h5 className="reveal-text font-bold text-2xl" data-text="Enterprise-grade reliability">
            Enterprise-grade reliability
          </h5>
          <p className="opacity-75 text-sm">
            Powered by Microsoft Azure’s SLA-backed infrastructure.
          </p>

          <h5 className="reveal-text mt-6 font-bold text-2xl" data-text="Built for Startups and SMBs.">
            Built for Startups and SMBs.
          </h5>
          <p className="opacity-75 text-sm">
            Practical cloud solutions that match real budgets and timelines.
          </p>

        </div>

        {/* Center Image */}
        <div className="lg:w-1/2 md:w-1/3 w-full text-center mb-6 px-4">
          <img
            src="/images/unnamed (5).jpg"
            className="w-[90%] mx-auto rounded-lg"
            alt="Cloud Features"
          />
        </div>

        {/* Right Points */}
        <div className="lg:w-1/4 md:w-1/3 w-full text-center lg:text-left mb-6 px-4">

          <h5 className="reveal-text font-bold text-2xl" data-text="Fast, Human Support.">
            Fast, Human Support.
          </h5>
          <p className="opacity-75 text-sm">
            Direct access to people who actually understand your setup.
          </p>

          <h5 className="reveal-text mt-6 font-bold text-2xl" data-text="Simple and Clear.">
            Simple and Clear.
          </h5>
          <p className="opacity-75 text-sm">
            No jargon. No fluff. You always know what’s happening and why.
          </p>

        </div>

      </div>
    </section>
  );
}
