/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true, dirs: ["src", ".storybook"] },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
