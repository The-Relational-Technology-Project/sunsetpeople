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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: NotificationRequest = await req.json();
    console.log("Received notification request:", data.type);

    let subject: string;
    let html: string;

    if (data.type === "contact") {
      subject = `New contact message from ${data.name}`;
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `;
    } else if (data.type === "group_suggestion") {
      subject = `New group suggestion: ${data.group_name}`;
      html = `
        <h2>New Group Suggestion</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Group Name:</strong> ${data.group_name}</p>
        ${data.group_link ? `<p><strong>Link:</strong> <a href="${data.group_link}">${data.group_link}</a></p>` : ""}
        ${data.note ? `<h3>Note:</h3><p>${data.note.replace(/\n/g, "<br>")}</p>` : ""}
      `;
    } else {
      throw new Error("Invalid notification type");
    }

    const emailResponse = await resend.emails.send({
      from: "Outer Sunset Guide <hello@relationaltechproject.org>",
      to: ["josh@relationaltechproject.org"],
      subject,
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-notification function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
