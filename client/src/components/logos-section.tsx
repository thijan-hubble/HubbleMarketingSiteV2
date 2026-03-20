import AnimatedSection from "@/components/ui/animated-section";

const clients = [
  { name: "Flyte", logo: "/flyte-logo.avif", invert: true },
  { name: "GoMove", logo: "/GoMove-logo.svg", invert: false },
  { name: "Lieben Logistics", logo: "/LiebenLogistics-logo.png", invert: true },
  { name: "RSC", logo: "/RSC-LOGO.jpg", invert: false },
  { name: "Fresenius Kabi", logo: "/fresenius-kabi-logo.png", invert: false },
];

export default function LogosSection() {
  return (
    <section className="bg-white py-20">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Bold, proud heading */}
          <h2
            className="font-bold text-3xl md:text-4xl mb-4 text-black"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We're proud to build mission-critical software for operators who move the supply chain forward.
          </p>

          {/* Infinite scroll animation container */}
          <div className="relative overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Scrolling logos track */}
            <div className="flex items-center">
              <div className="flex items-center gap-16 animate-scroll-left">
                {/* First set */}
                {clients.map((client, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="flex items-center justify-center h-20 w-40 flex-shrink-0"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`max-h-20 max-w-40 w-auto h-auto object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300 ${client.invert ? 'invert hover:invert-0' : ''}`}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, idx) => (
                  <div
                    key={`second-${idx}`}
                    className="flex items-center justify-center h-20 w-40 flex-shrink-0"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`max-h-20 max-w-40 w-auto h-auto object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300 ${client.invert ? 'invert hover:invert-0' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
