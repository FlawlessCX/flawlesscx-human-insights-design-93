import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  business_name?: string;
  phone_number?: string;
  form_type: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, business_name, phone_number, form_type, source }: ContactEmailRequest = await req.json();

    // Send email to Alex
    const emailResponse = await resend.emails.send({
      from: "FlawlessCX <noreply@flawlesscx.com>",
      to: ["alex@flawlesscx.com"],
      subject: `New ${form_type} Form Submission - ${name}`,
      html: `
        <h1>New ${form_type} Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${business_name ? `<p><strong>Business:</strong> ${business_name}</p>` : ''}
        ${phone_number ? `<p><strong>Phone:</strong> ${phone_number}</p>` : ''}
        ${source ? `<p><strong>Source:</strong> ${source}</p>` : ''}
        
        <p><strong>Form Type:</strong> ${form_type}</p>
        <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was automatically generated from the FlawlessCX website.
        </p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);