export default function Footer() {
  const footerLink =
    "relative inline-block text-white/70 transition-all duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:w-full after:h-[2px] after:bg-[#00f0ff] " +
    "after:shadow-[0_0_8px_#00f0ff,0_0_15px_#00f0ff] " +
    "after:scale-x-0 after:origin-right after:transition-transform after:duration-300 " +
    "hover:after:scale-x-1 hover:after:origin-left " +
    "hover:text-[#00f0ff] hover:[text-shadow:0_0_4px_#00f0ff,0_0_8px_#00f0ff]";

  return (
    <footer className="text-white pt-12 pb-6 ">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand / About */}
          <div>
            <img src="/images/logo.png" className="w-4/5 -ml-2" alt="Cloudinue Logo" />
            <p className="text-white/60 mt-3">
              Delivering cloud, IT, and AI-powered solutions to help businesses grow efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold mb-3">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="/" className={footerLink}>Home</a></li>
              <li><a href="/services" className={footerLink}>Services</a></li>
              <li><a href="/about" className={footerLink}>About</a></li>
              <li><a href="/contact" className={footerLink}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-semibold mb-3">Services</h6>
            <ul className="space-y-2">
              <li><a href="/ai-solutions" className={footerLink}>AI Solutions</a></li>
              <li><a href="/cloud-consulting" className={footerLink}>Cloud Consulting Services</a></li>
              <li><a href="/cloud-implementation" className={footerLink}>Cloud Implementation Services</a></li>
              <li><a href="/managed-cloud" className={footerLink}>Managed Cloud and IT Services</a></li>
              <li><a href="/network-design" className={footerLink}>Network Design & Infrastructure</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-semibold mb-3">Contact</h6>
            <p className="text-white/60">support@cloudinue.com</p>
            <p className="text-white/60 mt-1">+91 77097 88869</p>
            <p className="text-white/60 mt-1">
              Shop/Office No. 14, Kumar Pavilion, East Street, PUNE 411001
            </p>
          </div>

        </div>

        <hr className="border-gray-700 mt-10" />

        <div className="text-center text-white/60 mt-4">
          © 2025 Cloudinue. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
