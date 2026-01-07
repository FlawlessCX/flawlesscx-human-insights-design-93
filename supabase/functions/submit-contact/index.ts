import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

interface ContactRequest {
  fullName: string;
  workEmail: string;
  businessName?: string;
  phoneNumber?: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, workEmail, businessName, phoneNumber, source }: ContactRequest = await req.json();

    // Basic validation
    if (!fullName || !workEmail) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "FlawlessCX <noreply@flawlesscx.com>",
      to: ["alex@flawlesscx.com"],
      subject: `New Discovery Call Request - ${escapeHtml(fullName)}`,
      html: `
        <h1>New Discovery Call Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(workEmail)}</p>
        ${businessName ? `<p><strong>Business:</strong> ${escapeHtml(businessName)}</p>` : ''}
        ${phoneNumber ? `<p><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</p>` : ''}
        ${source ? `<p><strong>Source:</strong> ${escapeHtml(source)}</p>` : ''}
        
        <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was automatically generated from the FlawlessCX website.
        </p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
