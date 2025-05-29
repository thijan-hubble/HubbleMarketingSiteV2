import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/ui/animated-section";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6 text-black">
              Success <span className="relative">Stories<div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black/30"></div></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real transformations, measurable results. See how we've helped supply chain companies revolutionize their operations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Logistics operations" 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
              </div>
              <CardHeader>
                <Badge className="bg-black text-white w-fit mb-4">Logistics</Badge>
                <CardTitle className="text-xl">Integrated Operations Streamlining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Implementing an end-to-end solution for a major long-haul logistics company, optimizing processes from order intake and planning through to operational execution.</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-black font-semibold">Learn more</span>
                  <span className="text-black">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Pharmaceutical laboratory" 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
              </div>
              <CardHeader>
                <Badge className="bg-black text-white w-fit mb-4">Labs</Badge>
                <CardTitle className="text-xl">Automated Pharmaceutical QC & Auditing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Developing a comprehensive system for an international pharmaceutical lab, digitizing and automating their critical quality control and auditing processes.</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-black font-semibold">Learn more</span>
                  <span className="text-black">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Supply chain equipment tracking" 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
              </div>
              <CardHeader>
                <Badge className="bg-black text-white w-fit mb-4">Supply Chain Equipment</Badge>
                <CardTitle className="text-xl">Real-Time Rental Asset Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Digitizing operations for a supply chain rental equipment company to provide real-time insight into stock movement and asset utilization.</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-black font-semibold">Learn more</span>
                  <span className="text-black">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={0.4}>
          <div className="bg-black rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-bold text-4xl text-white mb-2">75%</div>
                <div className="text-gray-300">Average Efficiency Improvement</div>
              </div>
              <div>
                <div className="font-bold text-4xl text-white mb-2">25+</div>
                <div className="text-gray-300">Years Combined Experience</div>
              </div>
              <div>
                <div className="font-bold text-4xl text-white mb-2">4-6 Weeks</div>
                <div className="text-gray-300">Average for First Value Delivered</div>
              </div>
              <div>
                <div className="font-bold text-4xl text-white mb-2">100%</div>
                <div className="text-gray-300">Project Success Rate</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}