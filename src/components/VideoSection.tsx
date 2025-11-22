import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (videoRef.current) {
        videoObserver.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 px-2 md:px-4 overflow-hidden bg-transparent"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-[95vw] lg:max-w-[1600px] relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-8 md:mb-10 transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">
            Experience KB Arcade
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover the divine shopping experience in the heart of Vrindavan
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={videoRef}
          className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          {/* Outer Glow Ring - Animated */}
          <div className={`absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-xl md:rounded-2xl blur-2xl transition-all duration-1000 ${isVideoVisible ? 'opacity-75 scale-105' : 'opacity-30 scale-100'}`} />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl md:rounded-2xl">
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-10 left-20 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
          </div>

          <div className={`relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border-2 ${isVideoVisible ? 'border-primary/30 shadow-[0_0_50px_rgba(var(--primary),0.3)]' : 'border-primary/10'}`}>
            {/* Inner Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl md:rounded-2xl blur-xl transition-opacity duration-500 ${isVideoVisible ? 'opacity-75' : 'opacity-50'}`} />

            {/* Video Embed with Autoplay */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl"
                src={`https://www.youtube.com/embed/23u3o_6gDjQ?start=10&autoplay=${isVideoVisible ? '1' : '0'}&mute=1&enablejsapi=1`}
                title="KB Arcade Vrindavan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          </div>

          {/* Animated Decorative Corner Elements */}
          <div className={`absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg transition-all duration-500 ${isVideoVisible ? 'border-primary/60 scale-110' : ''}`} />
          <div className={`absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-lg transition-all duration-500 ${isVideoVisible ? 'border-primary/60 scale-110' : ''}`} />
          <div className={`absolute -bottom-4 -left-4 w-10 h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-lg transition-all duration-500 ${isVideoVisible ? 'border-primary/60 scale-110' : ''}`} />
          <div className={`absolute -bottom-4 -right-4 w-10 h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg transition-all duration-500 ${isVideoVisible ? 'border-primary/60 scale-110' : ''}`} />
        </div>

        {/* Bottom Decorative Text */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground italic">
            "A sacred destination for spiritual commerce and cultural heritage"
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
