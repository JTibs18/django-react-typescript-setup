const path = require('path');
const PUBLIC_PATH = "/static/frontend/";
const PORT = 8000;
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/, 
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.json",
            compilerOptions: {
              noEmit: false, 
            }
        }},
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /.(jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  }, 
  devServer: {
    publicPath: "/",
    contentBase: `.${PUBLIC_PATH}`,
    watchContentBase: true,
    compress: true,
    port: PORT,
    hot: true,
    inline: true,
    open: true,
    openPage: "",
    historyApiFallback: true,
    allowedHosts: ["127.0.0.0", "localhost"],
    stats: {
      colors: true,
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.svg'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './static/frontend'),
  },
};