export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sunsetpeople.org/#website",
        "url": "https://sunsetpeople.org",
        "name": "Sunset People",
        "description": "A friendly guide to meeting people and finding community in the Outer Sunset, San Francisco.",
        "publisher": {
          "@id": "https://sunsetpeople.org/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://sunsetpeople.org/#organization",
        "name": "Sunset People",
        "url": "https://sunsetpeople.org",
        "description": "A neighborhood guide for the Outer Sunset in San Francisco, helping residents find local groups and community connections.",
        "areaServed": {
          "@type": "Place",
          "name": "Outer Sunset",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://sunsetpeople.org/#local-groups",
        "name": "Local Groups in the Outer Sunset",
        "description": "A curated list of community groups, clubs, and gatherings in San Francisco's Outer Sunset neighborhood.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Organization",
              "name": "Outer Sunset Farmers' Market",
              "description": "Sunday mornings. The place to see and be seen while buying produce.",
              "areaServed": "Outer Sunset, San Francisco"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Organization",
              "name": "Surfrider Foundation Beach Cleanup",
              "description": "Beach clean up crews with gloves provided. Good people doing good work.",
              "areaServed": "Outer Sunset, San Francisco"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Organization",
              "name": "Friends of Sunset Dunes",
              "description": "Stewardship of the dunes ecosystem. Restoration events, advocacy, community.",
              "areaServed": "Outer Sunset, San Francisco"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Organization",
              "name": "Outer Sunset Neighbors",
              "description": "The neighborhood association. Advocacy, events, and staying informed.",
              "areaServed": "Outer Sunset, San Francisco"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Organization",
              "name": "Yogabeach",
              "description": "Multiple overlapping groups doing yoga on the sand. Show up early, find a spot.",
              "areaServed": "Outer Sunset, San Francisco"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sunsetpeople.org/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I make friends in the Outer Sunset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Show up more than once to the same places. Go to the same spot at the same time. Say hi first, even if it feels awkward. Join something that already exists. Let it be slow."
            }
          },
          {
            "@type": "Question",
            "name": "What community groups exist in the Outer Sunset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Outer Sunset has groups for outdoors and movement (surf, yoga, beach cleanups, pickleball, running), care and mutual aid, making and creativity, neighborhood and civic life, faith and spiritual life, and food and gathering."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find events happening in the Outer Sunset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Visit outersunset.today for a calendar of events, pop-ups, and things happening each week in the Outer Sunset neighborhood."
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
