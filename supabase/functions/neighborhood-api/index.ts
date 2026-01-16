import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Group data matching src/data/groups.ts - kept in sync manually
interface Group {
  id: string;
  name: string;
  description: string;
  url?: string;
  category: string[];
  location: {
    name: string;
    neighborhood: string;
    city: string;
    region: string;
  };
  source: {
    publisher: string;
    collected_at: string;
    license: string;
  };
}

interface Category {
  name: string;
  groups: { name: string; description: string; link?: string; meets?: string }[];
}

const categories: Category[] = [
  {
    name: "outdoors & movement",
    groups: [
      { name: "Surf Spots", description: "Paddle out, be respectful, and say hi. Lots of kind neighborhood folks in the lineup." },
      { name: "Yogabeach", description: "Local studio with many types of classes, events, workshops, and groups.", link: "https://www.yogabeachsf.com/" },
      { name: "Beach Clean Up Crews", description: "Check out Surfrider Foundation and look for friendly folks with orange vests and buckets!", link: "https://sf.surfrider.org/" },
      { name: "Pickleball at Sunset Courts", description: "A solid way to meet folks of all ages and skill levels." },
      { name: "Sunset Dunes Run Club", description: "Sunset Dunes parkrun takes place every Saturday at 8:00am. Free weekly 5km run/jog/walk at your own pace. Everyone is welcome.", link: "https://www.parkrun.us/sunsetdunes/", meets: "Saturdays 8:00am" },
      { name: "Walking Groups", description: "Flyers are usually posted near Black Bird on Irving and Andytown on Lawton." },
    ],
  },
  {
    name: "care & mutual aid",
    groups: [
      { name: "SF Mutual Aid", description: "Neighbors helping neighbors. Many ways to give and receive support.", link: "https://www.sfmutualaid.com/" },
      { name: "Friends of Sunset Dunes", description: "Stewards and champions of the park ecosystem. Restoration events, advocacy, community.", link: "https://sunsetdunes.org/" },
      { name: "Friends of the Urban Forest", description: "Tree planting and neighborhood greening." },
      { name: "Outer Mamas and Outer Dadas", description: "Group chats and gatherings for dads and moms in the Sunset and Richmond. Ask a member or share your WhatsApp number in the contact message and someone will add you!" },
    ],
  },
  {
    name: "making & creativity",
    groups: [
      { name: "Case for Making Workshops", description: "Hands-on craft and making workshops. Create and learn together.", link: "https://caseformaking.com/" },
      { name: "Black Bird Book Clubs and Workshops", description: "Literary community at the local bookshop. Reading, discussing, connecting.", link: "https://blackbirdsf.com/" },
      { name: "Outer Village", description: "Community space, classes, workshops, and events, with a focus on the parent community.", link: "https://www.outervillagesf.com/" },
      { name: "Third Realm", description: "Third space in the Inner Sunset for work, play, and community.", link: "https://www.ourthirdrealm.com/" },
    ],
  },
  {
    name: "neighborhood & civic life",
    groups: [
      { name: "Outer Sunset Neighbors", description: "A neighborhood nonprofit focused on safe streets, green spaces, and thriving local businesses.", link: "https://sunsetneighbors.org/" },
      { name: "School PTAs", description: "If you have kids in local schools, this is where parents gather and organize." },
      { name: "Lions Club – SF Parkside / Sunset", description: "Service club for community projects and fellowship.", link: "https://e-clubhouse.org/sites/sfulc/" },
      { name: "Sunset Mercantile", description: "Local business collective. Supporting the shops that make the neighborhood and the local farmers market.", link: "https://sunsetmercantilesf.com/" },
    ],
  },
  {
    name: "faith & spiritual life",
    groups: [
      { name: "Sunset Church", description: "Community church in the heart of the neighborhood." },
      { name: "United Irish Cultural Center", description: "Cultural community with dance classes, events, and gatherings." },
      { name: "St. Gabriel's Church", description: "Catholic parish in our community." },
      { name: "Holy Name of Jesus Parish", description: "Neighborhood Catholic parish. Regular services and community events." },
    ],
  },
  {
    name: "food & gathering",
    groups: [
      { name: "Outer Sunset Farmers' Market", description: "Sunday mornings. The place to see and be seen while buying produce.", meets: "Sundays" },
      { name: "Woods Outbound Community Nights", description: "One of our local bars with regular community events.", link: "https://www.woodsbeer.com/outbound" },
    ],
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function transformToNeighborhoodAPI(): Group[] {
  const now = new Date().toISOString();
  
  return categories.flatMap((category) =>
    category.groups.map((group) => ({
      id: `grp_${slugify(group.name)}`,
      name: group.name,
      description: group.description,
      url: group.link,
      category: [slugify(category.name), "community"],
      location: {
        name: "Outer Sunset",
        neighborhood: "Outer Sunset",
        city: "San Francisco",
        region: "California",
      },
      source: {
        publisher: "outersunset.us",
        collected_at: now,
        license: "CC BY 4.0",
      },
    }))
  );
}

function getMeta() {
  return {
    name: "Outer Sunset Community",
    description: "A neighborhood guide to finding community in the Outer Sunset, San Francisco.",
    url: "https://outersunset.us",
    version: "0.1",
    stewards: [
      {
        name: "Outer Sunset Community",
        contact: "https://outersunset.us/#contact",
      },
    ],
    resources: ["groups"],
    license: "CC BY 4.0",
    updated_at: new Date().toISOString(),
  };
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.pathname.replace(/^\/neighborhood-api\/?/, "").replace(/\/$/, "");
    
    console.log(`Neighborhood API request: ${path || "root"}`);

    let data: unknown;
    let status = 200;

    switch (path) {
      case "":
      case "meta":
        data = getMeta();
        break;
      case "groups":
        const groups = transformToNeighborhoodAPI();
        // Support query filter
        const q = url.searchParams.get("q")?.toLowerCase();
        const category = url.searchParams.get("category");
        
        data = groups.filter((g) => {
          if (q && !g.name.toLowerCase().includes(q) && !g.description.toLowerCase().includes(q)) {
            return false;
          }
          if (category && !g.category.includes(category)) {
            return false;
          }
          return true;
        });
        break;
      default:
        // Check for individual group by ID
        if (path.startsWith("groups/")) {
          const groupId = path.replace("groups/", "");
          const allGroups = transformToNeighborhoodAPI();
          const group = allGroups.find((g) => g.id === groupId);
          if (group) {
            data = group;
          } else {
            data = { error: "Group not found" };
            status = 404;
          }
        } else {
          data = { 
            error: "Not found", 
            available_endpoints: ["/meta", "/groups", "/groups/{id}"] 
          };
          status = 404;
        }
    }

    return new Response(JSON.stringify(data, null, 2), {
      status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Neighborhood API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
