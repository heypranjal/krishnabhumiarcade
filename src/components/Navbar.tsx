import { Button } from "@/components/ui/button";
import { Download, Phone, Store, MapPin, Construction, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl bg-background/80 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://res.cloudinary.com/dadfpmrat/image/upload/v1763967586/Screenshot_2025-11-24_at_12.27.46_PM_japyh3.png"
              alt="Krishna Bhumi Arcade Logo"
              className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-secondary font-serif">Krishna Bhumi Arcade</h1>
              <p className="text-xs text-muted-foreground">भारत का पहला धार्मिक माल</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link to="/location-footfall#retail-opportunities">
              <Button
                size="sm"
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Store className="mr-2 h-4 w-4" />
                View Shops
              </Button>
            </Link>
            <Link to="/location-footfall">
              <Button
                size="sm"
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Location & Footfall
              </Button>
            </Link>
            <Link to="/construction-timeline">
              <Button
                size="sm"
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Construction className="mr-2 h-4 w-4" />
                Construction Updates
              </Button>
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1o6gvFiMDnN-Rhr6UgT2x0MIWDNh7GdTq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Brochure
              </Button>
            </a>
            <a href="/#contact">
              <Button
                size="sm"
                className="divine-gradient text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105 ml-2"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              <Link to="/location-footfall#retail-opportunities" onClick={toggleMenu}>
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Store className="mr-2 h-4 w-4" />
                  View Shops
                </Button>
              </Link>
              <Link to="/location-footfall" onClick={toggleMenu}>
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Location & Footfall
                </Button>
              </Link>
              <Link to="/construction-timeline" onClick={toggleMenu}>
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Construction className="mr-2 h-4 w-4" />
                  Construction Updates
                </Button>
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=1o6gvFiMDnN-Rhr6UgT2x0MIWDNh7GdTq"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </a>
              <a href="/#contact" onClick={toggleMenu}>
                <Button
                  size="sm"
                  className="w-full divine-gradient text-primary-foreground hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
