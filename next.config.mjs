/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },

  redirects: () => [
    {
      source: "/About",
      destination: "/",
      permanent: true,
    },
  ],
};

export default nextConfig;
