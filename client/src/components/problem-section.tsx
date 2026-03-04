import AnimatedSection from "@/components/ui/animated-section";

const painPoints = [
  {
    title: "Trip sheets on paper",
    description:
      "Captured on site, typed up later — if you're lucky. Errors pile up before anyone notices.",
  },
  {
    title: "Stock managed on a shared spreadsheet",
    description:
      "Three people editing at once. Version conflicts. Month-end reconciliation is a full-day job.",
  },
  {
    title: "WhatsApp as your TMS",
    description:
      "Load coordination, driver updates, exceptions — all buried in one chat thread nobody can search.",
  },
  {
    title: "PODs captured on paper",
    description:
      "Filed in a box. A client asks for a copy. It takes 20 minutes to find — if it's there at all.",
  },
  {
    title: "One person holds all the knowledge",
    description:
      "When they leave, so does how your operation actually works. And it always happens at the worst time.",
  },
  {
    title: "No live view of your operation",
    description:
      "You find out what went wrong after it already has. Visibility only comes at the end of the day — or the week.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-sm text-gray-500 font-medium tracking-wide">
                The Reality
              </span>
            </div>

            <h2
              className="font-bold text-4xl lg:text-5xl text-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Sound{" "}
              <span className="relative">
                familiar?
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 opacity-40"
                  style={{ backgroundColor: "#4F8EF7" }}
                />
              </span>
            </h2>

            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Most SA supply chain operations run on some combination of
              spreadsheets, WhatsApp, paper, and tribal knowledge. It works —
              until it doesn't.
            </p>
          </div>
        </AnimatedSection>

        {/* Pain point grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {painPoints.map((point, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-200 h-full">
                {/* Triangle brand motif */}
                <div
                  className="w-5 h-5 mb-4 opacity-70"
                  style={{
                    backgroundColor: "#4F8EF7",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  }}
                />
                <h3
                  className="font-semibold text-base text-black mb-2 leading-snug"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {point.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bridge statement — dark band */}
        <AnimatedSection delay={0.5}>
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ backgroundColor: "#0A0F1C" }}
          >
            {/* Dot grid texture */}
            <div
              className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(79,142,247,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10">
              <p
                className="text-white text-xl lg:text-2xl font-semibold max-w-2xl mx-auto leading-snug mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                You don't need a 6-month ERP project to fix this.
              </p>
              <p className="text-white/55 text-lg max-w-xl mx-auto">
                One problem, scoped properly, working software in 1–2 weeks.
                That's how we start.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
