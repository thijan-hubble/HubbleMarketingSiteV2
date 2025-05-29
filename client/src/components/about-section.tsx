import AnimatedSection from "@/components/ui/animated-section";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-4xl lg:text-5xl mb-6 text-black">
                  Why Choose <span style={{ fontFamily: 'Dancing Script, cursive' }} className="text-5xl lg:text-6xl">hubble</span>?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're not just developers; we're your dedicated partners in innovation, committed to excellence and transformative solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-black flex-shrink-0 mt-1" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Professional & Friendly</h4>
                    <p className="text-gray-600">Top-tier expertise with a collaborative, approachable attitude. Experience seamless partnership with a team that genuinely cares about your success.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-black flex-shrink-0 mt-1" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Driven by Innovation</h4>
                    <p className="text-gray-600">Constantly seeking smarter, better ways to solve problems. We embrace cutting-edge technologies to ensure your solutions stay ahead of the curve.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-black flex-shrink-0 mt-1" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Disruptive Solutions</h4>
                    <p className="text-gray-600">We challenge the status quo to build solutions that don't just improve processes, but fundamentally transform them for competitive advantage.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-black flex-shrink-0 mt-1" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Striving for Excellence</h4>
                    <p className="text-gray-600">From concept to implementation, we maintain the highest standards, ensuring robust, reliable software perfectly tailored to your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Modern software development team" 
                className="rounded-xl shadow-lg" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Manufacturing facility technology" 
                className="rounded-xl shadow-lg mt-8" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Software development team meeting" 
                className="rounded-xl shadow-lg" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Logistics and distribution center" 
                className="rounded-xl shadow-lg mt-8" 
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
