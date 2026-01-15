import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotification {
  type: "contact";
  name: string;
  email: string;
  message: string;
}

interface GroupSuggestionNotification {
  type: "group_suggestion";
  name: string;
  email: string;
  group_name: string;
  group_link?: string;
  note?: string;
}

type NotificationRequest = ContactNotification | GroupSuggestionNotification;

// Simple HTML escaping to prevent XSS in email content
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Validate URL format (basic check)
function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

// Validate input lengths and format
function validateInput(data: NotificationRequest): { valid: boolean; error?: string } {
  // Common validations
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (data.name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }

  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email.trim())) {
    return { valid: false, error: "Valid email is required" };
  }

  if (data.type === "contact") {
    if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
      return { valid: false, error: "Message is required" };
    }
    if (data.message.length > 5000) {
      return { valid: false, error: "Message must be less than 5000 characters" };
    }
  } else if (data.type === "group_suggestion") {
    if (!data.group_name || typeof data.group_name !== 'string' || data.group_name.trim().length === 0) {
      return { valid: false, error: "Group name is required" };
    }
    if (data.group_name.length > 200) {
      return { valid: false, error: "Group name must be less than 200 characters" };
    }
    if (data.group_link && (typeof data.group_link !== 'string' || data.group_link.length > 500)) {
      return { valid: false, error: "Group link must be less than 500 characters" };
    }
    if (data.group_link && !isValidUrl(data.group_link)) {
      return { valid: false, error: "Group link must be a valid URL" };
    }
    if (data.note && (typeof data.note !== 'string' || data.note.length > 2000)) {
      return { valid: false, error: "Note must be less than 2000 characters" };
    }
  } else {
    return { valid: false, error: "Invalid notification type" };
  }

  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify the request has the Supabase API key (anon key)
    const authHeader = req.headers.get("authorization");
    const apiKey = req.headers.get("apikey");
    
    // Check if either auth header or apikey is present
    // This ensures requests come from our frontend via supabase client
    if (!authHeader && !apiKey) {
      console.error("Unauthorized request: missing auth credentials");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data: NotificationRequest = await req.json();
    
    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      console.error("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    console.log("Received notification request:", data.type);

    let subject: string;
    let html: string;

    // Sanitize all user inputs before including in email
    const safeName = escapeHtml(data.name.trim());
    const safeEmail = escapeHtml(data.email.trim());

    if (data.type === "contact") {
      const safeMessage = escapeHtml(data.message.trim());
      subject = `New contact message from ${safeName}`;
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
        <h3>Message:</h3>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `;
    } else if (data.type === "group_suggestion") {
      const safeGroupName = escapeHtml(data.group_name.trim());
      const safeGroupLink = data.group_link ? escapeHtml(data.group_link.trim()) : "";
      const safeNote = data.note ? escapeHtml(data.note.trim()) : "";
      
      subject = `New group suggestion: ${safeGroupName}`;
      html = `
        <h2>New Group Suggestion</h2>
        <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
        <p><strong>Group Name:</strong> ${safeGroupName}</p>
        ${safeGroupLink ? `<p><strong>Link:</strong> <a href="${safeGroupLink}">${safeGroupLink}</a></p>` : ""}
        ${safeNote ? `<h3>Note:</h3><p>${safeNote.replace(/\n/g, "<br>")}</p>` : ""}
      `;
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid notification type" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "Outer Sunset Guide <hello@relationaltechproject.org>",
      to: ["josh@relationaltechproject.org"],
      subject,
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-notification function:", errorMessage);
    // Return generic error to client, log details server-side
    return new Response(
      JSON.stringify({ error: "Failed to send notification" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
