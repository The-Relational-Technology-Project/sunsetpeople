import heroImage from "@/assets/hero-community.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-40 pb-24 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          oh hi, people of the Sunset!
        </h1>

        <p
          className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto animate-fade-in drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "0.2s" }}
        >
          This is a neighborhood guide to help more of us find community
        </p>
      </div>
    </section>
  );
}