/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  framework: {
    name: "shopify",
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
