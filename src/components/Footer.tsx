import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Krishna Bhumi Arcade</h3>
              <p className="text-secondary-foreground/80 mb-4">
                Where culture meets commerce in the heart of Shree Vrindavan Dham. 
                A destination of divine business opportunities.
              </p>
              <p className="text-sm text-secondary-foreground/60">
                Developed by Snowwhite Infrastructure Pvt. Ltd.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#shops" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Retail Categories
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Developer */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Developer</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#developer" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Infinity Group
                  </a>
                </li>
                <li>
                  <span className="text-secondary-foreground/80">
                    25 Years of Excellence
                  </span>
                </li>
                <li>
                  <span className="text-secondary-foreground/80">
                    IGBC Gold Certified
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-secondary-foreground/20" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Krishna Bhumi Arcade. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Seize this divine investment opportunity today.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
