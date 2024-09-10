'use server';

import { Resend } from 'resend';
// import { env } from '@.env.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, message, subject, twitter, linkedin }) => {
  try {
    let socialInfo = '';
    
    if (twitter) socialInfo += `Twitter: ${twitter}\n`;
    if (linkedin) socialInfo += `LinkedIn: ${linkedin}\n`;

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'leulbkm@gmail.com',
      subject: subject,
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}\n\n${socialInfo}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: 'Something went wrong!',
    };
  }
};


