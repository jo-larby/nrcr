const LOCALHOST = "http://localhost:8080";

const PROXY_CONFIG = [
  {
    context: ["/api/*"],
    target: LOCALHOST,
    secure: false,
    pathRewrite: function (path, req) {
      console.log("path" + path);
    },
    logLevel: "debug",
  },
];
module.exports = PROXY_CONFIG;
