import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/animated-section";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0F1C" }}
    >
      {/* Triangle constellation background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Scattered triangles — brand motif */}
        <div
          className="absolute top-24 left-12 w-0 h-0 opacity-10 animate-pulse"
          style={{
            borderLeft: "18px solid transparent",
            borderRight: "18px solid transparent",
            borderBottom: "30px solid #4F8EF7",
          }}
        />
        <div
          className="absolute top-16 right-24 w-0 h-0 opacity-8 animate-pulse"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "17px solid #ffffff",
            animationDelay: "0.7s",
          }}
        />
        <div
          className="absolute top-1/3 right-16 w-0 h-0 opacity-10"
          style={{
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderBottom: "24px solid #4F8EF7",
          }}
        />
        <div
          className="absolute bottom-24 right-1/3 w-0 h-0 opacity-10 animate-pulse"
          style={{
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "34px solid #4F8EF7",
            animationDelay: "0.4s",
          }}
        />
        <div
          className="absolute top-1/2 left-8 w-0 h-0 opacity-6"
          style={{
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: "11px solid #4F8EF7",
          }}
        />
        <div
          className="absolute top-3/4 right-8 w-0 h-0 opacity-8 animate-pulse"
          style={{
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "20px solid #ffffff",
            animationDelay: "1.8s",
          }}
        />

        {/* Subtle star dots */}
        {[
          { x: "15%", y: "20%", size: 1.5, delay: "0s" },
          { x: "82%", y: "15%", size: 1, delay: "0.6s" },
          { x: "70%", y: "60%", size: 1.5, delay: "1.1s" },
          { x: "25%", y: "75%", size: 1, delay: "0.3s" },
          { x: "90%", y: "80%", size: 1.5, delay: "0.9s" },
          { x: "45%", y: "10%", size: 1, delay: "1.5s" },
          { x: "55%", y: "85%", size: 1, delay: "0.2s" },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: star.x,
              top: star.y,
              width: star.size * 2,
              height: star.size * 2,
              backgroundColor: "#4F8EF7",
              opacity: 0.4,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="text-center lg:text-left">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/15 bg-white/5">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#4F8EF7" }}
              />
              <span className="text-sm text-white/60 font-medium tracking-wide">
                Cape Town, South Africa
              </span>
            </div>

            <h1
              className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Your Operation Deserves Better Than{" "}
              <span className="relative">
                <span style={{ color: "#4F8EF7" }}>Spreadsheets and WhatsApp</span>
                <div
                  className="absolute -bottom-2 left-0 w-full h-0.5 opacity-40"
                  style={{ backgroundColor: "#4F8EF7" }}
                />
              </span>
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              Custom operations software for South Africa's supply chain — transport, warehousing, 3PL, manufacturing, and packaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="text-lg px-8 py-4 font-semibold btn-shimmer text-white border-0"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Start a Conversation
              </Button>
              <Button
                onClick={() => scrollToSection("case-studies")}
                variant="outline"
                size="lg"
                className="border border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-4 bg-transparent"
              >
                See What We've Built
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-10 border-t border-white/10 mt-10">
              <div className="text-center">
                <div
                  className="font-bold text-3xl text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  10+
                </div>
                <div className="text-white/50 text-sm font-medium mt-1">
                  Projects Delivered
                </div>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="text-center">
                <div
                  className="font-bold text-3xl"
                  style={{ color: "#4F8EF7", fontFamily: "Montserrat, sans-serif" }}
                >
                  5
                </div>
                <div className="text-white/50 text-sm font-medium mt-1">
                  Industries Served
                </div>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="text-center">
                <div
                  className="font-bold text-3xl text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  1–2 Wks
                </div>
                <div className="text-white/50 text-sm font-medium mt-1">
                  First Value Delivered
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Animated network diagram */}
          <AnimatedSection delay={0.3} className="relative">
            <div
              className="rounded-2xl shadow-2xl p-4 h-96 flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: "#0F1A2E",
                boxShadow:
                  "0 0 60px rgba(79, 142, 247, 0.12), 0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              {/* Card border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: "1px solid rgba(79, 142, 247, 0.15)" }}
              />

              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                className="absolute inset-0"
              >
                <defs>
                  <pattern
                    id="hero-grid"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 30"
                      fill="none"
                      stroke="rgba(79,142,247,0.06)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <filter id="node-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="line-glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />

                {/* Main flow lines — electric blue with glow */}
                <g
                  stroke="#4F8EF7"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#line-glow)"
                >
                  {/* Horizontal main line */}
                  <path d="M 60 150 L 340 150">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,280;280,0;280,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.9;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Verticals */}
                  <path d="M 120 90 L 120 150">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,60;60,0"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M 200 150 L 200 210">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,60;60,0"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M 280 90 L 280 150">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,60;60,0"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                {/* Branch lines — dimmer */}
                <g stroke="#4F8EF7" strokeWidth="1.5" fill="none" opacity="0.4">
                  <path d="M 80 90 L 160 90">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,80;80,0"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M 160 210 L 240 210">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,80;80,0"
                      dur="2.7s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M 240 90 L 320 90">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,80;80,0"
                      dur="3.1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                {/* Main nodes — white fill with blue glow */}
                <g filter="url(#node-glow)">
                  <circle cx="120" cy="150" r="7" fill="#4F8EF7">
                    <animate
                      attributeName="r"
                      values="6;9;6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="200" cy="150" r="7" fill="white" opacity="0.9">
                    <animate
                      attributeName="r"
                      values="6;9;6"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="280" cy="150" r="7" fill="#4F8EF7">
                    <animate
                      attributeName="r"
                      values="6;9;6"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Branch nodes */}
                <g opacity="0.7">
                  <circle cx="120" cy="90" r="4" fill="#4F8EF7">
                    <animate
                      attributeName="opacity"
                      values="0.4;0.9;0.4"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="200" cy="210" r="4" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0.4;0.9;0.4"
                      dur="2.1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="280" cy="90" r="4" fill="#4F8EF7">
                    <animate
                      attributeName="opacity"
                      values="0.4;0.9;0.4"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Rectangular process boxes with blue outline */}
                <g fill="none" stroke="#4F8EF7" strokeWidth="1.5" opacity="0.3">
                  <rect x="102" y="132" width="36" height="36" rx="4">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.2;0.7;0.2"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect x="182" y="132" width="36" height="36" rx="4">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.2;0.7;0.2"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect x="262" y="132" width="36" height="36" rx="4">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.2;0.7;0.2"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </svg>

              {/* Industry labels — all 5 sectors */}
              <div
                className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded"
                style={{
                  color: "#4F8EF7",
                  backgroundColor: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                Road Freight
              </div>
              <div
                className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded"
                style={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Manufacturing
              </div>
              <div
                className="absolute bottom-3 left-3 text-xs font-semibold px-2 py-1 rounded"
                style={{
                  color: "#4F8EF7",
                  backgroundColor: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                Warehousing
              </div>
              <div
                className="absolute bottom-3 right-3 text-xs font-semibold px-2 py-1 rounded"
                style={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Packaging
              </div>
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-2 py-1 rounded"
                style={{
                  color: "#4F8EF7",
                  backgroundColor: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                3PL & Courier
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
