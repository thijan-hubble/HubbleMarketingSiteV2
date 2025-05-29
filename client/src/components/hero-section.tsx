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
              <span className="relative">
                <span className="text-black">Supply chain, reimagined</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-black/20"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Boutique software development focused exclusively on transforming complex supply chain challenges into elegant digital solutions
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
            <div className="bg-gray-50 rounded-2xl shadow-2xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Animated Supply Chain Diagram */}
              <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Main flow lines */}
                <g stroke="#000" strokeWidth="2" fill="none">
                  {/* Horizontal main line */}
                  <path d="M 50 150 L 350 150" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Vertical connectors */}
                  <path d="M 120 80 L 120 150" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,70;70,0" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 200 150 L 200 220" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,70;70,0" dur="2.8s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 280 80 L 280 150" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,70;70,0" dur="3.2s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Branch lines */}
                  <path d="M 80 80 L 160 80" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="2.2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 160 220 L 240 220" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="2.7s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 240 80 L 320 80" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="3.1s" repeatCount="indefinite"/>
                  </path>
                </g>
                
                {/* Process nodes */}
                <g>
                  {/* Main process nodes */}
                  <circle cx="120" cy="150" r="6" fill="#000" className="animate-pulse">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="200" cy="150" r="6" fill="#000" className="animate-pulse">
                    <animate attributeName="r" values="6;8;6" dur="2.3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="150" r="6" fill="#000" className="animate-pulse">
                    <animate attributeName="r" values="6;8;6" dur="2.6s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Branch nodes */}
                  <circle cx="120" cy="80" r="4" fill="#666" className="animate-pulse">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="200" cy="220" r="4" fill="#666" className="animate-pulse">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="80" r="4" fill="#666" className="animate-pulse">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Rectangular process boxes */}
                <g fill="none" stroke="#000" strokeWidth="1.5">
                  <rect x="100" y="130" width="40" height="40" rx="4" className="animate-pulse">
                    <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="180" y="130" width="40" height="40" rx="4" className="animate-pulse">
                    <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2.3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="260" y="130" width="40" height="40" rx="4" className="animate-pulse">
                    <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2.6s" repeatCount="indefinite"/>
                  </rect>
                </g>
              </svg>
              
              {/* Floating process labels */}
              <div className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
                Manufacturing
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
                Distribution
              </div>
              <div className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
                Logistics
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
