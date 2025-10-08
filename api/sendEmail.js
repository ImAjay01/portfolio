import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Configure Nodemailer with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
      <h2 style="color: #333;">Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
        <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #eee;">Name:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
        <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #eee;">Email:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
        </tr>
        <tr>
        <td style="font-weight: bold; padding: 8px;">Message:</td>
        <td style="padding: 8px;">${message.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #555;">
        This message was submitted via the portfolio contact form. Please review the details above and respond as appropriate.
      </p>
      </div>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
