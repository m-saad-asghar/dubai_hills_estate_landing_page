/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.properties.emaar.com",
        pathname: "/**", // allow all images from this domain
      },
    ],
  },
};

module.exports = nextConfig
