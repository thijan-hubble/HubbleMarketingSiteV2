import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/attached_assets/Hubble Black Logo.png" 
              alt="Hubble Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Case Studies
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white hover:bg-gray-800"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                Case Studies
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
