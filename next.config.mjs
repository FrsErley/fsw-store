/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fsw-store.s3.sa-east-1.amazonaws.com",
      },
      {
        hostname: "utfs.io",
      },
    ],
    // domains: ["fsw-store.s3.sa-east-1.amazonaws.com", "utfs.io"],
  },
};

export default nextConfig;
