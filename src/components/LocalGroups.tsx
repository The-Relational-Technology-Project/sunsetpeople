import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

interface Group {
  name: string;
  description: string;
  link?: string;
}

interface Category {
  name: string;
  colorClass: string;
  bgClass: string;
  groups: Group[];
}

const categories: Category[] = [
  {
    name: "Outdoors & Movement",
    colorClass: "text-ocean",
    bgClass: "bg-ocean/10",
    groups: [
      { name: "Surf Spots", description: "Just paddle out, say hi. The lineup is the neighborhood." },
      { name: "Yogabeach", description: "Multiple overlapping groups doing yoga on the sand. Show up early, find a spot." },
      { name: "Beach Clean Up Crews", description: "Including Surfrider Foundation. Gloves provided. Good people doing good work." },
      { name: "Pickleball at Sunset Courts", description: "Drop-in games most mornings. All levels welcome." },
      { name: "Sunset Dunes Run Clubs", description: "Groups that run the dunes and trails. Check local running stores for schedules." },
      { name: "Walking Clubs", description: "Low-key walking groups for all paces. Fresh air, good conversation." },
    ],
  },
  {
    name: "Care & Mutual Aid",
    colorClass: "text-dune",
    bgClass: "bg-dune/10",
    groups: [
      { name: "SF Mutual Aid", description: "Neighbors helping neighbors. Many ways to give and receive support." },
      { name: "Friends of Sunset Dunes", description: "Stewardship of the dunes ecosystem. Restoration events, advocacy, community." },
      { name: "Friends of the Urban Forest", description: "Tree planting and neighborhood greening. Hands-on, visible impact." },
    ],
  },
  {
    name: "Making & Creativity",
    colorClass: "text-charcoal",
    bgClass: "bg-charcoal/10",
    groups: [
      { name: "Case for Making Workshops", description: "Hands-on craft and making workshops. Build something, meet people." },
      { name: "Black Bird Book Clubs and Workshops", description: "Literary community at the local bookshop. Reading, discussing, connecting." },
      { name: "Outer Village", description: "Community space and gathering point. Events, workshops, and local happenings." },
      { name: "Third Realm", description: "Creative community and maker space. Art, craft, and good company." },
    ],
  },
  {
    name: "Neighborhood & Civic Life",
    colorClass: "text-fog",
    bgClass: "bg-fog/20",
    groups: [
      { name: "Outer Sunset Neighbors", description: "The neighborhood association. Advocacy, events, and staying informed." },
      { name: "School PTAs", description: "If you have kids in local schools, this is where parents gather." },
      { name: "Lions Club – SF Parkside / Sunset", description: "Service club with deep neighborhood roots. Community projects and fellowship." },
      { name: "Sunset Mercantile", description: "Local business collective. Supporting the shops that make the neighborhood." },
    ],
  },
  {
    name: "Faith & Spiritual Life",
    colorClass: "text-sunset",
    bgClass: "bg-sunset/10",
    groups: [
      { name: "Sunset Church", description: "Welcoming community church in the heart of the neighborhood." },
      { name: "United Irish Cultural Center", description: "Cultural community, events, and gathering place." },
      { name: "St. Gabriel's Church", description: "Catholic parish with an active community." },
      { name: "Holy Name of Jesus Parish", description: "Another neighborhood Catholic parish. Regular services and community events." },
    ],
  },
  {
    name: "Food & Gathering",
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    groups: [
      { name: "Outer Sunset Farmers' Market", description: "Sunday mornings. The place to see and be seen while buying produce." },
      { name: "Woods Outbound Community Nights", description: "Local brewery with regular community events. Good beer, good neighbors." },
    ],
  },
];

export function LocalGroups() {
  return (
    <section id="local-groups" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          local groups
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A growing list of groups that make it easier to meet people in the Outer Sunset.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`rounded-xl overflow-hidden ${category.bgClass}`}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={category.name} className="border-none">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline">
                    <span className={`font-display text-xl font-semibold ${category.colorClass}`}>
                      {category.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {category.groups.map((group) => (
                        <div
                          key={group.name}
                          className="bg-card rounded-lg p-4 hover:shadow-sm transition-shadow"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-display font-semibold text-foreground mb-1">
                                {group.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {group.description}
                              </p>
                            </div>
                            {group.link && (
                              <a
                                href={group.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
