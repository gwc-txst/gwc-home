/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/join",
        destination: "https://canvas.txstate.edu/enroll/W6N879",
      },
    ];
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
