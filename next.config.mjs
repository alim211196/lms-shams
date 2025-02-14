/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Fixes image issues in static export
  },
  output: "export", // Enables static export mode
  distDir: "out", // Ensures the output goes to the correct folder
  trailingSlash: true, // Helps avoid 404 errors
};

export default nextConfig;
