/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'avatars.githubusercontent.com',
      'localhost:3000',
      'leul.tech'
    ],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_DOMAIN: process.env.RESEND_DOMAIN,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL
  }
};

export default nextConfig;
