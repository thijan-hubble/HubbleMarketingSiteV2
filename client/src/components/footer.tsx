import hubbleWhiteLogo from "@assets/Hubble White Logo.png";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="text-white py-16"
      style={{
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(79, 142, 247, 0.2)",
        boxShadow: "0 -6px 40px rgba(79, 142, 247, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={hubbleWhiteLogo} alt="Hubble — Custom Supply Chain Software South Africa" className="h-12 w-auto" />
            <p className="text-gray-400 leading-relaxed text-sm">
              Boutique supply chain software. Built for South African operators,
              not just IT.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/hubbleincor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Hubble on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              {["Quick Win Tools", "Core Systems", "End-to-End Platforms"].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo("services")} className="text-gray-400 hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {["Road Freight & Transport", "Warehousing & Distribution", "3PL & Courier", "Manufacturing", "Packaging & Production"].map((industry) => (
                <li key={industry}>
                  <button onClick={() => scrollTo("services")} className="text-gray-400 hover:text-white transition-colors text-left">
                    {industry}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", id: "about" },
                { label: "Case Studies", id: "case-studies" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="text-gray-400 hover:text-white transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Hubble. All rights reserved. Cape Town, South Africa.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
