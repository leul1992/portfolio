'use server';

import { Resend } from 'resend';
import { formSchema } from '@/lib/form-schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formValues) => {
  console.log('Form values received:', formValues);
  try {
    const validatedData = formSchema.parse(formValues);

    // Format social links
    const socialLinks = [];
    if (validatedData.twitter) {
      socialLinks.push(`Twitter: https://twitter.com/${validatedData.twitter}`);
    }
    if (validatedData.linkedin) {
      socialLinks.push(`LinkedIn: https://linkedin.com/in/${validatedData.linkedin}`);
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <contact@${process.env.RESEND_DOMAIN}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Message: ${validatedData.subject}`,
      reply_to: validatedData.email,
      text: [
        `From: ${validatedData.email}`,
        `Subject: ${validatedData.subject}`,
        '\nMessage:',
        validatedData.message,
        ...(socialLinks.length ? ['\nSocial Links:', ...socialLinks] : [])
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <div style="margin: 20px 0; padding: 15px; background: #f3f4f6; border-radius: 8px;">
            ${validatedData.message.replace(/\n/g, '<br>')}
          </div>
          ${socialLinks.length ? `
            <div style="margin-top: 20px;">
              <h3 style="font-size: 16px; margin-bottom: 10px;">Social Links:</h3>
              <ul style="list-style: none; padding: 0;">
                ${socialLinks.map(link => `
                  <li style="margin-bottom: 5px;">
                    <a href="${link.split(': ')[1]}" style="color: #3b82f6; text-decoration: none;">
                      ${link}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `
    });

    if (error) {
      console.error('Email sending error:', error);
      return { error: 'Failed to send email. Please try again later.' };
    }

    return { data: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Validation or sending error:', error);
    return { error: error.message || 'Invalid form data or failed to send message.' };
  }
};