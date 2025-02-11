const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "209.250.233.239",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "mereq-tech.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
