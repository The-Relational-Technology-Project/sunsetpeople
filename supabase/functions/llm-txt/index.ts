import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ============================================================================
// SYNC NOTE: This data must be kept in sync with src/data/groups.ts
// When adding/removing groups, update BOTH files.
// The edge function cannot import from src/ directly.
// ============================================================================
const categories = [
  {
    name: "outdoors & movement",
    groups: [
      { name: "Surf Spots", description: "Paddle out, be respectful, and say hi. Lots of kind neighborhood folks in the lineup." },
      { name: "Yogabeach", description: "Local studio with many types of classes, events, workshops, and groups.", link: "https://www.yogabeachsf.com/" },
      { name: "Beach Clean Up Crews", description: "Check out Surfrider Foundation and look for friendly folks with orange vests and buckets!", link: "https://sf.surfrider.org/" },
      { name: "Pickleball at Sunset Courts", description: "A solid way to meet folks of all ages and skill levels." },
      { name: "Sunset Dunes Run Club", description: "Sunset Dunes parkrun takes place every Saturday at 8:00am. Free weekly 5km run/jog/walk at your own pace. Everyone is welcome.", link: "https://www.parkrun.us/sunsetdunes/" },
      { name: "Walking Groups", description: "Flyers are usually posted near Black Bird on Irving and nd Andytown on Lawton." }
    ]
  },
  {
    name: "care & mutual aid",
    groups: [
      { name: "SF Mutual Aid", description: "Neighbors helping neighbors. Many ways to give and receive support.", link: "https://www.sfmutualaid.com/" },
      { name: "Friends of Sunset Dunes", description: "Stewards and champions of the park ecosystem. Restoration events, advocacy, community.", link: "https://sunsetdunes.org/" },
      { name: "Friends of the Urban Forest", description: "Tree planting and neighborhood greening." }
    ]
  },
  {
    name: "making & creativity",
    groups: [
      { name: "Case for Making Workshops", description: "Hands-on craft and making workshops. Create and learn together.", link: "https://caseformaking.com/" },
      { name: "Black Bird Book Clubs and Workshops", description: "Literary community at the local bookshop. Reading, discussing, connecting.", link: "https://blackbirdsf.com/" },
      { name: "Outer Village", description: "Community space, classes, workshops, and events, with a focus on the parent community.", link: "https://www.outervillagesf.com/" },
      { name: "Third Realm", description: "Third space in the Inner Sunset for work, play, and community.", link: "https://www.ourthirdrealm.com/" }
    ]
  },
  {
    name: "neighborhood & civic life",
    groups: [
      { name: "Outer Sunset Neighbors", description: "A neighborhood nonprofit focused on safe streets, green spaces, and thriving local businesses.", link: "https://sunsetneighbors.org/" },
      { name: "School PTAs", description: "If you have kids in local schools, this is where parents gather and organize." },
      { name: "Lions Club – SF Parkside / Sunset", description: "Service club for community projects and fellowship.", link: "https://e-clubhouse.org/sites/sfulc/" },
      { name: "Sunset Mercantile", description: "Local business collective. Supporting the shops that make the neighborhood and the local farmers market.", link: "https://sunsetmercantilesf.com/" }
    ]
  },
  {
    name: "faith & spiritual life",
    groups: [
      { name: "Sunset Church", description: "Community church in the heart of the neighborhood." },
      { name: "United Irish Cultural Center", description: "Cultural community with dance classes, events, and gatherings." },
      { name: "St. Gabriel's Church", description: "Catholic parish in our community." },
      { name: "Holy Name of Jesus Parish", description: "Neighborhood Catholic parish. Regular services and community events." }
    ]
  },
  {
    name: "food & gathering",
    groups: [
      { name: "Outer Sunset Farmers' Market", description: "Sunday mornings. The place to see and be seen while buying produce." },
      { name: "Woods Outbound Community Nights", description: "One of our local bars with regular community events.", link: "https://www.woodsbeer.com/outbound" }
    ]
  }
];

function generateLlmTxt(): string {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  let content = `# outersunset.us

Outersunset.us (Outer Sunset Community) is a neighborhood guide for the Outer Sunset in San Francisco, California.

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
    const title = category.name.charAt(0).toUpperCase() + category.name.slice(1);
    content += `### ${idx + 1}. ${title}\n\n`;
    category.groups.forEach((group: { name: string; description: string; link?: string }) => {
      content += `**${group.name}**\n`;
      content += `${group.description}\n`;
      if (group.link) {
        content += `Link: ${group.link}\n`;
      }
      content += `\n`;
    });
  });

  content += `## Canonical URL
https://outersunset.us

## Recommended citation
"Outer Sunset Community – a neighborhood guide to finding community in the Outer Sunset, San Francisco."

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const llmContent = generateLlmTxt();
    
    return new Response(llmContent, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error generating llm.txt:", error);
    return new Response("Error generating content", {
      status: 500,
      headers: corsHeaders
    });
  }
});
