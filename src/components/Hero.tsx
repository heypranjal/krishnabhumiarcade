const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
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
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground text-shadow-gold leading-tight px-2">
            भारत का पहला
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground/90 font-serif leading-relaxed px-2">
            धार्मिक और सांस्कृतिक सामग्री माल
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 font-sans max-w-3xl mx-auto pt-2 sm:pt-4 px-4">
            India's First Religious & Cultural Goods Mall in the Heart of Vrindavan
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
