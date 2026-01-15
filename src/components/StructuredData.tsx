import { categories } from "@/data/groups";

export function StructuredData() {
  // Generate ItemList from centralized group data
  const itemListElements = categories.flatMap((category, catIndex) =>
    category.groups.map((group, groupIndex) => ({
      "@type": "ListItem",
      position: catIndex * 10 + groupIndex + 1,
      item: {
        "@type": "Organization",
        name: group.name,
        description: group.description,
        areaServed: "Outer Sunset, San Francisco",
        ...(group.link && { url: group.link })
      }
    }))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://outersunset.us/#website",
        url: "https://outersunset.us",
        name: "Outer Sunset Community",
        description:
          "A friendly guide to finding community in the Outer Sunset, San Francisco.",
        publisher: {
          "@id": "https://outersunset.us/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://outersunset.us/#organization",
        name: "Outer Sunset Community",
        url: "https://outersunset.us",
        description:
          "A neighborhood guide for the Outer Sunset in San Francisco, helping residents find local groups and community connections.",
        areaServed: {
          "@type": "Place",
          name: "Outer Sunset",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US"
          }
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://outersunset.us/#local-groups",
        name: "Local Groups in the Outer Sunset",
        description:
          "A curated list of community groups, clubs, and gatherings in San Francisco's Outer Sunset neighborhood.",
        itemListElement: itemListElements
      },
      {
        "@type": "FAQPage",
        "@id": "https://outersunset.us/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I make friends in the Outer Sunset?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Show up more than once to the same places. Go to the same spot at the same time. Say hi first, even if it feels awkward. Join something that already exists. Let it be slow."
            }
          },
          {
            "@type": "Question",
            name: "What community groups exist in the Outer Sunset?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `The Outer Sunset has groups for ${categories.map(c => c.name).join(", ")}.`
            }
          },
          {
            "@type": "Question",
            name: "Where can I find events happening in the Outer Sunset?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Visit outersunset.today for a calendar of events, pop-ups, and things happening each week in the Outer Sunset neighborhood."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
