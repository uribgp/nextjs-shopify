/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  images: {
    domains: ["cdn.shopify.com"],
  },
  framework: {
    name: "shopify",
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
