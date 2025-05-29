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
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Supply chain warehouse operations" 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
              </div>
              <CardHeader>
                <Badge className="bg-black text-white w-fit mb-4">Manufacturing</Badge>
                <CardTitle className="text-xl">50% Faster Inventory Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">A leading automotive manufacturer streamlined their inventory management with our custom solution, reducing processing time by 50% and eliminating manual errors.</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-black font-semibold">Read Case Study</span>
                  <span className="text-black">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Distribution center operations" 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
              </div>
              <CardHeader>
                <Badge className="bg-black text-white w-fit mb-4">Logistics</Badge>
                <CardTitle className="text-xl">Real-Time Supply Chain Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">A global logistics company gained complete supply chain visibility with our real-time tracking system, improving delivery accuracy by 35%.</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-black font-semibold">Read Case Study</span>
                  <span className="text-black">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Automated warehouse technology" 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
              </div>
              <CardHeader>
                <Badge className="bg-black text-white w-fit mb-4">Distribution</Badge>
                <CardTitle className="text-xl">Automated Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">A major distribution center automated their order processing workflow, reducing order-to-ship time from 48 hours to just 6 hours.</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-black font-semibold">Read Case Study</span>
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