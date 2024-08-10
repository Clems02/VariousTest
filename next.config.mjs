/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img01.ztat.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
