/** @type {import('next').NextConfig} */
const { withAxiom } = require("next-axiom");

const nextConfig = withAxiom({
  images: {
    domains: ["ipfs.io", "azk.imgix.net"],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify"),
      url: require.resolve("url"),
    };
    return config;
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
