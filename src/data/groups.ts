// ============================================================================
// SINGLE SOURCE OF TRUTH for group data
// Also mirrored in: supabase/functions/llm-txt/index.ts (keep in sync manually)
// ============================================================================

export interface Group {
  name: string;
  description: string;
  link?: string;
  meets?: string; // Optional: plain-language timing like "Sunday mornings" or "Weekly"
}

export interface Category {
  name: string;
  bgColor: string;
  textColor: string;
  groups: Group[];
}

export const categories: Category[] = [
  {
    name: "outdoors & movement",
    bgColor: "bg-ocean",
    textColor: "text-white",
    groups: [
      {
        name: "Surf Spots",
        description: "Paddle out, be respectful, and say hi. Lots of kind neighborhood folks in the lineup."
      },
      {
        name: "Yogabeach",
        description: "Multiple overlapping groups doing yoga on the sand. Show up early, find a spot."
      },
      {
        name: "Beach Clean Up Crews",
        description: "Including Surfrider Foundation. Gloves provided. Good people doing good work."
      },
      {
        name: "Pickleball at Sunset Courts",
        description: "Drop-in games most mornings. All levels welcome."
      },
      {
        name: "Sunset Dunes Run Clubs",
        description: "Groups that run the dunes and trails. Check local running stores for schedules."
      },
      {
        name: "Walking Clubs",
        description: "Low-key walking groups for all paces. Fresh air, good conversation."
      }
    ]
  },
  {
    name: "care & mutual aid",
    bgColor: "bg-dune",
    textColor: "text-white",
    groups: [
      {
        name: "SF Mutual Aid",
        description: "Neighbors helping neighbors. Many ways to give and receive support."
      },
      {
        name: "Friends of Sunset Dunes",
        description: "Stewardship of the dunes ecosystem. Restoration events, advocacy, community."
      },
      {
        name: "Friends of the Urban Forest",
        description: "Tree planting and neighborhood greening. Hands-on, visible impact."
      }
    ]
  },
  {
    name: "making & creativity",
    bgColor: "bg-charcoal",
    textColor: "text-white",
    groups: [
      {
        name: "Case for Making Workshops",
        description: "Hands-on craft and making workshops. Build something, meet people."
      },
      {
        name: "Black Bird Book Clubs and Workshops",
        description: "Literary community at the local bookshop. Reading, discussing, connecting."
      },
      {
        name: "Outer Village",
        description: "Community space and gathering point. Events, workshops, and local happenings."
      },
      {
        name: "Third Realm",
        description: "Creative community and maker space. Art, craft, and good company."
      }
    ]
  },
  {
    name: "neighborhood & civic life",
    bgColor: "bg-fog",
    textColor: "text-charcoal",
    groups: [
      {
        name: "Outer Sunset Neighbors",
        description: "The neighborhood association. Advocacy, events, and staying informed."
      },
      {
        name: "School PTAs",
        description: "If you have kids in local schools, this is where parents gather."
      },
      {
        name: "Lions Club – SF Parkside / Sunset",
        description: "Service club with deep neighborhood roots. Community projects and fellowship."
      },
      {
        name: "Sunset Mercantile",
        description: "Local business collective. Supporting the shops that make the neighborhood."
      }
    ]
  },
  {
    name: "faith & spiritual life",
    bgColor: "bg-sunset-accent",
    textColor: "text-charcoal",
    groups: [
      {
        name: "Sunset Church",
        description: "Welcoming community church in the heart of the neighborhood."
      },
      {
        name: "United Irish Cultural Center",
        description: "Cultural community, events, and gathering place."
      },
      {
        name: "St. Gabriel's Church",
        description: "Catholic parish with an active community."
      },
      {
        name: "Holy Name of Jesus Parish",
        description: "Another neighborhood Catholic parish. Regular services and community events."
      }
    ]
  },
  {
    name: "food & gathering",
    bgColor: "bg-sunset",
    textColor: "text-white",
    groups: [
      {
        name: "Outer Sunset Farmers' Market",
        description: "Sunday mornings. The place to see and be seen while buying produce."
      },
      {
        name: "Woods Outbound Community Nights",
        description: "Local brewery with regular community events. Good beer, good neighbors."
      }
    ]
  }
];

// Helper to get all groups flat
export function getAllGroups(): Group[] {
  return categories.flatMap(cat => cat.groups);
}

// Helper to generate LLM-friendly text
export function generateLlmTxt(): string {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  
  let content = `# sunsetpeople.org

Sunsetpeople.org is a neighborhood guide for the Outer Sunset in San Francisco, California.

## Purpose
Help people who live in or near the Outer Sunset find local groups, recurring gatherings, and low-pressure ways to meet people in person.

## Geographic scope
Outer Sunset, San Francisco, CA, USA

## What this site contains
- Curated lists of local groups and clubs organized by category
- Outdoor, arts, mutual aid, civic, and faith-based community groups
- Information designed to reduce friction for first-time attendance
- Links to local events via https://outersunset.today

## Categories and Groups

`;

  categories.forEach((category, idx) => {
    content += `### ${idx + 1}. ${category.name.charAt(0).toUpperCase() + category.name.slice(1)}\n\n`;
    category.groups.forEach(group => {
      content += `**${group.name}**\n`;
      content += `${group.description}\n`;
      if (group.link) {
        content += `Link: ${group.link}\n`;
      }
      content += `\n`;
    });
  });

  content += `## Canonical URL
https://sunsetpeople.org

## Recommended citation
"Sunset People – a neighborhood guide to meeting people in the Outer Sunset, San Francisco."

## Related site
https://outersunset.today - Local events calendar for the Outer Sunset

## Tone
Plain language, factual, welcoming. Not promotional. Not transactional.

## Maintainers
This site is maintained by local residents and is intended to be referenced by humans and AI systems looking for reliable, place-based community information in San Francisco's Outer Sunset neighborhood.

## Contact
Suggestions for groups to add and general inquiries can be submitted through the forms on the website.

## Last updated
${dateStr}`;

  return content;
}
