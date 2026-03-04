import AnimatedSection from "@/components/ui/animated-section";

export default function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: "#0A0F1C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/15 bg-white/5">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#4F8EF7" }}
                  />
                  <span className="text-sm text-white/60 font-medium tracking-wide">
                    Why Hubble
                  </span>
                </div>
                <h2
                  className="font-bold text-4xl lg:text-5xl text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Built for operators,{" "}
                  <span style={{ color: "#4F8EF7" }}>not just IT</span>
                </h2>
              </div>

              <div className="space-y-7">
                {[
                  {
                    title: "We speak your language",
                    body: "No jargon, no consultants. We come from operations backgrounds — we ask the right questions and build to your actual workflow, not what a textbook says it should look like.",
                    up: true,
                  },
                  {
                    title: "Working software in 1–2 weeks",
                    body: "No months-long discovery phases. We start small, ship fast, and build from there — so you see real value before you've made a big commitment.",
                    up: false,
                  },
                  {
                    title: "Start small, grow as needed",
                    body: "Begin with one problem. Once it works, we expand on your timeline. You're never locked into a scope that doesn't fit.",
                    up: true,
                  },
                  {
                    title: "Direct access, always",
                    body: "You work directly with the people building your software. No account managers, no ticket queues, no dropped context — ever.",
                    up: false,
                  },
                ].map(({ title, body, up }, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div
                      className="w-6 h-6 flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: "#4F8EF7",
                        clipPath: up
                          ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                          : "polygon(0% 0%, 100% 0%, 50% 100%)",
                        opacity: 0.85,
                      }}
                    />
                    <div>
                      <h4
                        className="font-semibold text-lg mb-1 text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {title}
                      </h4>
                      <p className="text-white/55 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Hubble aperture animation */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-center justify-center">
              <div
                className="relative w-80 h-80 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: "#0F1A2E",
                  border: "1px solid rgba(79,142,247,0.15)",
                  boxShadow: "0 0 60px rgba(79,142,247,0.08)",
                }}
              >
                {/* Aperture rings SVG */}
                <svg
                  viewBox="0 0 300 300"
                  className="w-full h-full absolute inset-0"
                >
                  <defs>
                    <filter id="ring-glow">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Outer ring */}
                  <g filter="url(#ring-glow)">
                    <ellipse
                      cx="150"
                      cy="150"
                      rx="125"
                      ry="42"
                      fill="none"
                      stroke="#4F8EF7"
                      strokeWidth="1.5"
                      opacity="0.45"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 150 150"
                        to="360 150 150"
                        dur="16s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>

                  {/* Middle ring */}
                  <g filter="url(#ring-glow)">
                    <ellipse
                      cx="150"
                      cy="150"
                      rx="88"
                      ry="30"
                      fill="none"
                      stroke="#4F8EF7"
                      strokeWidth="1.5"
                      opacity="0.6"
                      transform="rotate(60 150 150)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="60 150 150"
                        to="420 150 150"
                        dur="10s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>

                  {/* Inner ring */}
                  <g filter="url(#ring-glow)">
                    <ellipse
                      cx="150"
                      cy="150"
                      rx="50"
                      ry="18"
                      fill="none"
                      stroke="#4F8EF7"
                      strokeWidth="2"
                      opacity="0.75"
                      transform="rotate(120 150 150)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="120 150 150"
                        to="-240 150 150"
                        dur="7s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>

                  {/* Center glow dot */}
                  <circle cx="150" cy="150" r="8" fill="#4F8EF7" opacity="0.9" filter="url(#ring-glow)">
                    <animate
                      attributeName="r"
                      values="6;11;6"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.7;1;0.7"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Scattered star dots */}
                  {[
                    { cx: 48, cy: 72, r: 1.5, dur: "2.1s" },
                    { cx: 248, cy: 58, r: 1, dur: "1.8s" },
                    { cx: 265, cy: 198, r: 1.5, dur: "2.6s" },
                    { cx: 38, cy: 218, r: 1, dur: "3.1s" },
                    { cx: 152, cy: 38, r: 1, dur: "2.4s" },
                    { cx: 272, cy: 130, r: 1.5, dur: "1.6s" },
                    { cx: 30, cy: 150, r: 1, dur: "2.9s" },
                  ].map((s, i) => (
                    <circle
                      key={i}
                      cx={s.cx}
                      cy={s.cy}
                      r={s.r}
                      fill="#4F8EF7"
                      opacity="0.5"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.2;0.7;0.2"
                        dur={s.dur}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </svg>

                {/* "Hubble" label at center */}
                <div
                  className="relative z-10 text-center select-none"
                  style={{ textShadow: "0 0 30px rgba(79,142,247,0.6)" }}
                >
                  <div
                    className="text-3xl font-bold text-white hubble-script"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    hubble
                  </div>
                  <div className="text-xs text-white/40 tracking-widest mt-1 uppercase">
                    Precision Software
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
