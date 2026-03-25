import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cog, GitBranch, Truck, Package, Factory, LayoutGrid, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-bold text-4xl lg:text-5xl mb-6 text-black"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              What We{" "}
              <span className="relative">
                Build
                <div className="absolute -bottom-1 left-0 w-full h-0.5" style={{ backgroundColor: "#4F8EF7", opacity: 0.5 }} />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a single digitised workflow to a full operational platform —
              always built around how your operation actually runs, never from a
              generic template.
            </p>
          </div>
        </AnimatedSection>

        {/* Three service tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader>
                <div className="relative mb-4">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#4F8EF7" }}
                  >
                    <Zap className="text-white" size={28} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 opacity-60"
                    style={{
                      backgroundColor: "#4F8EF7",
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    }}
                  />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                  Tier 1
                </div>
                <CardTitle className="text-xl mb-2">Quick Win</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  One workflow, digitised and working in 1–2 weeks. Trip sheets,
                  driver apps, stock counts, booking forms — the lowest-risk way
                  to see what custom software can do for your operation.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all duration-200"
                >
                  Talk to us <ArrowRight size={16} />
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card
              className="border-0 transition-all duration-300 hover:-translate-y-1 group h-full"
              style={{
                backgroundColor: "#0A0F1C",
                boxShadow: "0 4px 30px rgba(79,142,247,0.12)",
                border: "1px solid rgba(79,142,247,0.15)",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 48px rgba(79,142,247,0.28)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(79,142,247,0.12)"}
            >
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <Cog className="text-white" size={28} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-white/40"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                    }}
                  />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                  Tier 2
                </div>
                <CardTitle className="text-xl mb-2 text-white">Core System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 leading-relaxed mb-6">
                  Replace spreadsheets and WhatsApp chains with purpose-built
                  software your team actually wants to use. Designed around your
                  exact workflows, not generic templates.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-200"
                >
                  Talk to us <ArrowRight size={16} />
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4">
                    <GitBranch className="text-white" size={28} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-black opacity-60"
                    style={{
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    }}
                  />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                  Tier 3
                </div>
                <CardTitle className="text-xl mb-2">End-to-End Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Full-stack operations software that replaces the patchwork of
                  spreadsheets, systems, and workarounds with something that
                  actually works together — built to grow as you do.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all duration-200"
                >
                  Talk to us <ArrowRight size={16} />
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Industries We Serve */}
        <AnimatedSection delay={0.4}>
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{ backgroundColor: "#0A0F1C" }}
          >
            {/* Dot grid texture */}
            <div
              className="absolute inset-0 rounded-3xl opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(79,142,247,0.18) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10">
              <h3
                className="font-bold text-3xl text-white mb-2 text-center"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Industries We Serve
              </h3>
              <p className="text-white/50 text-center mb-10">
                South African operations, from the Cape to the border
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: Truck, label: "Road Freight\n& Transport" },
                  { icon: Package, label: "Warehousing\n& Distribution" },
                  { icon: LayoutGrid, label: "3PL\n& Courier" },
                  { icon: Factory, label: "Manufacturing" },
                  { icon: Package, label: "Packaging\n& Production" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="text-center group">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(79,142,247,0.2)",
                      }}
                    >
                      <Icon
                        size={26}
                        style={{ color: "#4F8EF7" }}
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight whitespace-pre-line">
                      {label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
