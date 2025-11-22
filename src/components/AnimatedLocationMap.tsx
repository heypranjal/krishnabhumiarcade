import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedLocationMap = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mapRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the map container with smooth fade-in and slide-up
      gsap.from(mapRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate connectivity stats with stagger
      gsap.from(".map-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3 font-serif">
            Why Location Matters
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-base text-foreground/80 max-w-2xl mx-auto">
            Strategically positioned at the heart of Vrindavan's spiritual corridor,
            Krishna Bhumi Arcade offers unparalleled connectivity to major temples and landmarks
          </p>
        </div>

        {/* Animated Map Container - Smaller Rectangle */}
        <div
          ref={mapRef}
          className="relative rounded-xl border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl overflow-hidden max-w-4xl mx-auto"
        >
          {/* Map Image with Overlay */}
          <div className="relative aspect-[16/9]">
            <img
              src="https://i.ibb.co/8H0kJdW/Screenshot-2025-11-19-at-1-03-10-PM.png"
              alt="Krishna Bhumi Arcade Location Map"
              className="w-full h-full object-contain bg-gradient-to-br from-amber-50/50 to-orange-50/50"
              loading="lazy"
            />

          </div>

          {/* Key Connectivity Highlights */}
          <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center map-label">
                <div className="text-2xl font-bold text-primary mb-1">2 km</div>
                <div className="text-xs text-foreground/80">NH2 (Delhi-Agra)</div>
              </div>
              <div className="text-center map-label">
                <div className="text-2xl font-bold text-primary mb-1">6 km</div>
                <div className="text-xs text-foreground/80">Railway Station</div>
              </div>
              <div className="text-center map-label">
                <div className="text-2xl font-bold text-primary mb-1">14 km</div>
                <div className="text-xs text-foreground/80">Yamuna Expressway</div>
              </div>
              <div className="text-center map-label">
                <div className="text-2xl font-bold text-primary mb-1">160 km</div>
                <div className="text-xs text-foreground/80">Delhi Airport</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLocationMap;
