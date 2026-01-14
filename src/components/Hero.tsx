import heroDunes from "@/assets/hero-dunes.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDunes})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
          oh hi, people of the Sunset
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A friendly guide to meeting people and finding community in the Outer Sunset.
        </p>
        
        <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          You do not need an app. You just need a place to show up.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted-foreground/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
