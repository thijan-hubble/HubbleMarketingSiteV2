import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/ui/animated-section";

const caseStudies = [
  {
    badge: "Road Freight",
    badgeColor: "#4F8EF7",
    outcome: "End-to-end ops digitised in 2 weeks",
    projectType: "Integrated Operations Platform",
    description:
      "A major long-haul logistics company running on spreadsheets and WhatsApp. We replaced it — order intake, route planning, driver execution, and proof of delivery — in a single connected system.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    imgAlt: "Logistics and freight operations",
  },
  {
    badge: "Labs & Quality",
    badgeColor: "#10b981",
    outcome: "Paper compliance processes fully eliminated",
    projectType: "QC & Audit Automation",
    description:
      "An international pharmaceutical lab was running critical compliance workflows on paper. We digitised the entire QC and auditing process — every check logged, traceable, and audit-ready.",
    image:
      "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    imgAlt: "Laboratory and quality control",
  },
  {
    badge: "Supply Chain Equipment",
    badgeColor: "#111111",
    outcome: "Real-time visibility across every rental asset",
    projectType: "Asset Tracking System",
    description:
      "A rental equipment company had no live view of where its stock was or how it was being billed. We built real-time tracking across stock movement, utilisation, and client invoicing.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    imgAlt: "Warehouse and inventory management",
  },
];

export default function CaseStudiesSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-bold text-4xl lg:text-5xl mb-6 text-black"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              What We've{" "}
              <span className="relative">
                Built
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5"
                  style={{ backgroundColor: "#4F8EF7", opacity: 0.5 }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real problems, real software. Here's what we've built for
              South African operators like yours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.imgAlt}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + project type */}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge
                      className="text-white text-xs"
                      style={{ backgroundColor: cs.badgeColor }}
                    >
                      {cs.badge}
                    </Badge>
                    <span className="text-xs text-gray-400 font-medium">
                      {cs.projectType}
                    </span>
                  </div>

                  {/* Outcome headline — the result, front and center */}
                  <h3
                    className="font-bold text-lg leading-snug mb-3 text-black"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {cs.outcome}
                  </h3>

                  {/* Supporting description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {cs.description}
                  </p>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 font-semibold text-sm text-black hover:gap-3 transition-all duration-200 mt-auto"
                  >
                    Talk to us about something similar <span>→</span>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats banner */}
        <AnimatedSection delay={0.4}>
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{ backgroundColor: "#0A0F1C" }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(79,142,247,0.18) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10 grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10+", label: "Projects Delivered", blue: false },
                { value: "5", label: "Industries Served", blue: true },
                { value: "1–2 Wks", label: "Time to Working Software", blue: false },
                { value: "0", label: "Months of Discovery Required", blue: false },
              ].map(({ value, label, blue }, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="font-bold text-4xl"
                    style={{
                      color: blue ? "#4F8EF7" : "white",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-white/50 text-sm leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
