import AnimatedSection from "@/components/ui/animated-section";

const steps = [
  {
    number: "01",
    title: "Tell us your biggest headache",
    body: "A 30-minute call — no prep, no deck, no agenda. You describe what's broken or slowing you down. We ask the right questions.",
    detail: "No commitment required",
  },
  {
    number: "02",
    title: "We agree the scope upfront",
    body: "We come back with a clear proposal — exactly what we'll build, what it costs, and how long it takes. Everything agreed before a line of code is written.",
    detail: "Fixed scope, fixed price",
  },
  {
    number: "03",
    title: "Working software in 1–2 weeks",
    body: "We build it around your actual workflow, not a generic template. You use it from day one. If you want more, we grow from there — on your timeline.",
    detail: "Real software, not a prototype",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(79,142,247,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gray-200 bg-blue-50">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#4F8EF7" }}
              />
              <span className="text-sm text-gray-500 font-medium tracking-wide">
                The Process
              </span>
            </div>
            <h2
              className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              How it{" "}
              <span className="relative">
                <span style={{ color: "#4F8EF7" }}>works</span>
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 opacity-40"
                  style={{ backgroundColor: "#4F8EF7" }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From first conversation to working software — here's what the
              engagement actually looks like.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connector line between steps (desktop only) */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px"
            style={{ backgroundColor: "rgba(79,142,247,0.3)" }}
          />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative text-center px-6 pb-4">
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1.5px solid rgba(79,142,247,0.35)",
                      boxShadow: "0 4px 24px rgba(79,142,247,0.12)",
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: "#4F8EF7", opacity: 0.8 }}
                    >
                      Step
                    </span>
                    <span
                      className="font-bold text-3xl leading-none"
                      style={{ color: "#111827", fontFamily: "Montserrat, sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-bold text-xl text-gray-900 mb-3 leading-snug"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                  {step.body}
                </p>

                {/* Detail badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    color: "#4F8EF7",
                    backgroundColor: "rgba(79,142,247,0.1)",
                    border: "1px solid rgba(79,142,247,0.2)",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#4F8EF7" }}
                  />
                  {step.detail}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
