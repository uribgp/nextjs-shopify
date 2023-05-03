/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  images: {
    domains: ["cdn.shopify.com"],
  },
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
