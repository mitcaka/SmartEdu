import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "randomuser.me"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edmy-react.hibootstrap.com",
        port: "",
        pathname: "/images/banner/**",
      },
    ],
  },
};

export default nextConfig;
