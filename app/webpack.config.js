var webpack = require('webpack'),
  path = require('path'),
  ROOT_PATH = path.resolve(__dirname),
  ENTRY_PATH = path.resolve(ROOT_PATH, 'src/index'),
  OUTPUT_PATH = path.resolve(ROOT_PATH, 'build'),
  PUBLIC_PATH = path.resolve(ROOT_PATH, 'public')
  API_URL = 'http://localhost:3000/'

module.exports = {
  devtool: 'source-map',
  entry: [
    ENTRY_PATH,
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: OUTPUT_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: [
      PUBLIC_PATH,
      OUTPUT_PATH
    ],
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: '0.0.0.0',
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(API_URL)
    })
  ]
};
