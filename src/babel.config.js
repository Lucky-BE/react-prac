module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "@components": "./src/components",
          "@common": "./src/common",
          "@utils": "./src/utils",
          "#axios": "./src/axiosInstance",
          // 필요에 따라 별칭을 추가하세요
        },
      },
      "@babel/plugin-syntax-jsx",
    ],
  ],
};
