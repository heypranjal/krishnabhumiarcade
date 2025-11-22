const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.ibb.co/Xk866Hvh/hero111.webp)`,
          imageRendering: 'high-quality'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/20 to-background/40" />
      </div>

      {/* Floating Ornamental Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground text-shadow-gold leading-tight">
            भारत का पहला
          </h1>
          <p className="text-3xl md:text-5xl text-primary-foreground/90 font-serif leading-relaxed">
            धार्मिक और सांस्कृतिक सामग्री माल
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-sans max-w-3xl mx-auto pt-4">
            India's First Religious & Cultural Goods Mall in the Heart of Vrindavan
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
