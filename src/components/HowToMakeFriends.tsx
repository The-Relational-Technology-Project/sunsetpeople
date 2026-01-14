import { Users, Clock, Hand, Heart, Leaf } from "lucide-react";

const tips = [
  {
    icon: Clock,
    title: "Show up more than once",
    description: "Familiar faces become friends. The magic happens on visit three, not visit one.",
  },
  {
    icon: Users,
    title: "Go to the same place at the same time",
    description: "Regularity creates rhythm. Wednesday morning yoga. Saturday market. Sunday surf.",
  },
  {
    icon: Hand,
    title: "Say hi first, even if it feels awkward",
    description: "Everyone feels a little nervous. Being the one who breaks the ice is a gift.",
  },
  {
    icon: Heart,
    title: "Join something that already exists",
    description: "You don't need to start from scratch. There are already people gathering — go find them.",
  },
  {
    icon: Leaf,
    title: "Let it be slow",
    description: "Real connection takes time. Don't rush it. Show up, be present, and trust the process.",
  },
];

export function HowToMakeFriends() {
  return (
    <section id="how-to-make-friends" className="py-24 bg-sand-dark">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          how to make friends in the sunset
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Friendship happens through shared places, repeated presence, and doing ordinary things together.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <tip.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {tip.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
