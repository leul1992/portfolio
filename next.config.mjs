/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Add 'domains' if you plan to load images from external sources
        domains: [], 
        // Use 'unoptimized' if you are facing issues with image optimization for local images
        unoptimized: true,
      },
};

export default nextConfig;
