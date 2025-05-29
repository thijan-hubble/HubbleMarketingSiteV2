import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Cog, Users, Zap, Factory, Truck, Package, FlaskConical } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6 text-black">
              Our <span className="relative">Solutions<div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black/30"></div></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We transform supply chain challenges into opportunities with intelligent, intuitive software solutions tailored to your business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Search className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-black opacity-60" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                </div>
                <CardTitle className="text-xl mb-4">Deep-dive Discovery & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We don't just build; we understand. Our discovery process pinpoints your exact problems and blueprints solutions that truly fit.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Cog className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-black opacity-60" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
                </div>
                <CardTitle className="text-xl mb-4">Custom-Built for Your Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Forget one-size-fits-all. We develop bespoke software that directly addresses your unique operational pain points and strategic goals.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card className="bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-black opacity-60" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                </div>
                <CardTitle className="text-xl mb-4">User-Centric by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Powerful software should be a joy to use. Our solutions ensure high adoption rates and seamless workflows for your team.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Industries We Serve */}
        <AnimatedSection delay={0.4}>
          <div className="bg-black rounded-3xl p-12 text-center">
            <h3 className="font-bold text-3xl text-white mb-8">Industries We Transform</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Factory className="text-black" size={28} />
                </div>
                <div className="text-white font-semibold">Manufacturing</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-black" size={28} />
                </div>
                <div className="text-white font-semibold">Logistics</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="text-black" size={28} />
                </div>
                <div className="text-white font-semibold">Distribution</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="text-black" size={28} />
                </div>
                <div className="text-white font-semibold">Laboratories</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}