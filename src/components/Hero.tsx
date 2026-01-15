import heroImage from "@/assets/hero-community.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          oh hi, people of the Sunset
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto animate-fade-in drop-shadow-md bg-charcoal/30 backdrop-blur-sm rounded-xl px-6 py-4" style={{ animationDelay: "0.2s" }}>
          A neighborhood guide to finding community in the Outer Sunset.
        </p>
      </div>
    </section>
  );
}
