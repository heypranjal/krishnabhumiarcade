import { Card, CardContent } from "@/components/ui/card";
import { Shield, Car, MoveVertical, Flame, Building, Leaf } from "lucide-react";
import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";

const amenities = [
  { icon: Shield, title: "24×7 Security", description: "Comprehensive surveillance and safety", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418679/security_habouz_ssreal.png" },
  { icon: Car, title: "Ample Parking", description: "Multi-level parking facility", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418660/parking_sj2jnc_isyfrw.png" },
  { icon: MoveVertical, title: "Escalators/Elevators", description: "Easy accessibility across floors", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418659/escaltor_vpmyqu_hddaji.png" },
  { icon: Flame, title: "Fire Safety Systems", description: "Advanced fire detection and prevention", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418654/fire_qjzabc_pzhylu.png" },
  { icon: Building, title: "RCC Structure", description: "Robust earthquake-resistant design", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418677/rcc_jdi3za_vyktrz.png" },
  { icon: Leaf, title: "Eco-Friendly Design", description: "Sustainable and energy efficient", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418659/eco_pw0hkw_jhc42n.png" }
];

// Placeholder for IGBC badge - add actual image path
const igbcBadge = "https://via.placeholder.com/150?text=IGBC+Gold";

const Amenities = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const gridReveal = useScrollReveal({ threshold: 0.1, triggerOnce: false });
  const parallax = useParallax(0.25);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <div
        ref={parallax.ref}
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ transform: `translateY(${parallax.offset}px)` }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div
            ref={titleReveal.ref}
            className={`text-center mb-16 reveal-fade-down ${titleReveal.isVisible ? 'active' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Amenities & Specifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              World-class facilities for modern retail excellence
            </p>
          </div>

          {/* Amenities Grid */}
          <div ref={gridReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary reveal-fade-left stagger-${(index % 6) + 1} ${gridReveal.isVisible ? 'active' : ''}`}
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {amenity.customImage ? (
                        <img
                          src={amenity.customImage}
                          alt={amenity.title}
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        {amenity.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {amenity.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* IGBC Gold Badge */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="inline-block shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-gradient-to-br from-card to-divine-cream">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={igbcBadge} 
                  alt="IGBC Gold Certification Badge" 
                  className="w-32 h-32 object-contain animate-float"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    IGBC Gold Certified
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Vrindavan's first IGBC Gold Rated Retail Green Building, exemplifying our commitment to environmental sustainability and modern standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
