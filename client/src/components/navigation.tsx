import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import hubbleBlackLogo from "@assets/Hubble Black Logo.png";
import hubbleWhiteLogo from "@assets/Hubble White Logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navBg = isScrolled
    ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    : "bg-transparent border-b border-white/10";

  const linkColor = isScrolled
    ? "text-gray-700 hover:text-black"
    : "text-white/80 hover:text-white";

  const ctaClass = isScrolled
    ? "bg-black text-white hover:bg-gray-800"
    : "bg-white text-black hover:bg-gray-100";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo — white on dark hero, black when scrolled */}
          <div className="flex items-center">
            <img
              src={isScrolled ? hubbleBlackLogo : hubbleWhiteLogo}
              alt="Hubble — Custom Supply Chain Software South Africa"
              className="h-20 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`transition-colors font-medium ${linkColor}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors font-medium ${linkColor}`}
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors font-medium ${linkColor}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className={`transition-colors font-medium ${linkColor}`}
            >
              Case Studies
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors ${ctaClass}`}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? "text-black" : "text-white hover:bg-white/10"}
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
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="block w-full text-left text-gray-700 hover:text-black py-2"
              >
                Case Studies
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
