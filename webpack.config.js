// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {

    //개발 환경
    mode: 'development', // 1

    // 어플리케이션 시작 경로
    entry: './src/index.js', // 2

    //번들된 파일 경로
    output: { // 3
      filename: 'bundle.[hash].js' // 4
    },

    // loader 설정
    module: {
        rules: [
          { // 1  <---  es6 바벨 관련 loader
            test: /\.(js|jsx)$/,    //빌드할 파일 확장자 정규식
            exclude: /node_modules/,    //제외할 파일 정규식
            use: {
              loader: 'babel-loader',   // 사용할 로더 이름
              // option : '로더 옵션'
            },
          },
          { // 2    <--- html loader
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,   // 코드 최소화 옵션
                },
              },
            ],
          },
        ],
      },
    
    //plug in 설정
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],

    //개발 서버 설정
    devServer: {
        host: 'localhost',
        port: port,
        open: true, //서버가 실행될 때 브라우저 자동 오픈 설정
    },

  };


  
