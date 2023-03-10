const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.unsplash.com", "via.placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/leaflet/dist/images",
            to: path.resolve(__dirname, "public", "leaflet", "images"),
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;

