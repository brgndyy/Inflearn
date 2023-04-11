const path = require("path");

module.exports = {
  mode: "development", // 개발모드 설정
  entry: "./src/app.js", // 이 안의 코드를 번들링해줌
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // dist폴더에 main.js 파일을 만들어줌
  },
};
