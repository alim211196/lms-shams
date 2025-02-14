/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Helps fix static export issues
  reactStrictMode: true,
  experimental: { appDir: true }, // Ensure App Router works correctly
};

export default nextConfig;
