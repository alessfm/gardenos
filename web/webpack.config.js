const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: { 
    extensions: ['*', '.js', '.jsx'] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: { presets: ['@babel/preset-env','@babel/preset-react'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.png|svg|jpg|gif$/,
      //   use: ["file-loader"],
      // },
    ]
  }
};
