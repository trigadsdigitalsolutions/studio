import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'c.ndtvimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.deccanchronicle.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wticabs.com',
        port: '3001',
      },
      {
        protocol: 'https',
        hostname: 'www.tourmyindia.com',
      },
      {
        protocol: 'https',
        hostname: 'ihramtravel.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.tripuntold.com',
      },
      {
        protocol: 'https',
        hostname: 'sherytravels.com',
      },
    ],
  },
};

export default nextConfig;
