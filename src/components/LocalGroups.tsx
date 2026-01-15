import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { categories } from "@/data/groups";

export function LocalGroups() {
  return (
    <section id="local-groups" className="py-16 bg-sand">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          local groups
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A growing list of groups and ways to join
        </p>

        <div className="max-w-6xl mx-auto space-y-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`${category.bgColor} rounded-2xl overflow-hidden`}
            >
              <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
                {/* Category Title - Left Side */}
                <div className="p-8 md:p-10 flex items-start">
                  <h3
                    className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold ${category.textColor} leading-tight`}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Groups List - Right Side */}
                <div className={`${category.textColor} px-6 md:px-8 pb-6 md:py-6`}>
                  <Accordion type="multiple" className="space-y-0">
                    {category.groups.map((group, index) => (
                      <AccordionItem
                        key={group.name}
                        value={group.name}
                        className={`border-b border-current/20 ${
                          index === 0 ? "border-t" : ""
                        }`}
                      >
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
                            {group.link && (
                              <a
                                href={group.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-80 hover:opacity-100 transition-opacity flex-shrink-0 underline"
                              >
                                {group.link}
                              </a>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
