import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  industry: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().optional(),
});

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const data = contactSchema.parse(req.body);

    // Send via Resend if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A0F1C; border-bottom: 2px solid #4F8EF7; padding-bottom: 8px;">
            New Contact — hubble.inc
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; font-weight: 600;">Name</td>
              <td style="padding: 8px 0; color: #111;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #4F8EF7;">${data.email}</a></td>
            </tr>
            ${data.company ? `<tr><td style="padding: 8px 0; color: #666; font-weight: 600;">Company</td><td style="padding: 8px 0; color: #111;">${data.company}</td></tr>` : ""}
            ${data.industry ? `<tr><td style="padding: 8px 0; color: #666; font-weight: 600;">Industry</td><td style="padding: 8px 0; color: #111;">${data.industry}</td></tr>` : ""}
            ${data.projectType ? `<tr><td style="padding: 8px 0; color: #666; font-weight: 600;">Project Type</td><td style="padding: 8px 0; color: #111;">${data.projectType}</td></tr>` : ""}
          </table>
          ${
            data.message
              ? `<div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-left: 3px solid #4F8EF7; border-radius: 4px;">
              <p style="color: #666; font-weight: 600; margin: 0 0 8px;">Message</p>
              <p style="color: #111; margin: 0; line-height: 1.6;">${data.message}</p>
            </div>`
              : ""
          }
          <p style="margin-top: 24px; color: #999; font-size: 12px;">
            Submitted via hubble.inc contact form
          </p>
        </div>
      `;

      await resend.emails.send({
        from: "Hubble Website <noreply@hubble.inc>",
        to: ["hello@hubble.inc"],
        subject: `New Contact: ${data.firstName} ${data.lastName}${data.company ? ` — ${data.company}` : ""}`,
        html: emailHtml,
        replyTo: data.email,
      });

      console.log(`Email sent successfully for ${data.email}`);
    } else {
      console.log("[Contact Form] No API key - data:", {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        company: data.company,
        industry: data.industry,
      });
      console.warn("RESEND_API_KEY not set");
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[Contact Form Error]", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try emailing us directly at hello@hubble.inc",
    });
  }
}
