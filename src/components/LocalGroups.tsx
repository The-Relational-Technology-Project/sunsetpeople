import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
interface Group {
  name: string;
  description: string;
  link?: string;
}
interface Category {
  name: string;
  bgColor: string;
  textColor: string;
  groups: Group[];
}
const categories: Category[] = [{
  name: "outdoors & movement",
  bgColor: "bg-ocean",
  textColor: "text-sand",
  groups: [{
    name: "Surf Spots",
    description: "Just paddle out, say hi. The lineup is the neighborhood."
  }, {
    name: "Yogabeach",
    description: "Multiple overlapping groups doing yoga on the sand. Show up early, find a spot."
  }, {
    name: "Beach Clean Up Crews",
    description: "Including Surfrider Foundation. Gloves provided. Good people doing good work."
  }, {
    name: "Pickleball at Sunset Courts",
    description: "Drop-in games most mornings. All levels welcome."
  }, {
    name: "Sunset Dunes Run Clubs",
    description: "Groups that run the dunes and trails. Check local running stores for schedules."
  }, {
    name: "Walking Clubs",
    description: "Low-key walking groups for all paces. Fresh air, good conversation."
  }]
}, {
  name: "care & mutual aid",
  bgColor: "bg-dune",
  textColor: "text-sand",
  groups: [{
    name: "SF Mutual Aid",
    description: "Neighbors helping neighbors. Many ways to give and receive support."
  }, {
    name: "Friends of Sunset Dunes",
    description: "Stewardship of the dunes ecosystem. Restoration events, advocacy, community."
  }, {
    name: "Friends of the Urban Forest",
    description: "Tree planting and neighborhood greening. Hands-on, visible impact."
  }]
}, {
  name: "making & creativity",
  bgColor: "bg-charcoal",
  textColor: "text-sand",
  groups: [{
    name: "Case for Making Workshops",
    description: "Hands-on craft and making workshops. Build something, meet people."
  }, {
    name: "Black Bird Book Clubs and Workshops",
    description: "Literary community at the local bookshop. Reading, discussing, connecting."
  }, {
    name: "Outer Village",
    description: "Community space and gathering point. Events, workshops, and local happenings."
  }, {
    name: "Third Realm",
    description: "Creative community and maker space. Art, craft, and good company."
  }]
}, {
  name: "neighborhood & civic life",
  bgColor: "bg-fog",
  textColor: "text-charcoal",
  groups: [{
    name: "Outer Sunset Neighbors",
    description: "The neighborhood association. Advocacy, events, and staying informed."
  }, {
    name: "School PTAs",
    description: "If you have kids in local schools, this is where parents gather."
  }, {
    name: "Lions Club – SF Parkside / Sunset",
    description: "Service club with deep neighborhood roots. Community projects and fellowship."
  }, {
    name: "Sunset Mercantile",
    description: "Local business collective. Supporting the shops that make the neighborhood."
  }]
}, {
  name: "faith & spiritual life",
  bgColor: "bg-sunset",
  textColor: "text-sand",
  groups: [{
    name: "Sunset Church",
    description: "Welcoming community church in the heart of the neighborhood."
  }, {
    name: "United Irish Cultural Center",
    description: "Cultural community, events, and gathering place."
  }, {
    name: "St. Gabriel's Church",
    description: "Catholic parish with an active community."
  }, {
    name: "Holy Name of Jesus Parish",
    description: "Another neighborhood Catholic parish. Regular services and community events."
  }]
}, {
  name: "food & gathering",
  bgColor: "bg-primary",
  textColor: "text-sand",
  groups: [{
    name: "Outer Sunset Farmers' Market",
    description: "Sunday mornings. The place to see and be seen while buying produce."
  }, {
    name: "Woods Outbound Community Nights",
    description: "Local brewery with regular community events. Good beer, good neighbors."
  }]
}];
export function LocalGroups() {
  return <section id="local-groups" className="py-16 bg-sand">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          local groups
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A growing list of groups and ways to join                           
        </p>

        <div className="max-w-6xl mx-auto space-y-4">
          {categories.map(category => <div key={category.name} className={`${category.bgColor} rounded-2xl overflow-hidden`}>
              <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
                {/* Category Title - Left Side */}
                <div className="p-8 md:p-10 flex items-start">
                  <h3 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold ${category.textColor} leading-tight`}>
                    {category.name}
                  </h3>
                </div>

                {/* Groups List - Right Side */}
                <div className={`${category.textColor} px-6 md:px-8 pb-6 md:py-6`}>
                  <Accordion type="multiple" className="space-y-0">
                    {category.groups.map((group, index) => <AccordionItem key={group.name} value={group.name} className={`border-b border-current/20 ${index === 0 ? 'border-t' : ''}`}>
                        <AccordionTrigger className="py-5 hover:no-underline group">
                          <span className="font-display text-lg md:text-xl font-medium text-left">
                            {group.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-5">
                          <div className="flex items-start justify-between gap-4">
                            <p className="text-base opacity-90 leading-relaxed">
                              {group.description}
                            </p>
                            {group.link && <a href={group.link} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity flex-shrink-0 underline">
                                {group.link}
                              </a>}
                          </div>
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}