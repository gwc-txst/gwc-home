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
        source: "/canvas",
        destination: "https://canvas.txstate.edu/enroll/W6N879",
      },
      {
        source: "/discord",
        destination: "https://discord.gg/BtwA8NwtmZ",
      },
      {
        source: "/groupme",
        destination: "https://groupme.com/join_group/85823036/HFeHlaUN",
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/girlswhocode.txst/",
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/girls-who-code-txst/",
      },
      {
        source: "/github",
        destination: "https://github.com/gwc-txst",
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
