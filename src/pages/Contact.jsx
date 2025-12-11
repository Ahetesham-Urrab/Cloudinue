export default function Contact() {
  return (
    <div className=" min-h-screen ">

      {/* ================= HERO ================= */}
      <section
        className="py-20 bg-cover bg-bottom"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.62)), url('/images/unnamed (1).jpg')",
        }}
      >
        <div className="container mx-auto px-4 py-10">

          <div className="text-left mb-5 mt-20">
            <h1 className="text-white font-bold text-4xl md:text-6xl">
              Let’s Talk Cloud
            </h1>
            <p className="text-white/70 text-lg mt-1 ">
              Ready to start your cloud journey or have a quick question?<br/>
Our experts respond fast and speak your language, wherever you are.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT — FORM */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-xl">

              <h4 className="text-white font-semibold text-xl mb-6">
                Send a Message
              </h4>

              <form className="space-y-4">
                <div>
                  <label className="text-white block mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-black/50 text-white border border-gray-600 
                               rounded-md px-3 py-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-white block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-black/50 text-white border border-gray-600 
                               rounded-md px-3 py-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-white block mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full bg-black/50 text-white border border-gray-600 
                               rounded-md px-3 py-2 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  className="w-full text-black font-semibold py-3 rounded-lg"
                  style={{ background: "#00eaff" }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT — CONTACT INFO */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-xl">

              <h4 className="text-white font-semibold text-xl mb-6">
                Contact Information
              </h4>

              {/* Email */}
              <div className="flex items-start mb-5">
                <div className="text-cyan-400 text-2xl mr-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h6 className="text-sm text-white/60 uppercase">Email</h6>
                  <p className="text-white">contact@cloudinue.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-5">
                <div className="text-cyan-400 text-2xl mr-3">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h6 className="text-sm text-white/60 uppercase">Phone</h6>
                  <p className="text-white">+4935372616940 (Germany)</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start mb-5">
                <div className="text-cyan-400 text-2xl mr-3">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div>
                  <h6 className="text-sm text-white/60 uppercase">WhatsApp</h6>
                  <p className="text-white">+917709788869 (India)</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start mb-5">
                <div className="text-cyan-400 text-2xl mr-3">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h6 className="text-sm text-white/60 uppercase">Office</h6>
                  <p className="text-white">
                    Shop/Office No. 14,<br />
                    Kumar Pavilion, East Street,<br />
                    PUNE 411001
                  </p>
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-xl overflow-hidden mt-5 h-64">
                <iframe
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3346364105946!2d73.87700687405878!3d18.513774082578465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c048d17b2161%3A0x300edd06f0e77f5a!2sKumar%20Pavilion!5e0!3m2!1sen!2sin!4v1764766910765!5m2!1sen!2sin"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
