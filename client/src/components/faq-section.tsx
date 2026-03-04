import { useState } from "react";
import AnimatedSection from "@/components/ui/animated-section";

const faqs = [
  {
    question: "How can you really deliver working software in 1–2 weeks?",
    answer:
      "We start with one clearly defined workflow — not a full platform. Trip sheets, stock counts, booking forms, driver apps. One problem, solved properly. Once it's working and your team is using it, we build from there. Small scope means fast delivery. It's not a shortcut — it's the right way to start.",
  },
  {
    question: "Do we need to have it all figured out before we talk to you?",
    answer:
      "No. Most clients come to us with a rough problem and a lot of manual workarounds — not a spec document. That's exactly what the first conversation is for. We'll help you figure out what to build first and what to leave for later.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the scope. A Quick Win (single workflow) is a much smaller commitment than a Core System. We always agree the price upfront, before any work starts — so there are no surprises mid-build. Reach out and we'll give you a straight answer for your specific situation.",
  },
  {
    question: "Our operation is complicated and has unusual workflows. Can you handle that?",
    answer:
      "That's actually exactly the kind of client we do best with. Generic platforms fail on unusual workflows — they force you to adapt your operation to their system. We do the opposite: we build to how your operation actually works, even when it doesn't fit a textbook.",
  },
  {
    question: "What happens after the first project?",
    answer:
      "Most clients come back with the next problem. The first project is low-risk by design — it's a way for both of us to see how we work together. From there, we grow the software as your operation needs it. You're never locked in — there are no long-term contracts.",
  },
  {
    question: "What makes Hubble different from hiring a developer or using off-the-shelf software?",
    answer:
      "A hired developer gives you a coder. Off-the-shelf software gives you someone else's workflow. We give you a team that understands supply chain operations and builds software around your actual process — fast, direct, and without the overhead of a large agency or the limitations of a generic tool.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2
              className="font-bold text-4xl lg:text-5xl mb-6 text-black"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Common{" "}
              <span className="relative">
                questions
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5"
                  style={{ backgroundColor: "#4F8EF7", opacity: 0.5 }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you'd want to know before reaching out.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className="rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: isOpen
                      ? "rgba(79,142,247,0.35)"
                      : "rgba(0,0,0,0.08)",
                    backgroundColor: isOpen ? "rgba(79,142,247,0.03)" : "white",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <span
                      className="font-semibold text-base text-black leading-snug"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {faq.question}
                    </span>
                    {/* +/− icon */}
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200"
                      style={{
                        backgroundColor: isOpen
                          ? "#4F8EF7"
                          : "rgba(0,0,0,0.06)",
                        color: isOpen ? "white" : "#666",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA nudge */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 font-semibold text-black hover:gap-3 transition-all duration-200"
            >
              Ask us directly <span style={{ color: "#4F8EF7" }}>→</span>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
