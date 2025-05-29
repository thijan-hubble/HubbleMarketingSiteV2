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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-gray-300 opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-black opacity-10 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-0 h-0 border-t-[25px] border-t-gray-400 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent opacity-15"></div>
        <div className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-gray-300 opacity-25"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-black">
              Streamlining Your Supply Chain with{" "}
              <span className="relative">
                <span className="text-black">Intelligent Software</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-black/20"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transform supply chain challenges into opportunities with custom, user-centric software solutions designed for manufacturing, logistics, and distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4"
              >
                Start Your Transformation
              </Button>
              <Button 
                onClick={() => scrollToSection('case-studies')}
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4"
              >
                View Case Studies
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="font-bold text-3xl text-black">50+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-black">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-black">2x</div>
                <div className="text-gray-600 font-medium">Average Efficiency Gain</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern supply chain warehouse operations" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Decorative triangles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-black opacity-80" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black opacity-60" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
