//next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.timbu.cloud/:path*",
        //Proxy to Timbu API
      },
    ];
  },
};
