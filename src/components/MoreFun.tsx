import { ArrowRight, Calendar } from "lucide-react";
import oceanLight from "@/assets/ocean-light.jpeg";

export function MoreFun() {
  return (
    <section id="more-fun" className="py-24 bg-primary/10 relative overflow-hidden scroll-mt-20">
      {/* Subtle background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${oceanLight})` }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            more fun
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Looking for events, pop-ups, and things happening this week?
            <br />
            We post what these groups and local venues are hosting at{" "}
            <span className="font-semibold text-foreground">outersunset.today</span>.
          </p>

          <a
            href="https://outersunset.today"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Visit outersunset.today
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
